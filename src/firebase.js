
import Firebase from 'firebase'

const fbApp = Firebase.initializeApp({
  apiKey: 'AIzaSyCI0sOWpEgAQpVl2ou8YynUFJrKycqfMXE',
  authDomain: 'jacobshack-live.firebaseapp.com',
  databaseURL: 'https://jacobshack-live.firebaseio.com',
  projectId: 'jacobshack-live',
  storageBucket: 'jacobshack-live.appspot.com',
  messagingSenderId: '506334781070'
})

const db = fbApp.firestore()
const settings = {
  timestampsInSnapshots: true
}

db.settings(settings)

export default db
