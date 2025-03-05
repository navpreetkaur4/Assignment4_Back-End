import express from "express";
import morgan from "morgan";
import loanRoutes from "./api/v1/routes";
import authRoutes from "./api/v1/routes/authRoutes";

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/loans", loanRoutes);
app.use("/api/v1/auth", authRoutes); 

// Root Route
app.get("/", (req, res) => {
    res.send("High-Risk Loan Application Monitoring System API is running...");
});

export default app;
