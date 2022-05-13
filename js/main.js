// Countdown Function

// Set the date for counting down to
const countDownDate = new Date("Jun 4, 2022 10:00:00 GMT+0700").getTime();

// Update countdown every 1 second
let x = setInterval(function() {

    //Get today's date and time
    const now = new Date().getTime();

    //Find the distance between now and the countdown date
    const distance = countDownDate - now;

    //Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Display the results in HTML
    document.getElementById("hari").innerHTML = ('0' + days).slice(-2);
    document.getElementById("jam").innerHTML = ('0' + hours).slice(-2);
    document.getElementById("menit").innerHTML = ('0' + minutes).slice(-2);
    document.getElementById("detik").innerHTML = ('0' + seconds).slice(-2);

    //Action after count down is finished
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("hari").innerHTML = "00";
        document.getElementById("jam").innerHTML = "00";
        document.getElementById("menit").innerHTML = "00";
        document.getElementById("detik").innerHTML = "00";
    };

}, 1000);

//Copy to clipboard function
function copyToClipboard() {
    const cb = navigator.clipboard;
    const paragraph = document.getElementById("norek");
    cb.writeText(paragraph.innerText).then(() => {
        const button = document.getElementById("salin-btn");
        button.textContent = "Berhasil disalin";

        setTimeout(()=> {
            button.innerHTML ='<i class="fa-solid fa-copy"></i> Salin';
        }, 1000)
    });
}
