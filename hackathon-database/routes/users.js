import express from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUserById,
} from "../models/users/index.js";
const router = express.Router();


/* GET users listing. */

router.get("/", async function (req, res) {
  const body = await getAllUsers();

  res.json({
    success: true,
    payload: body,
  });
});

/* GET users by ID. */
router.get("/:user_id", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const body = await getUserById(user_id);

  res.json({
    success: true,
    payload: body,
  });
});

/* POST new users to users table. */
router.post("/", async function (req, res) {
  const body = req.body;
  const create = await createUser(body);
  res.json({
    success: true,
    payload: create,
  });
});

/* Update user */
router.put("/:user_id", async function (req, res) {
  const body = req.body;
  const update = await updateUser(body);
  res.json({
    success: true,
    payload: update,
  });
});

/* delete user by user_id */
router.delete("/:user_id", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const remove = await deleteUserById(user_id);

  res.json({
    success: true,
    payload: remove,
  });
});


export default router;
