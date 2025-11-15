import Express from "express";
import path from "path";
// import dotenv from "dotenv";
import cors from "cors";
// import employeeData from "./model/employees.json";
import corsOptions from "./configs/corsOptions.js";
import employeeRoutes from "./routes/employeeRoutes.js";

// dotenv.config();
const __dirname = path.resolve();

const app = Express();

app.use(Express.json());

// Cross Origin Resource Sharing
app.use(cors(corsOptions));


//route middleware
app.use("/employees", employeeRoutes); 

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});


//port configuration
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
