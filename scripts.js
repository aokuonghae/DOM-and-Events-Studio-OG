let liftoff= null;
let landShip = null;
let abortMission = null;
let status=null;
let buttonRight=null;

function ready () {
    console.log ("DOM is ready");
    liftoff= document.getElementById("takeoff");
    landShip= document.getElementById("landing");
    abortMission= document.getElementById("missionAbort")
    status=document.getElementById("flightStatus");


    let image = document.getElementById("rocket");
    image.style.position= "absolute";
    image.style.top = "0px";
    image.style.left= "0px";
    let offset=0;
    let altitude = 10000;

    document.getElementById("right").addEventListener("click", function(){      
        offset += 10;     
        if (offset <= (shuttleBackground.offsetWidth-50)){        
        image.style.left = offset + "px";
        } 
    });
    document.getElementById("left").addEventListener("click", function(){
        offset -=10;
        if (offset >= -25){
        image.style.left=offset + "px"
        }
    });
    document.getElementById("up").addEventListener("click", function(){        
        altitude +=10000;
        document.getElementById("spaceShuttleHeight").innerHTML = altitude;        
    });
    document.getElementById("down").addEventListener("click", function(){
        altitude -= 10000;
        if (altitude>=0){        
        document.getElementById("spaceShuttleHeight").innerHTML= altitude;
        }
    })
    liftoff.addEventListener("click", function(){
        let result = confirm ("Confirm that the shuttle is ready for takeoff.");
        if (result===true){
           status.innerHTML="Shuttle in flight.";
           document.getElementById("shuttleBackground").style.backgroundColor="blue";
           document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    });
    landShip.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML= "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor="green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
        image.style.top = "0px";
        image.style.left= "0px";
    });
    abortMission.addEventListener("click", function(){
        let result = confirm ("Confirm that you want to abort the mission.");
        if (result===true){
           status.innerHTML="Mission Aborted.";
           document.getElementById("shuttleBackground").style.backgroundColor="green";
           document.getElementById("spaceShuttleHeight").innerHTML = 0;
           image.style.top = "0px";
           image.style.left= "0px";
        }
    });   

}

window.onload = ready;