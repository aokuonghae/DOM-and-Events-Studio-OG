// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    console.log("window loaded");
    let flightStatus = document.getElementById("flightStatus");
    let rocket = document.getElementById("rocket");
    let height = document.getElementById("spaceShuttleHeight");
    rocket.style.position = "absolute";
    rocket.style.bottom = "0";
    rocket.style.left = "0";
    newHeight=null;
    //My Code
    let selectedDiv = document.getElementById("shuttleBackground");
    let topPos = selectedDiv.offsetTop;
    let leftPos= selectedDiv.offsetLeft;
    /* The option below i like a little better as it moves closer to the background border.
    refer to offset.jpg for a visual on how all the offsets work
    */
    // let topPos = selectedDiv.offsetHeight-rocket.offsetWidth;
    // let leftPos= selectedDiv.offsetWidth-rocket.offsetWidth;
  
  
    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function (event) {
      let confirm = window.confirm(
        "Confirm that the shuttle is ready for lift off"
      );
      if (confirm === true) {
        flightStatus.innerHTML = "Shuttle in flight";
        let color = document.getElementById("shuttleBackground");
        color.style.backgroundColor = "blue";
        height.innerHTML = "10000";
        rocket.style.bottom = "100px";
      }
    });
  
    let landing = document.getElementById("landing");
    landing.addEventListener("click", function (event) {
      let alert = window.alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.innerHTML = "The shuttle has landed.";
      let returnColor = document.getElementById("shuttleBackground");
      returnColor.style.backgroundColor = "green";
      height.innerHTML = "0";
      rocket.style.bottom = "0";
    });
  
    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function (event) {
      let abortConfrimation = window.confirm(
        "Confirm that you want to abort the mission."
      );
      if (abortConfrimation === true) {
        flightStatus.innerHTML = "Mission aborted.";
        let abortColor = document.getElementById("shuttleBackground");
        abortColor.style.backgroundColor = "green";
        height.innerHTML = "0";
        rocket.style.bottom = "0";
        rocket.style.left = "0";
      }
    });
  
    function formatNumber(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  
    let up = document.getElementById("up");
    up.addEventListener("click", function () {
      if (parseInt(rocket.style.bottom) < topPos) {
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        /*when innerHtml is set, it returns as 1,000.
        when parseInt attempts to turn this into a number, it stumbles on the comma. You would need to remove the comma first
        and then parseInt on it. 
        another method of doing this is to use height.innerHTML = newHeight.toLocaleString(); You can read up more on it. 
        It would mean you didn't need the function. just another option. 
        Refer to image.png
        */
         newHeight= parseInt(height.innerHTML.replace(",",""))+1000;
         height.innerHTML=formatNumber(parseInt(newHeight));
      }
    });
  
    let down = document.getElementById("down");
    down.addEventListener("click", function () {
      if (parseInt(rocket.style.bottom) >= 0) {
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        height.innerHTML = height.innerHTML - 1000;
      }
    });
  
    let left = document.getElementById("left");
    left.addEventListener("click", function () {
      console.log (rocket.style.left);
      if (parseInt(rocket.style.left) <= leftPos){
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
      }
    });
    let right = document.getElementById("right");
    right.addEventListener("click", function () {
      console.log (rocket.style.left);
      if (parseInt(rocket.style.left) >= 0){
      rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
      }
    });
    console.log (leftPos);
    // height.innerHTML = formatNumber(height.innerHTML);
  });