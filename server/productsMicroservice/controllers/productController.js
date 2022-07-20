const { exec } = require("../../authMicroservice/helpers/db");

module.exports = {
	allProducts: async (req, res) => {
		const allProducts = await exec("all_products")
			.then((result) =>
				result.recordset.length
					? res.status(200).json({
							status: 201,
							success: true,
							message: "Success",
							products: result.recordset,
					  })
					: res.status(404).json({
							status: 405,
							success: false,
							message: "No products Found",
					  })
			)
			.catch((err) => {
				return res.status(401).json({
					status: 401,
					success: false,
					message: err.message,
				});
			});
	},
	addProducts: async function (req, res) {
		const { imageUrl, productName, price, description, categoryId } = req.body;
		try {
			const product = await exec("add_products", {
				imageUrl,
				productName,
				price,
				description,
				categoryId,
			});

			if (product) {
				return res.status(201).json({
					status: 201,
					success: true,
					message: "Success, product added",
				});
			}
		} catch (err) {
			res.status(500).json({
				status: 500,
				success: false,
				message: err.message,
			});
		}
	},
	updateProducts: async function (req, res) {
		const { imageUrl, productName, price, description, categoryId } = req.body;
		try {
			const product = await exec("update_products", {
				imageUrl,
				productName,
				price,
				description,
				categoryId,
			});

			if (product) {
				return res.status(201).json({
					status: 201,
					success: true,
					message: "Success, product updated",
				});
			}
		} catch (err) {
			res.status(500).json({
				status: 500,
				success: false,
				message: err.message,
			});
		}
	},
};
