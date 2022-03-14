const databaseController = require("../controllers/databaseController");

let connection = databaseController.connection;
let instance = null;

class DbServiceState {
  static getDbServiceInstance() {
    return instance ? instance : new DbServiceState();
  }

  async getAllStationData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * from stations";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return { response: response, err: "", error: false };
      // return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  //TODO : Discard null string values
  // async insertNewStation(stationCode, staionName, state, zone) {
  //   try {
  //     const response = await new Promise((resolve, reject) => {
  //       const query =
  //         "INSERT INTO stations (station_code,station_name,state,zone) VALUES (?, ?, ?, ?)";
  //       connection.query(
  //         query,
  //         [stationCode, staionName, state, zone],
  //         (err, result) => {
  //           if (err) {
  //             reject(new Error(err.message));
  //           } else {
  //             resolve(result);
  //             console.log(result);
  //           }
  //         }
  //       );
  //     });
  //     return response;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  async insertNewState(stateName) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "INSERT INTO state (state_name) VALUES (? )";
        connection.query(query, [stateName], (err, result) => {
          if (err) {
            reject(new Error(err.message));
          } else {
            resolve(result);
          }
        });
      });
      console.log(response);
      // return response;
      return { response: response, err: "", error: false };
      // return response > 0 ? true : false;
    } catch (error) {
      console.log(error.message);
      return { response: {}, err: error.message, error: true };
    }
  }

  async getAllStateData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * from state";
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

  async getStateData(stateName) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `SELECT * from state where state_name like '%${stateName}%' `;
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
  async deleteStateByID(stateID) {
    stateID = parseInt(stateID, 10);
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE FROM state WHERE state_id  = ?";
        connection.query(query, [stateID], (err, results) => {
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
  async updateStateByID(stateID, newStateName) {
    stateID = parseInt(stateID, 10);
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "UPDATE state SET state_name = ? WHERE state_id  = ?";
        connection.query(query, [newStateName, stateID], (err, results) => {
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

  async temp(zoneName, zoneCode) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "INSERT INTO zone (zone_name, zone_code) VALUES (? , ?)";
        connection.query(query, [zoneName, zoneCode], (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      console.log(response);
      return { response: response, err: "", error: false };
      // return response > 0 ? true : false;
    } catch (error) {
      console.log(error.message);
      return { response: {}, err: error.message, error: true };
      // return false;
    }
  }
}

module.exports = DbServiceState;
