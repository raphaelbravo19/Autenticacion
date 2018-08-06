function registrar(){
    var correo=document.getElementById("correo").value
    var pass=document.getElementById("pass").value
    //console.log(correo+" - "+pass)
    firebase.auth().createUserWithEmailAndPassword(correo, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });
    
}   
function ingresar(){
    var correo=document.getElementById("correo").value
    var pass=document.getElementById("pass").value
    firebase.auth().signInWithEmailAndPassword(correo, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Bienvenido "+correo);
        // ...
      });
}