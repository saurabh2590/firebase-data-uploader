const firebase = require('firebase');
const fs = require('fs');
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "<YOUR API KEY>",
  authDomain: "<YOUR AUTH DOMAIN>",
  projectId: "<YOUR PROJECT ID>"
});

const db = firebase.firestore();

const convert = (filepath) => {
  const bitmap = fs.readFileSync(filepath);
  return Buffer.from(bitmap).toString('base64')
}
const filepath = process.argv[2];
const components = filepath.split('/');


db.collection("Icons").add({
  id: `${components[3]}_${components[4]}`,
  icon: convert(process.argv[2]),
  name: components[4],
  category: components[3]
}).then((docRef) => console.log("Document written with id:", docRef.id))
  .catch((error) => console.error("Failed to write due to:", error))
  .finally(() => process.exit());
