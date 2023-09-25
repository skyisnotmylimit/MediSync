const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const uniqueID = require("short-unique-id");

const cors = require('cors');
dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.urlencoded({extended : true}));
app.use(cors());

//defining schema
const userAuth = {
  username : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true
  }
};


// Define a regular expression to validate phone numbers (example format)
const phoneRegex = /^[0-9]{10}$/;

const patientSchema = {
  name: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    },
  symptoms: {
    type: [String],
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  dbID : {
    type : String,
    required : true
  }
};

//connecting to server
mongoose.connect('mongodb+srv://shubhamgupta9454666551:MediSync2023@cluster0.y2mqebh.mongodb.net/MediSync').then(()=>{
  console.log("mongo db connected");
}).catch((error)=>{
  console.log("Error occured",error);
})

//creating collections
const user = mongoose.model("user",userAuth);
const patientData = mongoose.model("patientData",patientSchema);

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server runninng",
  });
});

app.post("/signup",async (req,res)=>{
  console.log(req.body);
  const userName = req.body.username;
  const passWord = req.body.password;
  const date = new Date();
  const newUser = new user({
    username : userName,
    password : passWord
  });
  await newUser.save();
  console.log( newUser );
  res.status(200).json({code : 1,message : "success"});
});

app.post("/login",async (req,res)=>{
  const eUsername = req.body.username;
  const ePassword = req.body.password;
  const resQuery = await user.find({username : eUsername});
  if(resQuery.length == 0){
    res.status(200).json({code : 0,message : "user not found"});
  }
  else{
    if(resQuery[0].password === ePassword){
      res.status(200).json({code : 1,message : "User found"});
    }
    else{
      res.status(200).json({code : 2,message : "Incorrect username or password"});
    }
  }
});

app.post("/patient-dashboard",async (req,res)=>{
  const uid = new uniqueID({length : 10});
    const newPatient = new patientData({
    name: req.body.Name,
    dob: req.body.DOB,
    gender: req.body.Gender,
    phoneNumber : req.body.Phone_Number,
    symptoms: req.body.Symptoms,
    bloodGroup: req.body.Blood_Group,
    height : req.body.Height, 
    weight : req.body.Weight,
    dbID : uid.rnd()
  });
  await newPatient.save();
  console.log(newPatient);
  res.status(200).json({code : 1,message : "success"});
});

//port
const port = process.env.PORT || 8080 ;
//listen port
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
