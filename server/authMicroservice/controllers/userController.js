const { exec } = require("../helpers/db");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    signup: async (req, res) => {
        const { fullName, email, telephone, password } =
            req.body;

        try {
            const userExists = await exec("verify_exists", {
                email,
            });

            if (userExists.recordset.length > 0) {
                return res.status(401).json({
                    status: 401,
                    success: false,
                    message: `User already exists, try a different email`,
                });
            }

            const hashPass = await bcrypt.hash(password, 8);

            await exec("insert_user", {
                fullName,
                email,
                telephone,
                password: hashPass,
            });

            const token = jwt.sign({ email }, process.env.JWTKEY, {
                expiresIn: "1h",
            });

            return res.status(201).json({
                status: 201,
                success: true,
                message: `A user has been registered successfully`,
                token: token,
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                success: false,
                message: error.message,
            });
        }
    },
    signin: async (req, res) => {
        const { email, password } = req.body;
        try {
            const emailExists = await exec("verify_exists", {
                email,
            });

            console.log(emailExists);

            if (emailExists.recordset.length > 0) {
                const user = emailExists.recordset[0];

                const passMatches = await bcrypt.compare(password, user.password);

                if (!passMatches) {
                    return res.status(401).json({
                        status: 401,
                        success: false,
                        message: "Invalid credentials!",
                    });
                }

                const token = jwt.sign({ email: user.email }, process.env.JWTKEY, {
                    expiresIn: "1h",
                });
                return res.status(201).json({
                    status: 201,
                    success: true,
                    message: "logged in successfully",
                    token,
                });
            } else {
                return res.status(401).json({
                    status: 401,
                    success: false,
                    message: "Invalid credentials!",
                });
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                success: false,
                message: error.message,
            });
        }
    }
}