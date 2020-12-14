importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBjxNvLmu7k6aQ1B0SfQXOHVsAtEn3qDSw",
    authDomain: "notification-app-9cbcb.firebaseapp.com",
    projectId: "notification-app-9cbcb",
    storageBucket: "notification-app-9cbcb.appspot.com",
    messagingSenderId: "398275560027",
    appId: "1:398275560027:web:388a0101693e07f11b357e"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();