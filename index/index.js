//express
const express = require('express');
const expressApp = express();
const port = 80;

//firebase
const app = initializeApp(firebaseConfig);
const firebaseConfig = {
  apiKey: "AIzaSyC4JdgfKdIAeTh5QfzhoMF-dDWPfQewbKE",
  authDomain: "capstonedesign-eb13f.firebaseapp.com",
  projectId: "capstonedesign-eb13f",
  storageBucket: "capstonedesign-eb13f.appspot.com",
  messagingSenderId: "1054972036829",
  appId: "1:1054972036829:web:e25dcd0a7e6159d9177d34",
};


expressApp.get('/', (req, res) => {
  res.send('');
});

/*
expressApp.post('/', (req, res) => {
  res.send()
});
*/


expressApp.listen(port, () => {
});