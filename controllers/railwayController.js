const dbServiceState = require("../controllers/dbServiceState");
const dbServiceZone = require("../controllers/dbServiceZone");
const dbServiceTrainType = require("../controllers/dbServiceTrainType");
const dbServiceStation = require("../controllers/dbServiceStation");

const dbState = dbServiceState.getDbServiceInstance();
const dbZone = dbServiceZone.getDbServiceInstance();
const dbTrainType = dbServiceTrainType.getDbServiceInstance();
const dbStation = dbServiceStation.getDbServiceInstance();

exports.homePage = (req, res) => {
  res.render("index", { title: "Train Search" });
};

exports.agentHomePage = (req, res) => {
  res.render("agent-home", { title: "Agent Home" });
};

exports.agentStaionInputGet = (req, res) => {
  res.render("station-input", { title: "Station Input" });
};

exports.agentTrainInput = (req, res) => {
  res.render("train-input", { title: "Train Input" });
};

// TODO: Passing data through middleware i.e next()

// let allData = null;

exports.agentAllStation = (req, res, next) => {
  res.render("all-station", { title: "All Stations" });
  /*
  // console.log("--------------------------------");
  const db = dbService.getDbServiceInstance();
  dbService.connectDatabase();
  const result = db.getAllData();
  dbService.disconnectDatabase();

  // res.json();
  result
    .then((data) => {
      // async () => {
      //   allData = await data;
      // };
      console.log(data);
      res.render("all-station", {
        title: "All Stations",
        data: data,
        error: null,
      });
      res.locals.DATA = data;
      // next();
    })
    .catch((err) => {
      console.log(err);
      res.render("all-station", {
        title: "All Stations",
        data: null,
        error: err,
      });
      next(err);
    });

  */
};

