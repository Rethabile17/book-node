const express = require();
const bodyParser = require("");
const connectDB = require('./db');



const app = express();
const PORT =process.env.PORT || 3003

app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("welcome to book API!");
});

app.listen(PORT, () => {
    console.log("Server is running on htt://localhost:{PORT}");
});

const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);

connectDB();
