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


var value=document.getElementById("addform");

var btn=document.getElementById('id');
btn.addEventListener("click",btnf);

value.addEventListener("submit",saveLocalStorage);

function saveLocalStorage(event)
{
  event.preventDefault();

  const email=event.target.email.value;
    const name=event.target.name.value;
    const pnumber=event.target.pnumber.value;
    const password=event.target.password.value;

    const opj={
      name,
      email,
      pnumber,
      password

    }
   
    localStorage.setItem(opj.email, JSON.stringify(opj));
   su(opj);
 
  }

function su(opj)
{
  const parentE=document.getElementById("id");
  // const chaild=document.createElement("label");
  // chaild.textContent="Email= "+opj.email+" Name= "+opj.name+" Phone number= "+opj.pnumber;
  // parentE.appendChild(chaild)
  parentE.innerHTML=`<lable> ${opj.email}</lable> `;
  
  // create a button
    var deletebtn=document.createElement("button");
    deletebtn.setAttribute("type",'button')
    deletebtn.appendChild(document.createTextNode("Delete"));
    //append button in parente
    parentE.appendChild(deletebtn);
    deletebtn.className="delete";
  //

}

   
    function btnf(e)
    {
      if(e.target.classList.contains("delete"))
      {
        var i=e.target.parentElement;
        
        var email=i.querySelector("label").textContent;
        localStorage.removeItem(email);
    
        i.remove();
      }
    }
    var value = document.getElementById("addform");
    var btn = document.getElementById('id');
    btn.addEventListener("click", btnf);
    
    value.addEventListener("submit", saveLocalStorage);