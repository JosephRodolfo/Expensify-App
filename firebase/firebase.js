import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDepvLVdI4Q5urpOqv5wIsS5VCk-D0a5T4",

  authDomain: "expensify-9bf1a.firebaseapp.com",

  databaseURL: "https://expensify-9bf1a-default-rtdb.firebaseio.com",

  projectId: "expensify-9bf1a",

  storageBucket: "expensify-9bf1a.appspot.com",

  messagingSenderId: "503924663123",

  appId: "1:503924663123:web:5889ab98b19b97054637a6",

  measurementId: "G-2DBTE52S1M",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
















































































// database.ref().on("child_removed", (snapshot) => {
// console.log(snapshot.key, snapshot.val())

// });


// database.ref().on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
  
//   });

//   database.ref().on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
    
//     });
  









// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,

//         ...childSnapshot.val(),
//       });
//     });
//   });


// database.ref('expenses').push(
//   {

//     description: "Rent",
//     note: "late",
//     amount: "100"

//   }
// )
// database.ref('expenses').push(
//   {

//     description: "Coffee",
//     note: "credit",
//     amount: "5"

//   }
// )
// database.ref('expenses').push(
//   {

//     description: "Dog food",
//     note: "debit",
//     amount: "20"

//   }
// )

// const firebaseNotes = {
//   notes: {
//     apoisadsf: {
//       title: "First note!",
//       body: "This is my note",
//     },
//     dkslfdsdfs: {
//       id: "13",
//       title: "SEcond note!",
//       body: "This is my second note!",
//     },
//   },
// };

// const notes = [
//   {
//     id: "12",
//     title: "First note!",
//     body: "This is my note",
//   },
//   {
//     id: "13",
//     title: "SEcond note!",
//     body: "This is my second note!",
//   },
// ];

// database.ref("notes").set(notes);

// const onValueChange = database.ref().on('value', (snapshot)=> {
//   console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}.`)
// });

// setTimeout(()=> {

// database.ref('name').set("J.R.")

// }, 6000)

//   setTimeout(()=> {

//     database.ref('job/company').set("Wiley")
//   }, 10500)
// // database.ref()
//   .once('value')
//   .then((snapshot)=> {
//     const val = snapshot.val();
// console.log(val);
//   })
//   .catch((e)=> {

//     console.log('error', e)
//   })

// database
//   .ref()
//   .set({
//     name: "Joseph Rodolfo",
//     age: 31,
//     stressLevel: 6,
//     job: { title: "Copy editor", company: "Wiley" },

//     isSingle: false,
//     location: { city: "Louisville", country: "USA" },
//   })
//   .then((res, req) => {
//     console.log("data is saved");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// database.ref().update({

//   stressLevel: 9,
//   'job/company': "Amazon",
//   'location/city': 'Seattle'
// });

//database.ref('isSingle').set(null)
// database.ref('isSingle').remove().then(()=>{}).catch((e)=>{
// console.log(e);
// })
