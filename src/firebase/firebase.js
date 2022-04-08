import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

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
