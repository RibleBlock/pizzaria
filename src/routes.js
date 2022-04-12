import { Router } from "express";
const route = Router();
import { home } from "./controllers";

route.get('/', home.index);

export default route;