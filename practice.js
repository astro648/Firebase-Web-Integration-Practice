function addUser(){
  var user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({});
}
