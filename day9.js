
var form=document.getElementById("addform");

form.addEventListener("submit",formf)

function formf(e)
{
    e.preventDefault();

    var email=document.getElementById("email");
    var name=document.getElementById("name");
    var pnumber=document.getElementById("pnumber");
    var password=document.getElementById("password");
    alert("Apointment Booking Success")
    console.log(email.value)
    document.write("email id= "+email.value+"<br>")
    document.write("Name = "+name.value+ "<br>")
    document.write("Pnumber = ",pnumber.value)
    
}