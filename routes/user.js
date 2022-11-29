const express = require("express");
const {
  register,
  activateAccount,
  login,
  auth,
  sendVerification,
  findUser,
  sendResetPasswordCode,
  validateResetCode,
  changePassword,
  getProfile,
  updateProfilePicture,
  getAllUsers,
  getUser,
  updateCover,
  addFriend,
  unFriend,
  cancelRequest,
  acceptRequest,
  deleteRequest,
  search,
  addToSearchHistory,
  getSearchHistory,
  removeFromSearch,
  follow,
  unfollow,
} = require("../controllers/user");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login", login);
router.post("/sendVerification", authUser, sendVerification);
router.post("/findUser", findUser);
router.post("/sendResetPasswordCode", sendResetPasswordCode);
router.post("/validateResetCode", validateResetCode);
router.post("/changePassword", changePassword);
router.get("/getProfile/:username", authUser, getProfile);
router.get("/getUser/:userId", getUser);
router.put("/updateProfilePicture", authUser, updateProfilePicture);
router.get("/users", getAllUsers);
router.put("/updateCover", authUser, updateCover);
router.put("/addFriend/:id", authUser, addFriend);
router.put("/unFriend/:id", authUser, unFriend);
router.put("/cancelRequest/:id", authUser, cancelRequest);
router.put("/acceptRequest/:id", authUser, acceptRequest);
router.put("/deleteRequest/:id", authUser, deleteRequest);
router.put("/following/:id", authUser, follow);
router.put("/unfollow/:id", authUser, unfollow);
router.post("/search/:searchTerm", authUser, search);
router.put("/addToSearchHistory", authUser, addToSearchHistory);
router.get("/getSearchHistory", authUser, getSearchHistory);
router.put("/removeFromSearch", authUser, removeFromSearch);

module.exports = router;
