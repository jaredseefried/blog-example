const router = require("express").Router();
const postingController = require('../../controller/postStatusController')

router.route("/")
  .get(postingController.findAll)
  .post(postingController.create)

router.route("/:_id")
  .get(postingController.findById)
  .put(postingController.update)
  .delete(postingController.remove);

module.exports = router