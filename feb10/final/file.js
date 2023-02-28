

function Land1(){
    var num=document.getElementById("mobile").value;
    if(isNaN(num)||num.indexOf(" ")!=-1)
           {
              alert("Enter only 10 digit number")
              document.getElementById("mobile").value=innerHtml = "";
              return false; 
           }
           else if (num.length <10)
           {
                alert("Mobile numbers is invalid ! Please enter valid number");
                document.getElementById("mobile").value=innerHtml = "";
                return false;
           }
       
  }
  function Land2(){
    var num=document.getElementById("mobile1").value;
    if(isNaN(num)||num.indexOf(" ")!=-1)
           {
              alert("Enter only 10 digit number")
              document.getElementById("mobile1").value=innerHtml = "";
              return false; 
           }
           else if (num.length <10)
           {
                alert("Mobile numbers is invalid ! Please enter valid number");
                document.getElementById("mobile1").value=innerHtml = "";
                return false;
           }
       
  }
  function Mobile(){
    var num=document.getElementById("mobilee").value;
    if(isNaN(num)||num.indexOf(" ")!=-1)
           {
              alert("Enter only 10 digit number")
              document.getElementById("mobilee").value = "";
              return false; 
           }
           else if (num.length <10)
           {
                alert("Mobile numbers is invalid ! Please enter valid number");
                document.getElementById("mobilee").value = "";
                return false;
           }
        else if(num.charAt(0)!="9" && num.charAt(0)!="8" && num.charAt(0)!="7" && num.charAt(0)!="6" ){
        alert("Starting numbers accepted only 6, 7, 8 OR 9 ");
        document.getElementById("mobilee").value = "";
                return  false;
    }
  }
  function validemail() {  
    var x=document.getElementById("email").value; 
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
       alert("Please enter a valid e-mail address");  
       document.getElementById("email").value = "";
        return false;  
    }  
}  

 
function pancard(){
    let pan=document.getElementById("pan").value;
    var regex= new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
    if(pan ==null){
        alert("please Enter pan no:")
        return "false";
    }
    if(regex.test(pan) == true){
        return "true";}
        else{
            alert("Invalid pan card no:")
            document.getElementById("pan").value=innerHtml="";
            return "false";
        }
    }
    
    function gst() {
        let pan=document.getElementById("gstNumber").value;
    var regex= new RegExp(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/);
    if(pan ==null){
        alert("please Enter pan no:")
        return "false";
    }
    if(regex.test(pan) == true){
        return "true";}
        else{
            alert("Invalid pan card no:")
            document.getElementById("gstNumber").value=innerHtml="";
            return "false";
        }
      }
   
function isInputNumber(evt){
    var ch = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }
}



function Panf() {
    var fileInput =document.getElementById('panf');
        //validation for filr type
        var filePath = fileInput.value;
        var files = fileInput.files;
        var fileSize = files[0].size;
        var size = Math.round((fileSize / 1024));
        var allowedExtensions =/(\.jpg|\.pdf|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(filePath)) {
            alert('Invalid file type');
            fileInput.value = '';
            return false;
        }
        else
        {
            if(size > 5*1024) {
                alert("Invalid file size, please select a file less than  2mb size");
                fileInput.value = '';
                return false;
            }
        }
    }
    


    function password(){
        var Pass=document.getElementById("pass").value;
        var Rpass=document.getElementById("rpass").value;
        if(Pass==Rpass){
            return true;
        }
        else{
            alert("Password is not matched");
            document.getElementById("rpass").value = "";
            return false;
        }
    }

    function passlength(){
        var Pass=document.getElementById("pass").value;
        if (Pass.length < 5  ){
            alert("Password should be greater than 5 and less than 10");
            document.getElementById("pass").value = "";
        }
    }

    
    function msg(){
        alert("Your datails has been successfully submitted! Thank You");
    }

    