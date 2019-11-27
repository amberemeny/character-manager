// Routes
const express = require("express")
const router = express.Router()
const PagesController = require("./controllers/pages_controller")


router.get("/", PagesController.index)


module.exports = router