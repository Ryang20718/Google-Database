var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
function submitClick(){
    var firebaseRef = firebase.database().ref();
    var message = mainText.value;
    firebaseRef.child("URL").set(message);
    document.getElementById('displayLink').innerHTML = message;
}