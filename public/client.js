let close = document.getElementById("close");
let bars = document.getElementById("bars");
let navigation = document.getElementById("navbar");

bars.addEventListener("click",(e)=>{
    e.preventDefault();
    navigation.style.display = "block";    
}); 
close.addEventListener("click",(e)=>{
    e.preventDefault();
    navigation.style.display = "none";
}); 