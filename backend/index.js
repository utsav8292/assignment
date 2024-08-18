const dotenv=require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./utils/db");
const userRoutes = require("./routes/userroute");
dotenv.config({});

const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: ["GET, POST, PUT, DELETE, PATCH, HEAD"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// api's
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
