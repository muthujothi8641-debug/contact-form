document.getElementById("two").addEventListener("submit",
    function(e)
    {
e.preventDefault();
let hi=document.getElementById("hi").value;
let h3=document.getElementById("h3").value;
let h4=document.getElementById("h4").value;
if(hi===""||h3===""||h4===""){
    alert("please fill all fields!");
}
else{
    alert("submitted!");
    document.getElementById("two").reset();
    document.getElementById("hi").focus;
}
 }
    )
