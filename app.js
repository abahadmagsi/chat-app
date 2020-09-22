var signUpVerification = ()=>{
    let name = document.getElementById('Sname');
    let username = document.getElementById('Susername');
    let email = document.getElementById('Semail');
    let password = document.getElementById('Spass');
    if(password.length <6){
        alert("Password must be greater than 6");
    }
    let userInfo ={
        Sname : name.value,
        Susername : username.value,
        Semail :email.value,
        Spass : password.value
    }
    let database = firebase.database().ref('/');
    let key = database.push().key;
    database.child(key).set(userInfo);
}


var loginVerification = ()=>{
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    firebase.database().ref('/').on('child_added',(data)=>{
    if(data.val().Semail == email.value && data.val().Spass == pass.value){
        document.getElementById("myForm").action = "app/chat_app.html";
    }else{
        console.log('not verified');
    }
    })
}