const express = require("express");
const app = express();
const PORTNO = 3000;

// ** Required Middleware
// Add here app.use statements
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


//*** Routes
app.get("/search",  (req, res) => {
  const keyword = req.query.keyword;
  console.log("Search keyword:", keyword)
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>Search Result</title>
      </head>
      <body>
        <h1>Search Results</h1>
        <p>You searched for: <strong>${keyword ?? "(no keyword provided)"}</strong></p>
        <a href="/home.html">Back to Home</a>
      </body>
    </html>
  `);
});

app.post("/register",  (req, res) => {
  const username = req.body.username;
  const email    = req.body.email;
  console.log("Registered:", username, email);
  console.log("Registered: ", req.body)
  res.send(`
    <!doctype html>
    <html>
      <head><title>Registration Confirmation</title></head>
      <body>
        <h1>Registration Successful</h1>
        <p>Thank you for registering!</p>
        <ul>
          <li><strong>Username:</strong> ${username ?? "(none)"}</li>
          <li><strong>Email:</strong> ${email ?? "(none)"}</li>
        </ul>
        <a href="/home.html">Back to Home</a>
      </body>
    </html>
  `);
});


app.get("/", function (req, res) {
  res.send(`Response from localhost:${PORTNO}/`);
});


app.listen(PORTNO, function () {
  console.log(`Listening on Port: ${PORTNO}`);
});
