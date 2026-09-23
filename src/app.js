
import express from "express";
import indexRoutes from "./routes/indexRoutes.js";
import exphbs from "express-handlebars";
import path from "path";
import morgan from "morgan";

const app = express();

// Configuración de vistas
app.set("views", path.join(__dirname, "views"));

// Configuración de Handlebars
app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs"
  })
);

app.set("view engine", ".hbs");

// Middlewares
app.use(morgan("dev"));

app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());

// Rutas
app.use(indexRoutes);

// Archivos estáticos
app.use(express.static(path.join(__dirname, "Frontend")));

export default app;