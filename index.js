import express from "express";
import cors from "cors";
import { getSecrets } from "./src/utlis.js";

const PORT = 3030;

const app = express();
app.use(cors());

app.get('/secrets', getSecrets);

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
})