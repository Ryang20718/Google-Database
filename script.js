var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var linkDisplay = document.getElementById("displayLink");



function submitClick() {
    var firebaseRef = firebase.database().ref();
    var message = mainText.value;
    firebaseRef.child("URL").set(message);
    document.getElementById('displayLink').innerHTML = message;
    
}



/*
function getUrl(){
    var ref = firebase.databae().ref('URL');
    ref.on('value',gotData);
        function gotData(data){
            console.log(data.val());
            console.log("kinda sucess");
        }
}
*/