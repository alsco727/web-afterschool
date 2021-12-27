var audio = new Audio('music.mp3');
    audio.play();
    audio.addEventListener('ended', function() { 
        this.currentTime = 0;
        this.play();
    }, false);