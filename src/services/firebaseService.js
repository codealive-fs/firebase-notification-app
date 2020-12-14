import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBjxNvLmu7k6aQ1B0SfQXOHVsAtEn3qDSw",
    authDomain: "notification-app-9cbcb.firebaseapp.com",
    projectId: "notification-app-9cbcb",
    storageBucket: "notification-app-9cbcb.appspot.com",
    messagingSenderId: "398275560027",
    appId: "1:398275560027:web:388a0101693e07f11b357e"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification(){
    Notification.requestPermission().then((permission) => {
        console.log(permission) 
        if (permission === 'granted') {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                console.log('TOKEN');
                console.log(currentToken);
            } else {
            // Show permission request.
             console.log('No registration token available. Request permission to generate one.');
            }
            }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            });
         }
    })
}

