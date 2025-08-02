import { Router } from "express";
import { createMemory, getMemories, getMemory, updateMemory, deleteMemory } from "../controllers/memory.controller.js";
import upload from "../middlewares/multer.middleware.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { deleteuser, getAllUsers, getAnalytics } from "../controllers/admin.controller.js";



const memoryRoutes = Router();

// admin routes
memoryRoutes.get("/admin/analytics", authenticate, getAnalytics);
memoryRoutes.get("/admin/users", authenticate, getAllUsers);
memoryRoutes.delete("/admin/users/:userId", authenticate, deleteuser); 

// user routes
memoryRoutes.post("/", authenticate, upload.single('image'), createMemory);
memoryRoutes.get("/", getMemories);
memoryRoutes.get("/:id", getMemory);           
memoryRoutes.put("/:id", authenticate, updateMemory);      
memoryRoutes.delete("/:id", authenticate, deleteMemory);  

export default memoryRoutes