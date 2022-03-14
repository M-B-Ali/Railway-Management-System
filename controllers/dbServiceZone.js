const databaseController = require("../controllers/databaseController");

let connection = databaseController.connection;
let instance = null;

class DbServiceZone {
  static getDbServiceInstance() {
    return instance ? instance : new DbServiceZone();
  }

  async insertNewZone(zoneName, zoneCode) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "INSERT INTO zone (zone_name, zone_code) VALUES (?, ?)";
        connection.query(query, [zoneName, zoneCode], (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
        });
      });
      console.log(response);
      return { response: response, err: "", error: false };
    } catch (error) {
      console.log(error.message);
      return { response: {}, err: error.message, error: true };
    }
  }

  async getAllZoneData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * from zone";
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

  async getZoneData(zone) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `SELECT * from zone where ( LOWER(zone_name) like LOWER('%${zone}%') OR LOWER(zone_code) like LOWER('%${zone}%'))`;
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

  async deleteZoneByID(zoneID) {
    zoneID = parseInt(zoneID, 10);
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE FROM zone WHERE zone_id  = ?";
        connection.query(query, [zoneID], (err, results) => {
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

  async updateZoneByID(zoneID, newZoneName, newZoneCode) {
    zoneID = parseInt(zoneID, 10);
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE zone SET zone_name = ?, zone_code = ? WHERE zone_id  = ?";
        connection.query(
          query,
          [newZoneName, newZoneCode, zoneID],
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

module.exports = DbServiceZone;
