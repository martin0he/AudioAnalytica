import { Router } from "express";
import { NeuralNetController } from "../controllers/neuralNetController";

const router = Router();

router.post("/", NeuralNetController);

export default router;
