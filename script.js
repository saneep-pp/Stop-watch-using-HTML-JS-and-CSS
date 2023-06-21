let timeE1=document.querySelector(".time");
let timer=null;
let [hours,min,sec]=[0,0,0];

function stopWatch(){
    sec++;
    if(sec===60){
        sec=0;
        min++;
        if(min===60){
            min=0;
            hours++;
        }
    }
    let h=hours<10 ? ("0"+hours): hours;
    let m=min<10 ? ("0"+min) : min;
    let s= sec<10 ? ("0"+sec) : sec;

    timeE1.innerHTML=h+":"+m+":"+s;
}

const startTimer=()=>{
    if(timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(stopWatch,1000);
    console.log(timer);
}

const stopTimer=()=>{
    clearInterval(timer);
    console.log(timer);
}
const resetTimer=()=>{
    clearInterval(timer);
    [hours,min,sec]=[0,0,0];
    timeE1.innerHTML="00:00:00";
    console.log(timer);
}