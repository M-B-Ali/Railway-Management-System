var express = require("express");
var router = express.Router();

// require Controlers
const railwayController = require("../controllers/railwayController");

/* GET home page. */
router.get("/", railwayController.homePage);

router.get("/agent", railwayController.agentHomePage);

// State Routes
router.post("/agent/state-input", railwayController.agentStateInputPost);
router.get("/agent/state/:stateName", railwayController.agentStateJSON);
router.delete(
  "/agent/state/delete/:stateID",
  railwayController.agentStateDelete
);
router.patch("/agent/state/update", railwayController.agentStateUpdate);
router.get("/agent/state/all/JSON", railwayController.agentAllStateJSON);

// Zone Routes
router.post("/agent/zone-input", railwayController.agentZoneInputPost);
router.get("/agent/zone/all/JSON", railwayController.agentAllZoneJSON);
router.get("/agent/zone/:zone", railwayController.agentZoneJSON);
router.patch("/agent/zone/update", railwayController.agentZoneUpdate);
router.delete("/agent/zone/delete/:zoneID", railwayController.agentZoneDelete);

// Train Type Route
router.post(
  "/agent/traintype-input",
  railwayController.agentTrainTypeInputPost
);
router.get(
  "/agent/traintype/all/JSON",
  railwayController.agentAllTrainTypeJSON
);
router.get("/agent/traintype/:trainType", railwayController.agentTrainTypeJSON);
router.patch("/agent/traintype/update", railwayController.agentTrainTypeUpdate);
router.delete(
  "/agent/traintype/delete/:trainTypeID",
  railwayController.agentTrainTypeDelete
);

// Staion route
router.post("/agent/station-input", railwayController.agentStaionInputPost);
router.get("/agent/station/:station", railwayController.agentStationJSON);
router.get("/agent/station/all/JSON", railwayController.agentAllStationJSON);
router.patch("/agent/station/update", railwayController.agentStationUpdate);
router.delete(
  "/agent/station/delete/:stationID",
  railwayController.agentStationDelete
);

// router.get("/temp", railwayController.temp);
module.exports = router;
