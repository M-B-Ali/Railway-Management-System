const databaseController = require("../controllers/databaseController");

let connection = databaseController.connection;
let instance = null;

class DbServiceTrainType {
  static getDbServiceInstance() {
    return instance ? instance : new DbServiceTrainType();
  }

  async insertNewTrainType(trainTypeName, trainTypeDescription) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO train_type (train_type_name, train_type_description) VALUES (?, ?)";
        connection.query(
          query,
          [trainTypeName, trainTypeDescription],
          (err, result) => {
            if (err) {
              reject(new Error(err.message));
            } else {
              resolve(result);
            }
          }
        );
      });
      console.log(response);
      return { response: response, err: "", error: false };
    } catch (error) {
      console.log(error.message);
      return { response: {}, err: error.message, error: true };
    }
  }

  async getAllTrainTypeData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * from train_type";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { response: response, err: "", error: false };
    } catch (error) {
      console.log(error.message);
      return { response: {}, err: error.message, error: true };
    }
  }

  async getTrainTypeData(trainType) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `SELECT * from train_type where ( LOWER(train_type_name) like LOWER('%${trainType}%') OR LOWER(train_type_description) like LOWER('%${trainType}%'))`;
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { response: response, err: "", error: false };
      // return response;
    } catch (error) {
      console.log(error.message);
      return { response: {}, err: error.message, error: true };
    }
  }

  async deleteTrainTypeByID(trainTypeID) {
    trainTypeID = parseInt(trainTypeID, 10);
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE FROM train_type WHERE train_type_id  = ?";
        connection.query(query, [trainTypeID], (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      console.log(response);
      return { response: response, err: "", error: false };
      // return response > 0 ? true : false;
    } catch (error) {
      console.log(error.message);
      // return false;
      return { response: {}, err: error.message, error: true };
    }
  }

  async updateTrainTypeByID(
    trainTypeID,
    newTrainTypeName,
    newTrainTypeDescription
  ) {
    trainTypeID = parseInt(trainTypeID, 10);
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE train_type SET train_type_name = ?, train_type_description = ? WHERE train_type_id  = ?";
        connection.query(
          query,
          [newTrainTypeName, newTrainTypeDescription, trainTypeID],
          (err, results) => {
            if (err) reject(new Error(err.message));
            resolve(results);
          }
        );
      });
      console.log(response);
      return { response: response, err: "", error: false };
      // return response > 0 ? true : false;
    } catch (error) {
      console.log(error.message);
      // return false;
      return { response: {}, err: error.message, error: true };
    }
  }

  // async temp(trainTypeName) {
  //   try {
  //     const response = await new Promise((resolve, reject) => {
  //       const query = "INSERT INTO train_type (train_type_name) VALUES (?)";
  //       connection.query(query, [trainTypeName], (err, results) => {
  //         if (err) reject(new Error(err.message));
  //         resolve(results);
  //       });
  //     });
  //     console.log(response);
  //     return { response: response, err: "", error: false };
  //     // return response > 0 ? true : false;
  //   } catch (error) {
  //     console.log(error.message);
  //     return { response: {}, err: error.message, error: true };
  //     // return false;
  //   }
  // }
}

module.exports = DbServiceTrainType;
