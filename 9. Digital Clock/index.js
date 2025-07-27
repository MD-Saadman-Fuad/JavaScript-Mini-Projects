//digital Clock Program

function updateClock(){
    const newTime = new Date();
    let newHour = newTime.getHours();
    const meredium = newHour >= 12 ? "PM":"AM";
    newHour = newHour%12 || 12;
    newHour = newHour.toString().padStart(2, 0);
    const newMinutes = newTime.getMinutes().toString().padStart(2, 0);
    const newSeconds = newTime.getSeconds().toString().padStart(2, 0);
    console.log(newHour, newMinutes, newSeconds)
    const time = `${newHour}:${newMinutes}:${newSeconds} ${meredium}`;
    document.getElementById('clock').textContent = time;

}

updateClock();
setInterval(updateClock, 1000);