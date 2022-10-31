import {Router} from "express";
import {checkAuth} from "../utils/checkAuth.js";
import {createPost, deletePost, editPost, getAllPosts, getMyPosts, getOnePost} from "../Controllers/post.js";

const router = Router();

// Create new Post
router.post("/createPost", checkAuth, createPost);

// Get All Post
router.get("/getAllPosts", getAllPosts);

// Get One Post
router.get("/getOnePost/:id", getOnePost);

// Get My Post's
router.get("/getMyPosts", checkAuth, getMyPosts);

// Edit Post
router.put("/editPost/:id", checkAuth, editPost);

// Delete Post
router.delete("/deletePost/:id", checkAuth, deletePost);

export default router;