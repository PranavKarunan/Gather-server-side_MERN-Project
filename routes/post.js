const express = require("express");
const { createPost ,getAllPost ,comment} = require("../controllers/post");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/createPost", authUser, createPost);
router.get("/getAllPost", getAllPost);
router.put('/comment',authUser,comment)

module.exports = router;
