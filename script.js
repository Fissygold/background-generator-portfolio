var css = document.querySelector("h3")
var color1= document.querySelector(".color1")
var color2= document.querySelector(".color2")
var body= document.getElementById("bod")


color1.addEventListener("input", function(){
    setgrad()
}) 

color2.addEventListener("input", function(){
   setgrad()
}) 

function setgrad(){
    body.style.background="linear-gradient(to left,"+color1.value+","+color2.value+")"

    css.innerText= body.style.background + ";";
}


function displayTime(){
    var dateTime= new Date()
    var hrs = dateTime.getHours();
    var min =dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById("sessions")
    if(hrs >=12){
        session.innerHTML="PM"
    
    }else{
        session.innerHTML="AM"
    }
    document.getElementById("hours").innerHTML=hrs
    document.getElementById("minutes").innerHTML=min
    document.getElementById("seconds").innerHTML=sec
}
setInterval(displayTime, 10)