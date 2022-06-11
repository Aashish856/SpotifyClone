//console.log("Welcome to my music world");
//<link src="https://kit.fontawesome.com/780c3d6e5d.js" crossorigin="anonymous">
// let audioElement = new Audio('1');

//Set a initial variable.
let songIndex = 0;
let audioElement =  new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterPause= document.getElementById('masterPause');
let myProgressBar =document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Alone", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Let me love you", filepath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Let me down slowly", filepath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "safari", filepath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "company", filepath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Excuses", filepath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "No lie", filepath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "sorry", filepath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Your Love", filepath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Pasoori", filepath: "songs/10.mp3", coverPath: "covers/10.jpg"}
 ]

 songItems.forEach((element,i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
 })
 
 //audioElement.play();

 //Handle play/pause click
// masterPlay.addEventListener('click', ()=>{
//     if((audioElement.paused) || (audioElement.currentTime<=0)){
//         audioElement.play();gif.style.opacity = 1;
//         document.getElementById("masterPause").style.display = "inline-block";
//         document.getElementById("masterPlay").style.display = "none";
       
//     }
//     else {
//        audioElement.pause();gif.style.opacity = 0;
//        masterPlay.classList.remove('fa-solid fa-cicle-pause');
//        masterPlay.classList.add('fa-solid fa-circle-play');
       
//     }
// })
masterPlay.addEventListener('click', ()=>{
    document.getElementById("masterPause").style.display = "inline-block";
    document.getElementById("masterPlay").style.display = "none"; 
    audioElement.play();gif.style.opacity = 1;
})
masterPause.addEventListener('click', ()=>{
    document.getElementById("masterPause").style.display = "none";
    document.getElementById("masterPlay").style.display = "inline-block";
    audioElement.pause();gif.style.opacity = 0;
})
 //Listen to Events
 audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
 })

 myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
 })

 const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-solid fa-circle-pause');
        element.classList.add('fa-solid fa-circle-play');
    })
 }

 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-solid fa-circle-pause');
        masterPlay.classList.remove('fa-solid fa-circle-play');
        makeAllPlays();
        e.target.classList.remove('fa-solid fa-circle-play');
        e.target.classList.add('fa-solid fa-circle-pause');
        

    })
 })

 document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex>=9){songIndex = 9;}
    else
    {
       songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
 })

 document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex<=0){songIndex = 0;}
    else
    {
       songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
 })

 document.getElementById('fastBackward').addEventListener('click', ()=>{
    if (audioElement.currentTime<=10){audioElement.currentTime = 0;}
    else
    {
        audioElement.currentTime-= 10;
    }
    // audioElement.src = `songs/${songIndex+1}.mp3`;
    //     audioElement.play();
    //     gif.style.opacity = 1;
 })

 document.getElementById('fastForward').addEventListener('click', ()=>{
    if (audioElement.currentTime>=audioElement.duration-10){
        audioElement.pause();
        gif.style.opacity = 0;
        audioElement.currentTime = audioElement.currentTime;
    }  
    else
    {
        audioElement.currentTime+= 10;
    }
    //audioElement.src = `songs/${songIndex+1}.mp3`;
    //     audioElement.play();
    //     gif.style.opacity = 1;
 })
 