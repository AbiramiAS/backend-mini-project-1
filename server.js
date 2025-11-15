import Express from "express";
import path from "path";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
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
app.use("/auth", userRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});


//port configuration
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
