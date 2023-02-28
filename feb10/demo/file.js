function passvalues(){
    
    var Fname=document.getElementById("first").value;
    localStorage.setItem("T1",Fname);

    var Mname=document.getElementById("middle").value;
    localStorage.setItem("T2",Mname);
    
    var Lname=document.getElementById("last").value;
    localStorage.setItem("T3",Lname);

    var Mobile=document.getElementById("mobile").value;
    localStorage.setItem("T5",Mobile);

    var Email=document.getElementById("email").value;
    localStorage.setItem("T6",Email);

    var Address=document.getElementById("address").value;
    localStorage.setItem("T7",Address);

    var State=document.getElementById("state").value;
    localStorage.setItem("T8",State);

    var District=document.getElementById("selct1").value;
    localStorage.setItem("T9",District);

    var Taluka=document.getElementById("selct2").value;
    localStorage.setItem("T10",Taluka);
    
    var Aadharnumber=document.getElementById("aadhar").value;
    localStorage.setItem("T11",Aadharnumber);

    var Pancardnumber=document.getElementById("pan").value;
    localStorage.setItem("T12",Pancardnumber);

    var Bankname=document.getElementById("bname").value;
    localStorage.setItem("T13",Bankname);

    var Bankaccount=document.getElementById("baccount").value;
    localStorage.setItem("T14",Bankaccount);

    var IFSC=document.getElementById("ifsc").value;
    localStorage.setItem("T15",IFSC);

    var Photo=document.getElementById("photo").value;
    localStorage.setItem("T16",Photo);

    var PanF=document.getElementById("panf").value;
    localStorage.setItem("T17",PanF);

    var Aadharf=document.getElementById("aadharf").value;
    localStorage.setItem("T18",Aadharf);

    var Bankf=document.getElementById("bankf").value;
    localStorage.setItem("T19",Bankf);

    var Userid=document.getElementById("userid").value;
    localStorage.setItem("T20",Userid);

    var Pass=document.getElementById("pass").value;
    localStorage.setItem("T21",Pass);

    var Rpass=document.getElementById("rpass").value;
    localStorage.setItem("T22",Rpass);

    var f = document.getElementsByName("gender");
    var n;
    for(i=0; i<=f.length;i++){

        if(f[i].checked){
            n = f[i].value;
        }
        localStorage.setItem("T4",n);
    }
}

var obj = {
    "Ahmednagar": {
        "Nagar": [" "],
        "Newasa": [" "],
        "Karjat":[" "],
        "Jamkhed": [" "],
        "Pathardi": [" "],
        "Shevgaon":[" "],
        "Shrigonda": [" "],
        "Parner": [" "],
        "Sangamner":[" "],
        "Akole": [" "],
        "Rahata": [" "],
        "Kopargaon":[" "],
        "Shrirampur": [" "],
        "Rahuri":[" "]
    },
    "Akola": {
        "Akola": [" "],
        "Akot": [" "],
        "Balapur": [" "],
        "Barshitakli": [" "],
        "Murtijapur": [" "],
        "Telhara": [" "]
    },
    "Amravati": {
        "Achalpur": [""],
        "Amravati": [""],
        "Anjangaon Surji": [""],
        "Bhatkuli": [""],
        "Chandur Railway": [""],
        "Chandurbazar": [""],
        "Chikhaldara": [""],
        "Daryapur": [""],
        "Dhamangaon Railway": [""],
        "Dharni": [""],
        "Morshi": [""],
        "Nandgaon Khandeshwar": [""],
        "Teosa": [""],
        "Warud": [""]
    },
    "Aurangabad": {
        "Aurangabad": [""],
        "Gangapur": [""],
        "Kannad": [""],
        "Khuldabad": [""],
        "Paithan": [""],
        "Phulambri": [""],
        "Sillod": [""],
        "Soegaon": [""],
        "Vaijapur": [""]
    }
}

window.onload = function(){
    var selct1 = document.getElementById("selct1"),
    selct2 = document.getElementById("selct2")
    for (var section in obj){
selct1.options[selct1.options.length] = new Option(section, section);
}
selct1.onchange = function(){
    selct2.length = 1;
    if(this.selectedIndes < 1) return;
    for(var standard in obj[this.value]){
        selct2.options[selct2.options.length] = new Option(standard, standard);
    }
}
}

function Mobile(){
    var num=document.getElementById("mobile").value;
    if(isNaN(num)||num.indexOf(" ")!=-1)
           {
              alert("Enter only 10 digit number")
              document.getElementById("mobile").value = "";
              return false; 
           }
           else if (num.length <10)
           {
                alert("Mobile numbers is invalid ! Please enter valid number");
                document.getElementById("mobile").value = "";
                return false;
           }
        else if(num.charAt(0)!="9" && num.charAt(0)!="8" && num.charAt(0)!="7" && num.charAt(0)!="6" ){
        alert("Starting numbers accepted only 6, 7, 8 OR 9 ");
        document.getElementById("mobile").value = "";
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
function Aadhar(){
    var num=document.getElementById("aadhar").value;
    if(isNaN(num)||num.indexOf(" ")!=-1)
    {
        alert("Character is not accepted")
        document.getElementById("aadhar").value = "";
        return false; 
    }
    else if (num.length <12)
    {
        alert("Please enter 12 digit aadhar number");
        document.getElementById("aadhar").value = "";
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

function IFSC(){
    let pan=document.getElementById("ifsc").value;
    var regex= new RegExp("^[A-Z]{4}");
    if(pan ==null){
        alert("please Enter IFS no:")
        return "false";
    }
    if(regex.test(pan) == true){
        return "true";
    }
    else{
        alert("Invalid IFS code:")
        document.getElementById("ifsc").value=innerHtml="";
        return "false";
    }
}
   
function isInputNumber(evt){
    var ch = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }
}


function Files() {
    var fileInput =document.getElementById('photo');
    //validation for filr type
    var filePath = fileInput.value;
    var files = fileInput.files;
    var fileSize = files[0].size;
    var size = Math.round((fileSize / 1024));
    var allowedExtensions =/(\.jpg|\.jpeg|\.png)$/i;
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
    
function Aadharf() {
    var fileInput =document.getElementById('aadharf');
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
        if(size > 5*1024){
            alert("Invalid file size, please select a file less than  2mb size");
            fileInput.value = '';
            return false;
        }
    }
}

function Bankf() {
    var fileInput =document.getElementById('bankf');
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
        if (size > 5*1024){
            alert("Invalid file size, please select a file less than  2mb size");
            fileInput.value = '';
            return false;
        }
    }
}
function UserID(){
    var Lname=document.getElementById("last").value;
    var Mobile=document.getElementById("mobile").value;
    var Aadharnumber=document.getElementById("aadhar").value;
    var Pancardnumber=document.getElementById("pan").value;
    var Bankaccount=document.getElementById("baccount").value;
    var a=Lname.substring(0,4);
    var b=Mobile.substring(8,10);
    var c=Aadharnumber.substring(10,12);
    var d=Pancardnumber.substring(4,6);
    var e=Bankaccount.substring(0,2);
    var sum=a+b+c+d+e;
    let result = sum.toUpperCase();
    document.getElementById("userid").value=innnerHTML=result;
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