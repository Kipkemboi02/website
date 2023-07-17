let emailClass = document.getElementsByClassName("email");
let errorMsg = document.getElementsByClassName("error-msg");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker(){
if(emailClass.nodeValue.match(mailRegex)){
    errorMsg.style.display = "none";
    emailcl.style.border = '2px solid #2ecc71';

}
else if(emailClass.value == ""){
    errorMsg.style.display = "none";
    emailClass.style.border='2px solid #2ecc71';

}
else{
    errorMsg.style.display= "block";
    emailClass.style.border= '2px solid #2ecc71';
}
}