// State export
exports.agentStateInputPost = (req, res) => {
  // console.log()
  console.log("Post req");
  // console.log(req.body);
  let data = req.body;
  console.log(data);
  // return;
  // console.log(dataList["state-name"]);
  // let dataList = data["state-name"];
  let dataList = data["state-input-value"];
  // console.log(typeof dataList);
  // console.log("--------OK------------");
  // console.log(typeof dataList);
  // return;
  if (typeof dataList == "string") {
    dataList = [];
    dataList.push(data["state-input-value"]);
  }

  for (let index = 0; index < dataList.length; index++) {
    // const { station_code, station_name, state, zone } = JSON.parse(dataList[index]);
    var responceData = {
      data: [],
      err: [],
      error: false,
    };
    let stateName = dataList[index];
    if (!stateName) {
      // console.log(typeof station_code);
      console.log("State Name is Null");
      continue;
    }
    // stateName = stateName.toLowerCase();
    stateName = stateName.replace(/  +/g, " ").trim();
    const result = dbState.insertNewState(stateName.toLowerCase());
    result
      .then((data) => {
        console.log(data);
        responceData["data"].push(data.response);
        responceData["err"].push(data.err);
        // responceData["error"].push(data.error);
        if (data.error == true) responceData.error = true;
        // console.log(responceData);
        // responceData["error"].push(data.error);

        // if (index === dataList.length - 1) {
        //   res.json({
        //     data: responceData.data,
        //     err: responceData.err,
        //     error: responceData.error,
        //   });
        // }
        // return data;
      })
      .then(() => {
        // responceData["data"].push(data.response);
        // responceData["err"].push(data.err);
        // responceData["error"].push(data.error);
        // console.log(responceData);

        if (index === dataList.length - 1) {
          res.json({
            data: responceData.data,
            err: responceData.err,
            error: responceData.error,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        // responceData.data.push({});
        responceData["err"].push(err.message);
        responceData["error"] = true;
        // responceData.error.push(true);
        // res.json({ data: {}, err: err.message, error: true });
        if (index === dataList.length - 1) {
          res.json({
            data: responceData.data,
            err: responceData.err,
            error: responceData.error,
          });
        }
      });
  }
  console.log("Post req made to state");
  // res.json();
};

exports.agentAllStateJSON = (req, res) => {
  const result = dbState.getAllStateData();
  result
    .then((data) => {
      // console.log(data);
      // res.json({ data: data });
      res.json({ data: data.response, err: data.err, error: data.error });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};

exports.agentStateJSON = (req, res) => {
  const stateName = req.params.stateName;
  console.log(stateName);

  const result = dbState.getStateData(stateName);
  result
    .then((data) => {
      console.log(data);
      res.json({ data: data.response, err: data.err, error: data.error });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};

exports.agentStateDelete = (req, res) => {
  const stateID = req.params.stateID;
  console.log(req.params);

  const result = dbState.deleteStateByID(stateID);
  result
    .then((data) => {
      console.log(data);
      res.json({ data: data.response, err: data.err, error: data.error });
      // res.json({ success: data });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};

exports.agentStateUpdate = (req, res) => {
  let { stateID, newStateName } = req.body;
  console.log("State ID : " + stateID);
  newStateName = newStateName.replace(/  +/g, " ").trim();
  const result = dbState.updateStateByID(stateID, newStateName.toLowerCase());
  result
    .then((data) => {
      // res.json({ success: data });
      res.json({ data: data.response, err: data.err, error: data.error });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};

// Zone export
exports.agentZoneInputPost = (req, res) => {
  console.log("Post req");
  // console.log(req.body);
  let data = req.body;
  // return;
  console.log(data);
  let zoneNameData = data["zone-name-input-value"];
  let zoneCodeData = data["zone-code-input-value"];
  // console.log("--------OK------------");
  if (typeof zoneNameData == "string") {
    zoneNameData = [];
    zoneNameData.push(data["zone-name-input-value"]);
  }
  if (typeof zoneCodeData == "string") {
    zoneCodeData = [];
    zoneCodeData.push(data["zone-code-input-value"]);
  }

  for (let index = 0; index < zoneNameData.length; index++) {
    // const { station_code, station_name, state, zone } = JSON.parse(zoneNameData[index]);
    var responceData = {
      data: [],
      err: [],
      error: false,
    };
    let zoneName = zoneNameData[index];
    let zoneCode = zoneCodeData[index];
    if (!zoneName) {
      // console.log(typeof station_code);
      console.log("Zone Name is Null");
      continue;
    } else if (!zoneCode) {
      // console.log(typeof station_code);
      console.log("Zone Code is Null");
      continue;
    }
    // zoneName = zoneName.toLowerCase();
    zoneName = zoneName.replace(/  +/g, " ").trim();
    zoneCode = zoneCode.replace(/  +/g, " ").trim();
    // const result = dbState.insertNewState(zoneName.toLowerCase());
    const result = dbZone.insertNewZone(zoneName, zoneCode);
    result
      .then((data) => {
        console.log(data);
        responceData["data"].push(data.response);
        responceData["err"].push(data.err);
        // responceData["error"].push(data.error);
        if (data.error == true) responceData.error = true;
        // console.log(responceData);
        // responceData["error"].push(data.error);

        // if (index === zoneNameData.length - 1) {
        //   res.json({
        //     data: responceData.data,
        //     err: responceData.err,
        //     error: responceData.error,
        //   });
        // }
        // return data;
      })
      .then(() => {
        // responceData["data"].push(data.response);
        // responceData["err"].push(data.err);
        // responceData["error"].push(data.error);
        // console.log(responceData);

        if (index === zoneNameData.length - 1) {
          res.json({
            data: responceData.data,
            err: responceData.err,
            error: responceData.error,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        // responceData.data.push({});
        responceData["err"].push(err.message);
        responceData["error"] = true;
        // responceData.error.push(true);
        // res.json({ data: {}, err: err.message, error: true });
        if (index === zoneNameData.length - 1) {
          res.json({
            data: responceData.data,
            err: responceData.err,
            error: responceData.error,
          });
        }
      });
  }
  console.log("Post req made to zone");
  // res.json();
};
exports.agentAllZoneJSON = (req, res) => {
  const result = dbZone.getAllZoneData();
  result
    .then((data) => {
      // console.log(data);
      // res.json({ data: data });
      res.json({ data: data.response, err: data.err, error: data.error });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};
exports.agentZoneJSON = (req, res) => {
  const zone = req.params.zone;
  console.log(zone);

  const result = dbZone.getZoneData(zone);
  result
    .then((data) => {
      console.log(data);
      res.json({ data: data.response, err: data.err, error: data.error });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};
exports.agentZoneUpdate = (req, res) => {
  let { zoneID, newZoneName, newZoneCode } = req.body;
  console.log("Zone ID : " + zoneID);
  newZoneName = newZoneName.replace(/  +/g, " ").trim();
  newZoneCode = newZoneCode.replace(/  +/g, " ").trim();
  const result = dbZone.updateZoneByID(zoneID, newZoneName, newZoneCode);
  result
    .then((data) => {
      // res.json({ success: data });
      res.json({ data: data.response, err: data.err, error: data.error });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};
exports.agentZoneDelete = (req, res) => {
  const zoneID = req.params.zoneID;
  // console.log(req.params);

  const result = dbZone.deleteZoneByID(zoneID);
  result
    .then((data) => {
      console.log(data);
      res.json({ data: data.response, err: data.err, error: data.error });
      // res.json({ success: data });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};

// Train Type export
exports.agentTrainTypeInputPost = (req, res) => {
  console.log("Post req to Train Type");
  // console.log(req.body);
  let data = req.body;
  // return;
  console.log(data);
  let trainTypeNameData = data["traintype-name-input-value"];
  let trainTypeDescriptionData = data["traintype-description-input-value"];
  // console.log("--------OK------------");
  if (typeof trainTypeNameData == "string") {
    trainTypeNameData = [];
    trainTypeNameData.push(data["traintype-name-input-value"]);
  }
  if (typeof trainTypeDescriptionData == "string") {
    trainTypeDescriptionData = [];
    trainTypeDescriptionData.push(data["traintype-description-input-value"]);
  }

  for (let index = 0; index < trainTypeNameData.length; index++) {
    // const { station_description, station_name, state, trainType } = JSON.parse(trainTypeNameData[index]);
    var responceData = {
      data: [],
      err: [],
      error: false,
    };
    let trainTypeName = trainTypeNameData[index];
    let trainTypeDescription = trainTypeDescriptionData[index];
    if (!trainTypeName) {
      // console.log(typeof station_description);
      console.log("Train Type Name is Null");
      continue;
    } else if (!trainTypeDescription) {
      // console.log(typeof station_description);
      console.log("Train Type Description is Null");
      continue;
    }
    // trainTypeName = trainTypeName.toLowerCase();
    trainTypeName = trainTypeName.replace(/  +/g, " ").trim();
    trainTypeDescription = trainTypeDescription.replace(/  +/g, " ").trim();
    // const result = dbState.insertNewState(trainTypeName.toLowerCase());
    const result = dbTrainType.insertNewTrainType(
      trainTypeName,
      trainTypeDescription
    );
    result
      .then((data) => {
        console.log(data);
        responceData["data"].push(data.response);
        responceData["err"].push(data.err);
        // responceData["error"].push(data.error);
        if (data.error == true) responceData.error = true;
        // console.log(responceData);
        // responceData["error"].push(data.error);

        // if (index === trainTypeNameData.length - 1) {
        //   res.json({
        //     data: responceData.data,
        //     err: responceData.err,
        //     error: responceData.error,
        //   });
        // }
        // return data;
      })
      .then(() => {
        // responceData["data"].push(data.response);
        // responceData["err"].push(data.err);
        // responceData["error"].push(data.error);
        // console.log(responceData);

        if (index === trainTypeNameData.length - 1) {
          res.json({
            data: responceData.data,
            err: responceData.err,
            error: responceData.error,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        // responceData.data.push({});
        responceData["err"].push(err.message);
        responceData["error"] = true;
        // responceData.error.push(true);
        // res.json({ data: {}, err: err.message, error: true });
        if (index === trainTypeNameData.length - 1) {
          res.json({
            data: responceData.data,
            err: responceData.err,
            error: responceData.error,
          });
        }
      });
  }
  console.log("Post req made to trainType");
  // res.json();
};
exports.agentAllTrainTypeJSON = (req, res) => {
  const result = dbTrainType.getAllTrainTypeData();
  result
    .then((data) => {
      console.log(data);
      // res.json({ data: data });
      res.json({ data: data.response, err: data.err, error: data.error });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};
exports.agentTrainTypeJSON = (req, res) => {
  const trainType = req.params.trainType;
  console.log(trainType);

  const result = dbTrainType.getTrainTypeData(trainType);
  result
    .then((data) => {
      console.log(data);
      res.json({ data: data.response, err: data.err, error: data.error });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};
exports.agentTrainTypeUpdate = (req, res) => {
  let { trainTypeID, newTrainTypeName, newTrainTypeDescription } = req.body;
  console.log("TrainType ID : " + trainTypeID);
  newTrainTypeName = newTrainTypeName.replace(/  +/g, " ").trim();
  newTrainTypeDescription = newTrainTypeDescription.replace(/  +/g, " ").trim();
  const result = dbTrainType.updateTrainTypeByID(
    trainTypeID,
    newTrainTypeName,
    newTrainTypeDescription
  );
  result
    .then((data) => {
      // res.json({ success: data });
      res.json({ data: data.response, err: data.err, error: data.error });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};
exports.agentTrainTypeDelete = (req, res) => {
  const trainTypeID = req.params.trainTypeID;
  // console.log(req.params);

  const result = dbTrainType.deleteTrainTypeByID(trainTypeID);
  result
    .then((data) => {
      console.log(data);
      res.json({ data: data.response, err: data.err, error: data.error });
      // res.json({ success: data });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};

// Station export
// TODO: Trim Input Data and make all lower case
exports.agentStaionInputPost = (req, res) => {
  console.log("Post req to Station");
  // console.log(req.body);
  let data = req.body;
  // return;
  console.log(data);
  let stationNameData = data["station-name-input-value"];
  let staionCodeData = data["station-code-input-value"];
  let stateIDData = data["station-state-input-value"];
  let zoneIDData = data["station-zone-input-value"];
  // console.log("--------OK------------");

  for (let index = 0; index < stationNameData.length; index++) {
    // const { station_description, station_name, state, trainType } = JSON.parse(trainTypeNameData[index]);
    var responceData = {
      data: [],
      err: [],
      error: false,
    };
    let stationName = stationNameData[index];
    let stationCode = staionCodeData[index];
    let stateID = stateIDData[index];
    let zoneID = zoneIDData[index];
    if (!stationName) {
      console.log("Train Type Name is Null");
      continue;
    } else if (!stationCode) {
      console.log("Train Type Description is Null");
      continue;
    }
    stationName = stationName.replace(/  +/g, " ").trim();
    stationCode = stationCode.replace(/  +/g, " ").trim();
    stationCode = stationCode.toUpperCase();
    // const result = dbState.insertNewState(trainTypeName.toLowerCase());
    const result = dbStation.insertNewStation(
      stationName,
      stationCode,
      stateID,
      zoneID
    );
    result
      .then((data) => {
        console.log(data);
        responceData["data"].push(data.response);
        responceData["err"].push(data.err);
        // responceData["error"].push(data.error);
        if (data.error == true) responceData.error = true;
        // console.log(responceData);
        // responceData["error"].push(data.error);

        // if (index === trainTypeNameData.length - 1) {
        //   res.json({
        //     data: responceData.data,
        //     err: responceData.err,
        //     error: responceData.error,
        //   });
        // }
        // return data;
      })
      .then(() => {
        // responceData["data"].push(data.response);
        // responceData["err"].push(data.err);
        // responceData["error"].push(data.error);
        // console.log(responceData);

        if (index === stationNameData.length - 1) {
          res.json({
            data: responceData.data,
            err: responceData.err,
            error: responceData.error,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        // responceData.data.push({});
        responceData["err"].push(err.message);
        responceData["error"] = true;
        // responceData.error.push(true);
        // res.json({ data: {}, err: err.message, error: true });
        if (index === stationNameData.length - 1) {
          res.json({
            data: responceData.data,
            err: responceData.err,
            error: responceData.error,
          });
        }
      });
  }
};
exports.agentAllStationJSON = (req, res) => {
  const result = dbStation.getAllStationData();
  result
    .then((data) => {
      console.log(data);
      res.json({ data: data.response, err: data.err, error: data.error });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};
exports.agentStationJSON = (req, res) => {
  // const trainType = req.params.trainType;
  const station = req.params.station;
  console.log(station);

  const result = dbStation.getStationData(station);
  result
    .then((data) => {
      console.log(data);
      res.json({ data: data.response, err: data.err, error: data.error });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};
exports.agentStationUpdate = (req, res) => {
  let { stationID, newStationName, newStationCode, newStateID, newZoneID } =
    req.body;
  console.log("TrainType ID : " + stationID);
  newStationName = newStationName.replace(/  +/g, " ").trim();
  newStationCode = newStationCode.replace(/  +/g, " ").trim();
  newStationCode = newStationCode.toUpperCase();
  const result = dbStation.updateStationByID(
    stationID,
    newStationName,
    newStationCode,
    newStateID,
    newZoneID
  );
  result
    .then((data) => {
      // res.json({ success: data });
      res.json({ data: data.response, err: data.err, error: data.error });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};
exports.agentStationDelete = (req, res) => {
  const stationID = req.params.stationID;
  // console.log(req.params);

  const result = dbStation.deleteStationByID(stationID);
  result
    .then((data) => {
      console.log(data);
      res.json({ data: data.response, err: data.err, error: data.error });
      // res.json({ success: data });
    })
    .catch((err) => {
      res.json({ data: {}, err: err.message, error: true });
      console.log(err);
    });
};

// ! temp
exports.temp = (req, res) => {
  let zoneName = [
    "Central Railway",
    "Konkan Railway",
    "Metro Railway, Kolkata",
    "Northern Railway",
    "North Central Railway",
    "North Eastern Railway",
    "Northeast Frontier Railway",
    "North Western Railway",
    "Eastern Railway",
    "East Central Railway",
    "East Coast Railway",
    "Southern Railway",
    "South Central Railway",
    "South Coast Railway",
    "South Eastern Railway",
    "South East Central Railway",
    "South Western Railway",
    "Western Railway",
    "West Central Railway",
  ];

  let zoneCode = [
    "CR",
    "KR",
    "MTP",
    "NR",
    "NCR",
    "NER",
    "NFR",
    "NWR",
    "ER",
    "ECR",
    "ECoR",
    "SR",
    "SCR",
    "SCoR",
    "SER",
    "SECR",
    "SWR",
    "WR",
    "WCR ",
  ];

  console.log("Something is going to happen");
  for (let index = 0; index < zoneName.length; index++) {
    // db.temp(zoneName[index].trim(), zoneCode[index].trim());
    var responceData = {
      data: [],
      err: [],
      error: false,
    };
    const result = dbState.temp(zoneName[index].trim(), zoneCode[index].trim());
    result
      .then((data) => {
        console.log(data);
        responceData["data"].push(data.response);
        responceData["err"].push(data.err);
        // responceData["error"].push(data.error);
        if (data.error == true) responceData.error = true;
      })
      .then(() => {
        if (index === zoneName.length - 1) {
          res.json({
            data: responceData.data,
            err: responceData.err,
            error: responceData.error,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        responceData["err"].push(err.message);
        responceData["error"] = true;
        if (index === zoneName.length - 1) {
          res.json({
            data: responceData.data,
            err: responceData.err,
            error: responceData.error,
          });
        }
      });
  }
};
