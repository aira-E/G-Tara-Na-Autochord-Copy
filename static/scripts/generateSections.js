document.addEventListener('DOMContentLoaded', () => {
    const sectionsContainer = document.getElementById('sectionsContainer');
    const chords = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    chords.forEach(chord => {
        const section = document.createElement('div');
        section.id = `section${chord}`;
        section.className = 'section';
        section.innerHTML = `
            <img src="./static/pictures/major/${chord} Major.png">
            <div class="container_spans">
                <span id="status"> Recorder </span>
                <span id="chords"> Chord Detected: </span>
                <span id="accuracy"> Accuracy Rate: </span>
            </div>
            <div class="buttons">
                <div id="${chord}-Major_playButton" class="clickable">
                    <audio id="${chord}-Major_audioPlayer"></audio>
                    <div class="icon_circle">
                        <i class="fa fa-play-circle icon"></i>
                    </div>
                </div>
                <div class="mic">
                    <div class="icon_circle">
                        <i class="fa fa-microphone icon" onclick="toggleRecording(event);toggleAnimation(event);"></i>
                    </div>
                </div>
            </div>
        `;
        sectionsContainer.appendChild(section);
    });

    // Initialize chord player for dynamically generated sections
    initializeChordPlayer();
});

function initializeChordPlayer() {
    const chords = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    chords.forEach(chord => {
        const audioPlayer = document.getElementById(`${chord}-Major_audioPlayer`);
        const playButton = document.getElementById(`${chord}-Major_playButton`);

        audioPlayer.src = `./static/audio/major/${chord}_Major.mp3`;

        audioPlayer.addEventListener('ended', function () {
            updatePlayButtonIcon(playButton, 'play');
        });

        playButton.addEventListener('click', function () {
            togglePlay(audioPlayer, playButton);
        });
    });
}