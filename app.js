let On = false;

//this function switches both the images to turn them on and off when clicked
//if On is true, when clicked, the image will be lighton
//if On is false, when clicked, the image will be lightoff
function switchImg() {
    if (!On) {
        document.getElementById("bulb").src = "lighton.png";
        On = true;
    }
    else if (On) {
        document.getElementById("bulb").src = "lightoff.png";
        On = false;
    }
}