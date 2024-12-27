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

//6th
app.get('/sixth', (req, res) => {
    const sql = "SELECT * FROM student1 WHERE standard = ?";
    
    db.query(sql, [6], (err, data) => {
      if (err) return res.json("Error fetching students");
      return res.json(data);
    });
  });

//7th
app.get('/seventh', (req, res) => {
    const sql = "SELECT * FROM student1 WHERE standard = ?";
    
    db.query(sql, [7], (err, data) => {
      if (err) return res.json("Error fetching students");
      return res.json(data);
    });
  });

//8th
app.get('/eighth', (req, res) => {
    const sql = "SELECT * FROM student1 WHERE standard = ?";
    
    db.query(sql, [8], (err, data) => {
      if (err) return res.json("Error fetching students");
      return res.json(data);
    });
  });

//9th
app.get('/nineth', (req, res) => {
    const sql = "SELECT * FROM student1 WHERE standard = ?";
    
    db.query(sql, [9], (err, data) => {
      if (err) return res.json("Error fetching students");
      return res.json(data);
    });
  });

//10th
app.get('/tenth', (req, res) => {
    const sql = "SELECT * FROM student1 WHERE standard = ?";
    
    db.query(sql, [10], (err, data) => {
      if (err) return res.json("Error fetching students");
      return res.json(data);
    });
  });

//11th
app.get('/eleventh', (req, res) => {
    const sql = "SELECT * FROM student1 WHERE standard = ?";
    
    db.query(sql, [11], (err, data) => {
      if (err) return res.json("Error fetching students");
      return res.json(data);
    });
  });

//12th
app.get('/twelveth', (req, res) => {
    const sql = "SELECT * FROM student1 WHERE standard = ?";
    
    db.query(sql, [12], (err, data) => {
      if (err) return res.json("Error fetching students");
      return res.json(data);
    });
  });
  


app.listen(3000, () => {
    console.log("App listening on port 3000")
})




////////////////////////////////////////////////////////////////////////////////////

