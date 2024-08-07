document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('proposalMessage').classList.remove('hidden');
    var music = document.getElementById('proposalMusic');
    music.play();
});
