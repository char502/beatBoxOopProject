/**
 * Beat class that keeps track of playing the audio
//  * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
//  * HINT: Create a play function to play the audio if called 
 */
class Beat {
    constructor(audioSrc) {
        this.audio = new Audio(audioSrc);
    }

    play = (audio) => {
        this.audio.currentTime = 0; // Resets the audio on each key press
        this.audio.play()
    }
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
        console.log(this.element)
        this.setButtonColorInHTML(); 
        this.setTransitionEndListener();
    }

    setTransitionEndListener = () => {
        // this in included in the constructor and gets run when the keydown transition ends
        this.element.addEventListener('transitionend', () => {
            this.deselect();
        })

    }
    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color
    }

    /**
     * Select function to set the background color and boxShadow
     * Box shadow 0px 0px 17px 0px #FFFFFF (horizontal change, vertical change, blur, spread, color)
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        // take the styles back to their default values
        this.element.style.backgroundColor = "transparent"
        this.element.style.boxShadow = "none"
    }
}