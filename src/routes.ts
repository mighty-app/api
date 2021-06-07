import express from "express";
import RealAuthService from "./api/auth/services/AuthService";
import RealSpecService from "./api/spec/services/SpecService";

const router = express.Router();

router.post("/auth/login/email", new RealAuthService().logInWithEmail);
router.post("/auth/signup/email", new RealAuthService().signUpWithEmail);

router.get("/spec", new RealSpecService().getSpec);

export default router;
