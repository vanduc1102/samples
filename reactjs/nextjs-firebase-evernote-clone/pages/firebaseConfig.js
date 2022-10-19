// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDo1C7foLnlqmvtMr6VtMjf3So5nyP_6JU',
    authDomain: 'nextjs-evernote-clone.firebaseapp.com',
    projectId: 'nextjs-evernote-clone',
    storageBucket: 'nextjs-evernote-clone.appspot.com',
    messagingSenderId: '123333278203',
    appId: '1:123333278203:web:93db26f3da02110bcaf35e',
    measurementId: 'G-CDTH07PVJP',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
if (typeof window !== 'undefined' && firebaseConfig.projectId) {
    const analytics = getAnalytics(app);
}

export const database = getFirestore(app)
