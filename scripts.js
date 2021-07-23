// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    const takeoff = document.getElementById("takeoff");
    const flight_status = document.getElementById("flightStatus");
    const shuttle_background= document.getElementById("shuttleBackground");
    const shuttle_height = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const up = this.document.getElementById("up");
    const rocketImg = this.document.getElementById("rocket");
    rocketImg.style.position='absolute';
    rocketImg.style.bottom='0px';
    let curPos=0;

    takeoff.addEventListener('click', function(event){
       let response = window.confirm("Confirm that the shuttle is ready for takeoff");
       if (response === true){
           flight_status.innerHTML = "Shuttle in flight.";
           shuttle_background.style.backgroundColor = "blue";
           shuttle_height.innerHTML = "10000";
       }
    })

    landing.addEventListener('click', function(event){
        let response = window.alert("The shuttle is landing. Landing gear engaged");
            flight_status.innerHTML = "The shuttle has landed";
            shuttle_background.style.backgroundColor = "green";
            shuttle_height.innerHTML = "0";
     })

     up.addEventListener('click', function(event){
         let movement = parseInt(rocketImg.style.bottom) + 10 + 'px';
         rocketImg.style.bottom=movement;
        //  curPos += 10;
        // rocket.style.bottom = curPos + "px";
        let positionShuttle = parseInt(shuttle_height.innerHTML) + 10000;
        shuttle_height.innerHTML=positionShuttle;

     });
    
});
