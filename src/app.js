import express from "express";
import indexRoutes from "./routes/indexRoutes.js";
import exphbs from "express-handlebars";
import path from "path";//modulo de node 
import { fileURLToPath } from "url";
import morgan from "morgan";

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("views", path.join(__dirname, "views"));
app.engine(
    ".hbs",
    exphbs({
        layoutsDir: path.join(app.get("views"), "layouts"),
        defaultLayout: "main",
        extname: ".hbs",
    })
);
app.set("view engine", ".hbs");

//middleware
app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));

//rutas
app.use(indexRoutes);

// /archivos estaticos
app.use(express.static(path.join(__dirname, "Frontend")))

export default app;//exporto el objeto app