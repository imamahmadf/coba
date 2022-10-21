const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(jsonParser);
const cors = require("cors");
const {
  userRoutes,
  moviesRoutes,
  actorsRoutes,
  genreRoutes,
  studiosRoutes,
} = require("./routes");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const PORT = 2000;
app.use(cors(corsOptions)); // Use this after the variable declaration

const { sequelize } = require("./lib/sequelize");
// sequelize.sync({ alter: true });

app.use("/user_accounts", userRoutes);
app.use("/movies", moviesRoutes);
app.use("/actors", actorsRoutes);
app.use("/genres", genreRoutes);

app.use("/studios", studiosRoutes);

app.use("/post_images", express.static(`${__dirname}/public/post_images`));
app.use("/movie_images", express.static(`${__dirname}/public/movie_images`));

// c:/nama_project_be/src/public/post_images/
// localhost:2000/post_images/

//1. frontend
//2. routes => middleware => controller
//3. express.static => menampilkan image file dari dalam folder di backend

// localhost:2000/user_accounts/

//front end
//method get,patch,post,delete
// menentukan layouting
// menentukan data yang ditampilkan (request). spec data apa saja yang dibutuhkan

//frontend => request data => backend => fetch ke database => backend dalam sebuah tampilan json string => front end
//                       (logic backend) ================   (fetching data dari database)
// relational database non relational database

//back end
//menjalankan request dari front end
// fetching , posting, delete, updating data
// database
// provide request dari si frontend

//thunder
//postman
// untuk melakukan testing backend tanpa harus jadi dulu si frontendnya

//browser = hanya dapat memanggil method get

app.get("/", (req, res) => {
  res.send("this is express");
});

app.listen(PORT, () => {
  console.log("server running in port", PORT);
});
