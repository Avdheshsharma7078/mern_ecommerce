import express from "express";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  orderStatusController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object

const router = express.Router();

//routing

//register || method post

router.post("/register", registerController);

//login || POST
router.post("/login", loginController);

//Forget Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes

router.get("/test", requireSignIn, isAdmin, testController);

//protected route auth

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected route auth admin

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
