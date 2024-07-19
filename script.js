// console.log("Welcome to Spotify");
// //initialize the Variables 
// let songIndex=0;
// let audioElement=new Audio('songs/1.mp3');
// let masterPlay=document.getElementById('masterPlay');
// let myProgressBar=document.getElementById('myProgressBar');
// let gif=document.getElementById('gif');
// let masterSongName=document.getElementById('masterSongName');
// let songItems= Array.from(document.getElementsByClassName('songItems'));
// let songs=[
//     {songName:"Ore-priya-re",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
//     {songName:"Jab Tak",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
//     {songName:"Main jahan Rahoon",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
//     {songName:"Mujhe Pine Do",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
//     {songName:"Piya-ore-piya",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"}
// ]
// songItems.forEach((element,i)=>{ 
//    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
//    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
// })

// //audioElement.play();
// //Handel play/pause click
// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused||audioElement.currentTime<=0){
//     audioElement.play();
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-circle-pause');
//     gif.style.opacity=1;
// }
// else{
//     audioElement.pause();
//     masterPlay.classList.remove('fa-circle-pause');
//     masterPlay.classList.add('fa-circle-play');
//     gif.style.opacity=0;
// }
// })

// //Listen to Events
// audioElement.addEventListener('timeupdate',()=>{
//     //update seekBar
//     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
//     myProgressBar.value=progress;
// })
// myProgressBar.addEventListener('change',()=>{
//     audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
// })
// const makeAllPlays=()=>{
// Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.classList.remove('fa-circle-pause');
//     element.classList.add('fa-circle-play');
// })
// }
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         makeAllPlays();
//         songIndex=parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audioElement.src='songs/$(songIndex+1).mp3';
//         masterSongName.innerText=songs[songIndex].songName;
//         audioElement.currentTime=0;
//         audioElement.play();
//         gif.style.opacity=1;
//         element.classList.remove('fa-circle-play');
//         element.classList.add('fa-circle-pause');

//     })
// })
// document.getElementById('next').addEventListener('click',()=>{
//     if(songIndex>=4){
//         songIndex=0;
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src='songs/${songIndex+1}.mp3';
//     masterSongName.innerText=songs[songIndex].songName;  
//     audioElement.currentTime=0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-circle-pause');
    
// })
// document.getElementById('previous').addEventListener('click',()=>{
//     if(songIndex<=0){
//         songIndex=0;
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src='songs/${songIndex+1}.mp3';
//     masterSongName.innerText=songs[songIndex].songName;
//     audioElement.currentTime=0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-circle-pause');
    
// })

        console.log("Welcome to Spotify");

        let songIndex = 0;
        let audioElement = new Audio();
        let masterPlay = document.getElementById('masterPlay');
        let myProgressBar = document.getElementById('myProgressBar');
        let gif = document.getElementById('gif');
        let masterSongName = document.getElementById('masterSongName');
        let songItems = Array.from(document.getElementsByClassName('songItem'));

        let songs = [
            { songName: "Ore-priya-re", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
            { songName: "Jab Tak", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
            { songName: "Main jahan Rahoon", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
            { songName: "Mujhe Pine Do", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
            { songName: "Piya-ore-piya", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" }
        ];

        // Initialize song items in the library
        songItems.forEach((element, i) => {
            element.getElementsByTagName("img")[0].src = songs[i].coverPath;
            element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
        });

        // Function to play a song
        function playSong(index) {
            if (index === undefined) index = songIndex;
            audioElement.src = songs[index].filePath;
            masterSongName.innerText = songs[index].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            gif.style.opacity = 1;
        }

        // Event listener for play/pause button
        masterPlay.addEventListener('click', () => {
            if (audioElement.paused || audioElement.currentTime <= 0) {
                playSong();
            } else {
                audioElement.pause();
                masterPlay.classList.remove('fa-pause');
                masterPlay.classList.add('fa-play');
                gif.style.opacity = 0;
            }
        });

        // Event listener for timeupdate (progress bar)
        audioElement.addEventListener('timeupdate', () => {
            let progress = (audioElement.currentTime / audioElement.duration) * 100;
            myProgressBar.value = progress;
        });

        // Event listener for progress bar change
        myProgressBar.addEventListener('change', () => {
            audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
        });

        // Event listeners for song items in the library
        songItems.forEach((element, i) => {
            element.addEventListener('click', () => {
                playSong(i);
                makeAllPlays();
                element.getElementsByClassName("songItemPlay")[0].classList.remove('fa-play');
                element.getElementsByClassName("songItemPlay")[0].classList.add('fa-pause');
            });
        });

        // Event listener for next button
        document.getElementById('next').addEventListener('click', () => {
            songIndex = (songIndex + 1) % songs.length;
            playSong();
        });

        // Event listener for previous button
        document.getElementById('previous').addEventListener('click', () => {
            songIndex = (songIndex - 1 + songs.length) % songs.length;
            playSong();
        });

        // Function to reset all play buttons in the library
        function makeAllPlays() {
            Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
                element.classList.remove('fa-pause');
                element.classList.add('fa-play');
            });
        }
    