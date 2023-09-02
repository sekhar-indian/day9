// var form=document.getElementById("addform");

// form.addEventListener("submit",formf)

// function formf(e)
// {
//     e.preventDefault();

//     var email=document.getElementById("email");
//     var name=document.getElementById("name");
//     var pnumber=document.getElementById("pnumber");
//     var password=document.getElementById("password");
//     alert("Apointment Booking Success")
//     console.log(email.value)
//     document.write("email id= "+email.value+"<br>")
//     document.write("Name = "+name.value+ "<br>")
//     document.write("Pnumber = ",pnumber.value)
    
// }


var va=document.getElementById("addform");

va.addEventListener("submit",formdata);

function formdata(e){
     e.preventDefault();
    
       var email=document.getElementById("email").value;
       var name=document.getElementById("name").value;
       var pnumber=document.getElementById("pnumber").value;
       var password=document.getElementById("password").value;
   
    
    
    //desplay 
    var d=document.createElement("lable");
    d.className="class1";
    d.id="id1";
    d.createElement="br";
    d.appendChild(document.createTextNode(email));
    va.appendChild(d);
    console.log(d);

        
}
