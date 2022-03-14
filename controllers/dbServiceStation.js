const databaseController = require("../controllers/databaseController");

let connection = databaseController.connection;
let instance = null;

class DbServiceStation {
  static getDbServiceInstance() {
    return instance ? instance : new DbServiceStation();
  }

  async insertNewStation(stationName, stationCode, stateID, zoneID) {
    stateID = parseInt(stateID, 10);
    zoneID = parseInt(zoneID, 10);

    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO stations (station_name, station_code, state_id, zone_id) VALUES (?, ?, ?, ?)";
        connection.query(
          query,
          [stationName, stationCode, stateID, zoneID],
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

  async getAllStationData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `SELECT station_id, station_name,station_code, state.state_name, zone.zone_name, zone.zone_code from stations
        LEFT JOIN state ON state.state_id = stations.state_id
        LEFT JOIN zone ON zone.zone_id = stations.zone_id;`;
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

  async getStationData(station) {
    try {
      const response = await new Promise((resolve, reject) => {
        // const query = `SELECT * from stations where ( LOWER(station_name) like LOWER('%${station}%') OR LOWER(station_code) like LOWER('%${station}%'))`;
        const query = `SELECT station_id, station_name,station_code, state.state_name, zone.zone_name, zone.zone_code from stations 
        LEFT JOIN state ON state.state_id = stations.state_id
        LEFT JOIN zone ON zone.zone_id = stations.zone_id
        where ( LOWER(station_name) like LOWER('%${station}%') OR LOWER(station_code) like LOWER('%${station}%'));`;
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

  async deleteStationByID(stationID) {
    stationID = parseInt(stationID, 10);
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE FROM stations WHERE station_id  = ?";
        connection.query(query, [stationID], (err, results) => {
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

  async updateStationByID(
    stationID,
    newStationName,
    newStationCode,
    newStateID,
    newZoneID
  ) {
    stationID = parseInt(stationID, 10);
    stateID = parseInt(newStateID, 10);
    zoneID = parseInt(newZoneID, 10);
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE stations SET station_name = ?, station_code = ?, state_id = ?, zone_id = ? WHERE station_id  = ?";
        connection.query(
          query,
          [newStationName, newStationCode, newStateID, newZoneID, stationID],
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

module.exports = DbServiceStation;
