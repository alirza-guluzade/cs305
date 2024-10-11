const express = require("express");
const bodyParser = require("body-parser");
require("colors");

const app = express();
app.use(bodyParser.json());

const users = [
  {
    id: 1,
    username: "Nihad",
  },
  {
    id: 2,
    username: "Nihad",
  },
  {
    id: 3,
    username: "Nihad",
  },
];

app.get("/", (_, res) => {
  res.send(users));
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server is running : http://localhost:${PORT}`.bold.green)
);
//node js




/// get all users
app.get('/',(_req ,res)=> {
 res.status(200).json(users)
})

