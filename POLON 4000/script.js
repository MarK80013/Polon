/*const panelImage = new Image();
panelImage.src = "Polon 4000.png";
panelImage.onload = function() {
    const imageWidth = panelImage.width;
    const imageHeight = panelImage.height;
    const aspectRatio = imageWidth / imageHeight;

    document.body.style.backgroundImage = "url('polon 4000.jpg')";
    document.body.style.backgroundSize = "contain";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";

    window.addEventListener('resize', function() {
        const windowWidth = window.innerWidth;
        const newHeight = windowWidth / aspectRatio;
        document.body.style.height = newHeight + "px";
    });
};

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        document.getElementById('image').src = e.target.result;
    };
    
    reader.readAsDataURL(file);
});

function playAudio() {
    // Zastąp 'sound.mp3' nazwą swojego pliku dźwiękowego
    // let audio = new Audio('sound.mp3');
    // audio.play();
}
*/