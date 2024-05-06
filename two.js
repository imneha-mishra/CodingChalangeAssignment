function generatedRandomNumber() {
    return Math.floor(Math.random()*100)
    
}
function generatedRandomNumberWithDelay(DelayInSecond){
    console.log(`Generating a random number after delay of ${DelayInSecond} seconds..`);
       let countdown = 3;
       const countdownInterval = setInterval(()=>{
        console.log(`${countdown} seconds remaining..`);
        countdown--;
        if(countdown ===0){
            clearInterval(countdownInterval);
            const randomNuber=generatedRandomNumber();
            console.log(`Random number generated : ${randomNuber}`);
        }
       },1000)
}
generatedRandomNumberWithDelay(3);