import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controller/userController.js";


const userRouter =Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
