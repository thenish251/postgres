// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const db = require("./users");
// const app = express();
// const port = process.env.PORT || 8000;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (request, response) => {
//   response.json({ message: "hello from server" });
// });

// app.post("/add", db.createUser);
// app.get("/users", db.getUsers);
// app.get("/users/:id", db.getUserById);
// app.post("/users", db.createUser);
// app.put("/users/:id", db.updateUser);
// app.delete("/users/:id", db.deleteUser);

// app.listen(port, () => {
//   console.log(`server listening on port ${port}`);
// });
