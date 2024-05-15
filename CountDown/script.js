document.addEventListener('DOMContentLoaded', function() {
 const countdownElement = document.getElementById('countdown');

 //set the target date (yyyy, mm, dd, hh, mm, ss)
 const targetDate = new Date('2024-04-12T23:59:50').getTime();

 //update countdown every second
 const timer = setInterval(function(){
    const now = new Date().getTime();
    const distance = targetDate - now;

//calculate day, hours, minutes, and seconds
    const days = Math.floor(distance/(1000 * 60 * 60 * 24));
    const hours = Math.floor((distance/(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor(distance % (1000 * 60 * 60)) / (1000 * 60);
    const seconds = Math.floor(distance % (1000 * 60)) / (1000);

    //Display the countdown
    // countdownElement.innerHTML = '${days}d ${hours}h ${minutes}m ${seconds}s';
    countdownElement.innerHTML = '${days}d ${hours}h ${minutes}m ${seconds}s';
//If the countdown is over, display a message
if (distance<0) {
    clearInterval(timer);
    countdownElement.innerHTML = 'EXPIRED';
}
 }, 1000);
});