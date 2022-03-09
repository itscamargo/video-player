const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');


$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);



//NOTA hidden en JS es propiedad, en html es atributo
//hidden como atributo se le puso al botón pause
//

function handlePlay() {
    $video.play();
    $play.hidden = true; //cuando es una propiedad, osea hidden, se asigna y no se pone parentesis
    $pause.hidden = false;
    console.log('Le diste click al botón de play');
}

function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
    console.log('Le diste click al botón pause');
}


$backward.addEventListener('click', handleBackward);

function handleBackward() {
    //$video.currentTime = $video.currentTime - 10;
    $video.currentTime -= 10;
    console.log('Para atrás 10 segundos', $video.currentTime);    
}

$forward.addEventListener('click', handleForward);

function handleForward() {
    $video.currentTime = $video.currentTime + 10;
    console.log('Para adelante 10 segundos', $video.currentTime);
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);


function handleLoaded() {
    $progress.max = $video.duration;
    console.log('Ha cargado mi video', $video.duration);
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
    //console.log("holi", $video.currentTime);
}

$progress.addEventListener('input', handleInput);

function handleInput(){
    $video.currentTime = $progress.value;
    console.log($progress.value);
}