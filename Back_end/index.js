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
app.get('/', (_req, res) => {      
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

//filtering the student
// app.get("/6th/:studentid", (req, res) => {
//     const studentid = req.params.id;
//     const query = "SELECT * FROM student1 WHERE standard = 6";
//     db.query(query, [studentid], (err, results) => {
//       if (err) throw err;
//       res.json(results); // Send the specific student's data
//     });
//   });

// Backend route to fetch students of 6th standard
// app.get("/6th", (req, res) => {
//     db.query("SELECT * FROM student1 WHERE standard = 6", (err, results) => {
//       if (err) throw err;
//       res.json(results); // Return only 6th standard students
//     });
//   });

// Fetch only students who are in the 6th standard
// app.get('/', (req, res) => {      
//     const sql = "SELECT * FROM student1 WHERE standard = '6th'";  // Filter for 6th standard students
   
//     db.query(sql, (err, data) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).json("Error occurred while fetching data");
//         }
//         return res.json(data);  // Return only 6th standard students
//     });
// });

app.get('/6th', (req, res) => {
    const sql = "SELECT * FROM student1 WHERE standard = ?";
    
    db.query(sql, ['6th'], (err, data) => {
      if (err) return res.json("Error fetching students");
      return res.json(data);
    });
  });
  


app.listen(3000, () => {
    console.log("App listening on port 3000")
})




////////////////////////////////////////////////////////////////////////////////////

