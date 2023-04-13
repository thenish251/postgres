// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "u",
//   password: "",
//   port: 5432,
// });

// const createUser = (request, response) => {
//   const { name, email } = request.body;

//   pool.query(
//     "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
//     [name, email],
//     (error, results) => {
//       if (error) {
//         console.log(error);
//         throw error;
//       }
//       response.status(200).json({
//         message: "data created successfully",
//         data: results.rows[0],
//       });
//     }
//   );
// };

// const getUsers = (request, response) => {
//   pool.query("SELECT * FROM users ORDER BY id ", (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json({
//       data: results.rows,
//     });
//   });
// };

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id);
//   const { name, email } = request.body;

//   pool.query(
//     "UPDATE users SET name = $1, email = $2 WHERE id = $3",
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`User modified with ID: ${id}`);
//     }
//   );
// };

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).send(`User deleted with ID: ${id}`);
//   });
// };

// module.exports = {
//   createUser,
//   getUsers,
//   getUserById,
//   updateUser,
//   deleteUser,
// };
