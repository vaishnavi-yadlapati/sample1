 var semail,sname,sphn,sdob,sgender,userid;
 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	var user = firebase.auth().currentUser;
  	var Uid=user.uid;
  	window.alert("InUser : " + Uid);
  	/*var ref = firebase.database().ref("users/"+Uid);
	ref.once("value").then(function(snapshot) {
	window.alert("Snp : "+snapshot);
	if(snapshot.exists()==false){
		window.alert("new User");*/

		//return Uid;
		/*firebase.database().ref('users/' + Uid).set({
		    username: sname,
		    email: semail,
		    phn: sphn,
		    orders : "",
		    address : "",
		    dob : sdob,
		    img : "",
		    sex : sgender
 	 	 });*/
	//}
  
//});

  	//var user = firebase.auth().currentUser;
  	//if(user!=null){

    window.location = "./home.html"
  //	window.alert("Uid : "+ user.uid);
  	//}

  } else {
  	
  }
});

  function signin(){
  	var email = document.getElementById('email').value;
  	var password = document.getElementById('password').value;

  	firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		window.alert("Error:"+errorMessage);
  	});

  	var user = firebase.auth().currentUser;
	var  uid="None";

	if (user != null) {
	  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
	                   // this value to authenticate with your backend server, if
	                   // you have one. Use User.getToken() instead.
	}
	window.alert("uid"+uid); 

  }
function signup(){
  	semail = document.getElementById('semail').value;
  	spassword = document.getElementById('spassword').value;
  	sname = document.getElementById('sname').value;
  	sphn = String(document.getElementById('sphn').value);
  	sdob = String(document.getElementById('sdob').value);
    sgender = "";
  	
  	if (document.getElementById('sgender1').checked) {
  	sgender = "Male"
	}
	if (document.getElementById('sgender2').checked) {
  	sgender = "Female"
	}
	if (document.getElementById('sgender3').checked) {
  	sgender = "";
	}

  	firebase.auth().createUserWithEmailAndPassword(semail,spassword).catch(function(error){
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		window.alert("Error:"+errorMessage);
  	});
	var Uid;

  	 firebase.auth().onAuthStateChanged(function(user) {
 	 if (user) {

  	//var user = firebase.auth().currentUser;
  	//if(user!=null){	var user = firebase.auth().currentUser;
  	Uid=user.uid;
  	window.alert("InUser : " + Uid);
   // Uid = user.uid;
  	//}

  } else {
  	
  }
});
	window.alert("outuser"+Uid);	
  firebase.database().ref('users/' + Uid).push({
    username: sname,
    email: semail,
    phn: sphn,
    address : "",
    dob : sdob,
    img : "",
    sex : sgender
  });
}
 
document.getElementById('google').onclick= function(){google()};
document.getElementById('facebook').onclick=function(){facebook()};
function google(){
	window.alert("google");
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
    /*firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result){
    if(result.credential){
        var token=result.credential.accessToken;
    }
    var user =result.user;
    }).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
	});*/
}
function facebook(){
	window.alert("facebook");
}