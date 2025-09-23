const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static( path.join(__dirname, "public"), { extensions: ["html", "htm"] }));

// app.get("/", (req, res) => serve_html(res, "../pages/main", "index.html"))

// app.get("/test", (req, res) => res.send("Express test"));

app.all("*", (req, res) => { res.status(404).sendFile(path.join(__dirname, "public/404.html")); })

const port = process.env.PORT || 3000;

app.listen(port, (err, res) => {
    if (err) {
        console.log(err);
        return res.status(500).send(err.message);
    } else {
        console.log('[INFO] Server Running on port:', port);
    }
})

module.exports = app;
