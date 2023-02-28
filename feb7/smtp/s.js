function send(){
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let contact = document.getElementById("Contact").value;
    let subject = document.getElementById("Subject").value; 
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    
    
    let text;
        if(name.length < 5){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
        }
        if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please enter valid Email"   
        error_message.innerHTML = text;
        return false;
        }
        if(isNaN(contact) || contact.length != 10 ){
        text = "Please enter valid number";
        error_message.innerHTML = text;
        return false;
        }
        if(contact.charAt(0)!="9" &&  contact.charAt(0)!="8" && contact.charAt(0)!="7" && contact.charAt(0)!="6"){
        alert ("Mobile number should start with only 6, 7, 8, 9");
        return false;
        }
        if(subject.length < 5){
        text = "Please Enter Subject";
        error_message.innerHTML = text;
        return false;
        }
        if(message.length <= 1){
        text = "Please enter the Message";
        error_message.innerHTML = text;
        return false;
        }


Email.send({
	Host : "smtp.elasticemail.com",
    Username : "pankajgofficial007@gmail.com",
    Password : "71D026D8FE9DAF31E83F29209BBB4BA29295",
    To : "trifrnds@gmail.com",
    From :"pankajgofficial007@gmail.com",
    Subject : "mail From Contact Form",
    Body : "name:" + name + "<br> Email:" + email + "<br/>Contact:" + contact + "<br/>Subject:" + subject + "<br/>message:" + message
})

.then(
  message => {
    if(message=='OK'){
        alert("Message is successfully send. Thank you!");
    }
    else{
        console.error (message);
        alert("There is error at sending message ")
    }
});
}     