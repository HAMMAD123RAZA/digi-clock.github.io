const display = () => {
let time=new Date()
let hr=time.getHours()
let min=time.getMinutes()
let sec=time.getSeconds()
let session=document.getElementById('ses')

if(hr>=12){
session.innerHTML='pm'
}
else{
    session.innerHTML='am'
}
// if(hr>12){
// hr=hr-12
// }
let hour=document.getElementById('hour').innerHTML=hr;
let minute=document.getElementById('min').innerHTML=min;
let second=document.getElementById('sec').innerHTML=sec;

}
setInterval(display,10)