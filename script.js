function displayTime(){
    let hr = document.getElementById('hour');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');

    let date = new Date();
    //Getting hour, minutes, seconds, milliseconds from date
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();
    const ms = date.getMilliseconds();



    //calculation rotation for each hand(standart speed)

    const secondsRotation  = (ss / 60) * 360;
    const minuteRotation = ((mm + ss / 60) / 60) * 360;
    const hourRotation  = ((hh + mm / 60 + ss / 3600) / 12) * 360;


    //calculation rotation for each hand(smooth speed)
    // const secondsRotation = ((ss / 60) * 360) + ((ms / 1000) * 6) + 90;
    // const minuteRotation = ((mm + ss / 60) / 60) * 360;
    // const hourRotation  = ((hh + mm / 60 + ss / 3600) / 12) * 360;
    

    hr.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minuteRotation}deg)`;
    sec.style.transform = `rotate(${secondsRotation}deg)`;

   
}

//display the time every second = 1000 ms 
setInterval(displayTime, 4);
