var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var linkDisplay = document.getElementById("displayLink");



function submitClick() {
    var firebaseRef = firebase.database().ref();
    var message = mainText.value;
    firebaseRef.child("URL").set(message);
    firebaseRef.child("L").set(message);
    document.getElementById('displayLink').innerHTML = message;
    
}

/*
function getUrl() {
    var firebaseGetRef = firebase.database().ref().child("L");
    firebaseGetRef.on('value', function (snapshot)) {
    linkDisplay.innerHTML = snapshot.val();
    }
}
*/