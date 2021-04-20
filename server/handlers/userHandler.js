const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  //create client
  const client = await MongoClient(MONGO_URI, options);
  //connect to client
  await client.connect();
  //connect to db
  const db = client.db("wandergram");
  console.log("connected");

  try {
    //salt for encryption
    const salt = await bcrypt.genSalt(10);
    console.log("salt", salt);
    //password encryption
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log("hashed pass", hashedPassword);
    const user = {
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    };

    await db.collection("users").insertOne(user);
    res.status(201).json({ status: 201, message: "User successfully added" });
  } catch (err) {
    res.status(500).send({ status: 500, message: err.message });
  }

  //close connection
  client.close();
  console.log("disconnected");
};

const logIn = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("wandergram");
  console.log("connected");

  const username = req.body.username;
  const password = req.body.password;

  try {
    const result = await db.collection("users").findOne({ username });
    if (result) {
      console.log("result: ", result);
      const passwordMatches = await bcrypt.compare(password, result.password);

      if (passwordMatches) {
        const { _id, username, email } = result;
        res.status(201).json({
          status: 201,
          data: { id: _id, username, email },
          message: "User connected",
        });
      } else {
        //wrong password
        res.status(401).json({
          status: 401,
          message: "Wrong password",
        });
      }
    } else {
      //wrong username
      res.status(401).json({
        status: 401,
        message: "Wrong username",
      });
    }
  } catch (err) {
    res.status(500).send({ status: 500, message: err.message });
  }

  client.close();
  console.log("disconnected");
};

module.exports = { signUp, logIn };
