const express =require("express")

const router = express.Router();
const launch_controller =require("../controllers/launch_controller")

router.get("/upcoming",launch_controller.upcoming_flights)

router.get("/:id",launch_controller.get_flight)

router.get("/",launch_controller.all_launches)




module.exports = router;