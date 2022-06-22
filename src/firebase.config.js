// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA_eEKZM17BA1jlwxY7JZ0nuPtUSJ-LYEk',
  authDomain: 'house-marketplace-app-24fb1.firebaseapp.com',
  projectId: 'house-marketplace-app-24fb1',
  storageBucket: 'house-marketplace-app-24fb1.appspot.com',
  messagingSenderId: '763481085448',
  appId: '1:763481085448:web:c399bf817816cdcba523bd',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
