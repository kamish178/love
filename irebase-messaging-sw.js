importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDG72V0FlZx76_wBintO1A2aiNrUMXS2dU",
    authDomain: "love-for-you-9354a.firebaseapp.com",
    projectId: "love-for-you-9354a",
    storageBucket: "love-for-you-9354a.firebasestorage.app",
    messagingSenderId: "429237505040",
    appId: "1:429237505040:web:2800fb69753b56f2148e95"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title || '💌 Tienes un mensaje';
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});