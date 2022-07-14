const sql = require("mssql/msnodesqlv8");

const dbConfig = {
  database: "social_media",
  server: "BENSON-LAPTOP\\SQLEXPRESS",
  driver: "SQL Server",
  options: {
    trustedConnection: true,
  },
};

class Connection {
  constructor() {
    this.connectToDatabase();
  }

  connectToDatabase = async () => {
    try {
      const config = new sql.ConnectionPool(dbConfig);
      this.pool = await config.connect();
      console.log("Connected to database");
    } catch (error) {
      console.log(error.message);
      throw new Error(error.nessage);
    }
  };

  exec = async (procedure, data = {}) => {
    let request = this.pool.request();

    const dataKeys = Object.keys(data);
    dataKeys.map((keyName) => {
      request.input(keyName, data[keyName]);
    });

    const results = await request.execute(procedure);

    return results;
  };
}

module.exports = {
  exec: new Connection().exec,
};
