import express from 'express';
import cors from 'cors';
//const mysql = require('mysql');
import mysql from 'mysql';

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mysqlroot",
    database:"student"
})

//To get
app.get('/', (req, res) => {      
        const sql = "SELECT * FROM student1";
        db.query(sql,(err,data) => {
            if(err) throw res.json("Error");
            return res.json(data);
        })
    })

//Insert    
app.post('/Add_student', (req, res) => {
    const sql = "INSERT INTO student1 (`name`,`rollNumber`,`standard`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.rollNumber,
        req.body.standard
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

//Update
app.put('/update/:studentid',(req,res) => {
    const sql = "update student1 set `name` = ?, `rollNumber` = ? ,`standard` = ? where studentid = ?";
    const value = [
        req.body.name,
        req.body.rollNumber,
        req.body.standard
    ]
    const studentid = req.params.studentid;

    db.query(sql,[...value,studentid],(err,data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

//Delete
app.delete('/Delete_student/:studentid',(req,res) => {
    const sql = "DELETE FROM student1 WHERE studentid = ? ";
    const studentid = req.params.studentid;

    db.query(sql,[studentid],(err,data) => {
        if(err) return res.json("Error");
        return res.json(data)
    })
})

app.listen(3000, () => {
    console.log("App listening on port 3000")
})




////////////////////////////////////////////////////////////////////////////////////

// var express = require("express");

// var app = express();

// var connection = require('./database');

// app.get("/", (req, res) => {
//     //res.send("hello world")
//     let sql = "SELECT * FROM student1";
//     connection.query(sql,function(err,result){
//         if(err) throw err;
//         res.send(result);
//     })
// })

// app.listen(3000,function(){
//     console.log("App listening on port 3000");
//     connection.connect(function(error){
//         if(error) throw error;
//         console.log('Database Connected');
//     })
// });

//////////////////////////////////////////////////////////////////////////////

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// const port = 3000; // You can change this port to whatever you like

// // Middleware to parse JSON request bodies
// app.use(bodyParser.json());

// //The cors to allow the data from different domain
// const cors = require("cors");

// app.use(cors());

// // POST endpoint to handle form submission
// app.post("/api/submit", (req, res) => {
//   const { name, rollNumber, standard } = req.body;

//   // Validate data (you can add more validation if needed)
//   if (!name || !rollNumber || !standard) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   // You can process or save the data here, for example, save to a database.
//   console.log("Form Data Submitted:", { name, rollNumber, standard });

//   // Respond back to the client
//   res.status(200).json({ message: "Data submitted successfully!" });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

////////////////////////////////////////////////////////////////////////////////////

// import express from "express";   // Importing express using ES Modules
// import connection from "./database.js";  // Importing the database connection using ES Modules
// import cors from "cors";

// // Middleware to parse JSON request bodies
// const app = express();
// app.use(express.json());  // Needed to parse JSON body sent from frontend

// // Get route to retrieve all student data
// app.get("/", (req, res) => {
//     let sql = "SELECT * FROM student1";  // Modify this to match your database structure
//     connection.query(sql, function (err, result) {
//         if (err) throw err;
//         res.send(result);  // Sends the result (students data) as JSON response
//     });
// });

// //The cors to allow the data from different domain
// //const cors = require("cors");

// app.use(cors());

// // POST route to insert form data into the database
// app.post("/api/submit", (req, res) => {
//     console.log("sdfsdf");
//     const { name, rollNumber, standard } = req.body;
    
    

//     // Validate that all required fields are present
//     if (!name || !rollNumber || !standard) {
//         return res.status(400).json({ message: "All fields (name, rollNumber, standard) are required" });
//     }

//     // Insert data into the 'student1' table (modify this query as per your table structure)
//     const sql = "INSERT INTO student1 (name, rollNumber, standard) VALUES (?, ?, ?)";
//     connection.query(sql, [name, rollNumber, standard], function (err, result) {
//         if (err) {
//             console.error("Error inserting data into database:", err);
//             return res.status(500).json({ message: "Error submitting data to the database" });
//         }

//         // If successful, return a success response
//         res.status(200).json({ message: "Data submitted successfully!" });
//     });
// });

// // Start the server and connect to the database
// app.listen(3000, function () {
//     console.log("App listening on port 3000");

//     connection.connect(function (error) {
//         if (error) throw error;
//         console.log("Database Connected");
//     });
// });




