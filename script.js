var video1 = document.getElementsByClassName('vide');
     video1[0].addEventListener("click",function(){
        console.log("Hello");
     if(video1.paused){
         video1.play();
     }else{
         video1.pause();
     }
      });

let me = ()=>{
    console.log("Hello world");
}   