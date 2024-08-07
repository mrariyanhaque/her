document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('proposalMessage').classList.remove('hidden');
    var music = document.getElementById('proposalMusic');
    music.play();
    document.getElementById('stopButton').classList.remove('hidden');
});

document.getElementById('stopButton').addEventListener('click', function() {
    var music = document.getElementById('proposalMusic');
    music.pause();
    music.currentTime = 0; // Optionally reset the music to the beginning
    document.getElementById('stopButton').classList.add('hidden');
});
