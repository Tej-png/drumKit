var numberOfDrums = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfDrums.length; i++) {
    numberOfDrums[i].addEventListener("click", function() {
        var button =  this.innerHTML;
       makeSound(button);  
       buttonAnimation(button);   
    });

}

document.addEventListener('keydown', function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case 'w':
            crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'a':
            kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case 's':
            snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'd':
            tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'j':
            tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'k':
            tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'l':
            tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            break;
}}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add('pressed');

    setTimeout(function() {
        activeButton.classList.remove('pressed')}, 100);
}