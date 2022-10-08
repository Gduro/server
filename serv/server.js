require("dotenv").config();
const express = require("express");
const app = require("express")();
const admin = require("firebase-admin");
const cors = require("cors")
const { v4: uuidv4 } = require("uuid");
const serviceAccount = require("./serviceAccountKey.json");
const fs = require("fs");
const bodyParser = require('body-parser')
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
// Initializes firebase
app.use(cors({
  origin:"*",
  credentials: true,
}))
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
admin.initializeApp({
  // @ts-ignore
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `${process.env.FIREBASE_DATABASE_URL}`,
});

const ref = admin.database().ref("/myAppointments");





// app.get("/panel", (request, response) => {
//   response.render("panel");

const getDateTime = (slot) => {
  return slot.split("T");
};

app.post("/appointment", async (req, res) => {
  let slot = req.body.slot;
  let phonenumber = req.body.phonenumber;
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  
  let [date, time] = getDateTime(slot);

  // Checks if a slot is available
  const checkIfAvailable = async (slot) => {
    let snapshot = await ref.orderByChild("date").once("value");

    let available = true;
    snapshot.forEach((data) => {
      let dataval = data.val();
      for (let key in dataval) {
        let datapoint = dataval[key];
        if (slot === datapoint) {
          available = false;
        }
      }
    });
    return available;
  };

  // Adds the slot to the database
  const addToDatabase = () => {
    let code = uuidv4();

    ref.child(code).set({
      date: slot,
      phone: phonenumber,
      firstname: firstname,
      lastname: lastname,
      email: email,
      userId: code,
    });

    return code;
  };

  let available = await checkIfAvailable(slot);

  if (available) {
    let code = addToDatabase();
    res.status(200).send('')
    // res.send(`This slot is available, booking it for you now: ${slot}`);
  } else {
    // Sends user error
    res.status(201).send('')

    // res.send(
      
    //   `Sorry, you'll need to choose a different slot.${slot} is already busy.`
    // );
  }
});

app.post("/cancelAppointment", async (request, response) => {
  let code = request.body.code;

  // Removes slot from the database
  const removeSlotFromDB = (code) => {
    ref.child(code).remove();
  };
  removeSlotFromDB(code);

  response.send(`This slot has been removed.`);
});
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`backend -> http://localhost:${PORT}`);
});
