let hours=0;
let minutes=0;
let seconds=0;
let timer=null;
let mer=null;
function doit(){
    seconds++;
    if(seconds==60)
    {
        minutes++;
        seconds=0;
    }
    if(minutes==60)
    {
        hours++;
        minutes=0;
    }
    let h=hours<10 ? "0"+hours:hours;
    let m=minutes<10 ? "0"+minutes:minutes;
    let s=seconds<10 ? "0"+seconds:seconds;
    document.getElementById("time").innerHTML=h+":"+m+":"+s;
}


function refresh(){
    clearInterval(timer);
     hours=0;
  minutes=0;
  seconds=0;
  let h=hours<10 ? "0"+hours:hours;
  let m=minutes<10 ? "0"+minutes:minutes;
  let s=seconds<10 ? "0"+seconds:seconds;
  document.getElementById("time").innerHTML=h+":"+m+":"+s;

}
function pause()
{
    clearInterval(timer);
    clearInterval(mer);
}
function play(){
    if(timer!=null)
    {
        clearInterval(timer);
    }
    timer=setInterval(doit,1000)
}
function resh(){
    clearInterval(mer);
     hours=0;
  minutes=0;
  seconds=0;
  let h=hours<10 ? "0"+hours:hours;
  let m=minutes<10 ? "0"+minutes:minutes;
  let s=seconds<10 ? "0"+seconds:seconds;
  document.getElementById("time").innerHTML=h+":"+m+":"+s;

}
function sewatch(){
    let k=document.getElementById("time").innerHTML;
    let hr=Number(k.substring(0,2));
    let mi=Number(k.substring(3,5));
    let se=Number(k.substring(6,8));
    se--;
    if(se==0)
    {
        if(mi>0)
        {
            mi--;
            se=59;
        }
        
    }
    if(mi==0)
    {
        if(hr>0)
        {
            hr--;
            mi=59;
        }
        
    }
    if(se<0)
    {
        mer();
    }
    let h=hr<10 ? "0"+hr:hr;
    let m=mi<10 ? "0"+mi:mi;
    let s=se<10 ? "0"+se:se;
    document.getElementById("time").innerHTML=h+":"+m+":"+s;
}
function setwatch(){
    let ho=document.getElementById("hours").value;
    let mi=document.getElementById("minutes").value;
    let se=document.getElementById("seconds").value;
    if(ho<10)
    {
        ho="0"+ho;
    }
    if(mi<10)
    {
        mi="0"+mi;
    }
    if(se<10)
    {
        se="0"+se;
    }
    document.getElementById("time").innerHTML=ho+":"+mi+":"+se;
    
    mer=setInterval(sewatch,1000)
}
