const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect MongoDB Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/ideas", require("./routes/api/ideas"));

app.get("/", (req, res) => {
	res.send("API running!");
});

app.listen(PORT, () => {
	console.log(`Server is up and running on port ${PORT}...`);
});
