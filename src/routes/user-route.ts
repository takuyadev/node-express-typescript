import express from "express";

// Import controllers from 
import { getUsers } from "@/controllers/user-controller";

// Setup router
const router = express.Router();

// Setup all routes for user
router.get("/", getUsers)

// Export router; should always export as default
export default router;
