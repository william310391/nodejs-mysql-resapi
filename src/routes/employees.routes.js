import { Router } from "express";
import {
  deleteEmployees,
  getEmployee,
  getEmployees,
  postEmployees,
  putEmployees,
} from "../controllers/employees.controlller.js";


const router = Router();

router.get("/employee", getEmployees);
router.get("/employee/:id", getEmployee);

router.post("/employee", postEmployees);

router.delete("/employee/:id", deleteEmployees);

router.patch("/employee/:id", putEmployees);

export default router;
