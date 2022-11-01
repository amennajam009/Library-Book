// firebase Configuration

const firebaseConfig = {
    apiKey: "AIzaSyAv4jBtl69d8_61r_4eUTSvFanO20aBAkM",
    authDomain: "library-book-4e232.firebaseapp.com",
    projectId: "library-book-4e232",
    storageBucket: "library-book-4e232.appspot.com",
    messagingSenderId: "524964617900",
    appId: "1:524964617900:web:7163c83e7d38fe241b8909"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore= firebase.firestore()


// variable to access database collection

const db= firestore.collection("LibraryData")

// Get Submit Form

let submitbutton=document.getElementById('submit')

submitbutton.addEventListener('click',(e)=>{
    e.preventDefault()

    // Form Values

    let firstname=document.getElementById('firstname').value
    let lastname=document.getElementById('lastname').value
    let email=document.getElementById('email').value
    let age=document.getElementById('age').value
    let reading=document.getElementById('reading').value
    let tellus=document.getElementById('tellus').value
    let feedback=document.getElementById('feedback').value


    // Library Data to Firebase
    db.doc().set({
        firstname:firstname,
        lastname:lastname,
        email:email,
        age:age,
        reading:reading,
        tellus:tellus,
        feedback:feedback

    }).then(()=>{
        console.log('DATA SAVED')
    })
})
