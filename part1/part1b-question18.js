function time(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

function printTime(){
    setInterval(time, 1000);
}

printTime();

