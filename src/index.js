import app from "./app.js";//Equivale al codigo que esta en app.js
import "./database.js";
import { PORT } from "./config.js";

app.listen(PORT);

console.log("Servidor de puerto", PORT);
