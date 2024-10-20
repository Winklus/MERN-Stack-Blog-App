const { Router } = require("express");
const {
  createPosts,
  getPosts,
  getPost,
  getCatPosts,
  getUserPost,
  editPost,
  deletePost,
} = require("../controllers/postControllers");
const authMiddleware = require("../middleWares/authMiddleWare");
const router = Router();

router.post("/", authMiddleware, createPosts);
router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/categories/:category", getCatPosts);
router.get("/users/:id", getUserPost);
router.patch("/:id", authMiddleware, editPost);
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;
