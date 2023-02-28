function passvalues(){
    
    var Cname=document.getElementById("cname").value;
    localStorage.setItem("get1",Cname);

    var Address=document.getElementById("address").value;
    localStorage.setItem("get2",Address);

    var CPName=document.getElementById("cpname").value;
    localStorage.setItem("get3",CPName);

    var CPNumber=document.getElementById("cpnumber").value;
    localStorage.setItem("get4",CPNumber);

    var Email=document.getElementById("email").value;
    localStorage.setItem("get5",Email);

    var Industry=document.getElementById("industry").value;
    localStorage.setItem("get6",Industry);

    var OfiicetimeS=document.getElementById("OTS").value;
    localStorage.setItem("get7",OfiicetimeS);

    var OfiicetimeE=document.getElementById("OTE").value;
    localStorage.setItem("get8",OfiicetimeE);

    var Calltype=document.getElementById("calltype").value;
    localStorage.setItem("get9",Calltype);

    var SER=document.getElementById("ser").value;
    localStorage.setItem("get10",SER);

    var DT1=document.getElementById("DT1").value;
    localStorage.setItem("get11",DT1);

    var DT2=document.getElementById("DT2").value;
    localStorage.setItem("get12",DT2);

    var Calldetails=document.getElementById("calldetails").value;
    localStorage.setItem("get13",Calldetails);
   
}

function selectDatevalidation(){
    var today = new Date();
    var acceptableDate = new Date(today.setDate(today.getDate() + 2));

    document.getElementById("DT1").addEventListener("change", function() {
        var selectedDate = new Date(this.value);

        if (selectedDate < acceptableDate) {
            alert("Please select a date that is at least after two days.");
            this.value = "";
        }
    });
}

function calculateTime() {
    // Get the input values
    var officeStart = document.getElementById("OTS").value;
    var officeEnd = document.getElementById("OTE").value;
    var callBookingTime = document.getElementById("DT2").value;

    // Create Date objects to represent the times
    var officeStartObj = new Date("2000-01-01T" + officeStart + ":00");
    var officeEndObj = new Date("2000-01-01T" + officeEnd + ":00");
    var callBookingTimeObj = new Date("2000-01-01T" + callBookingTime + ":00");

    // Calculate the time between the office start and end times
    var officeDuration = (officeEndObj - officeStartObj) / 1000 / 60;

    // Calculate the time between the office start time and call booking time
    var bookingDuration = (callBookingTimeObj - officeStartObj) / 1000 / 60;

    // Calculate the time 4 hours before the office end time
    var fourHoursBeforeEnd = new Date(officeEndObj - 4 * 60 * 60 * 1000);

    // Check if the call booking time is within office hours
    if (bookingDuration >= 0 && bookingDuration <= officeDuration && callBookingTimeObj < fourHoursBeforeEnd) {
        var timeBetween = bookingDuration.toFixed(2) + " minutes";
        // Display the result or perform any other actions here
    } else {
        if (callBookingTimeObj >= fourHoursBeforeEnd) {
            alert("Call booking time should be at least 4 hours before the end of office time");
        } else {
            alert("Call booking time is outside of office time");
        }
        document.getElementById("DT2").value = "";
        return false;
    }
}

  function Mobile(){
    var num=document.getElementById("cpnumber").value;
    if(isNaN(num)||num.indexOf(" ")!=-1)
           {
              alert("Enter only 10 digit number")
              document.getElementById("cpnumber").value = "";
              return false; 
           }
           else if (num.length <10)
           {
                alert("Mobile numbers is invalid ! Please enter valid number");
                document.getElementById("cpnumber").value = "";
                return false;
           }
        else if(num.charAt(0)!="9" && num.charAt(0)!="8" && num.charAt(0)!="7" && num.charAt(0)!="6" )
        {
        alert("Starting numbers accepted only 6, 7, 8 OR 9 ");
        document.getElementById("cpnumber").value = "";
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

  
function isInputNumber(evt){
    var ch = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }
}




    function msg(){
        alert("Your datails has been successfully submitted! Thank You");
    }

    