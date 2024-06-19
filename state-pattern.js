class State {
    play() {}
    pause() {}
    stop() {}
}

// Concrete State classes
class PlayingState extends State {
    play() {
        console.log("Already playing");
    }
    pause(player) {
        player.changeState(new PausedState());
        console.log("Paused");
    }
    stop(player) {
        player.changeState(new StoppedState());
        console.log("Stopped");
    }
}

class PausedState extends State {
    play(player) {
        player.changeState(new PlayingState());
        console.log("Playing");
    }
    pause() {
        console.log("Already paused");
    }
    stop(player) {
        player.changeState(new StoppedState());
        console.log("Stopped");
    }
}

class StoppedState extends State {
    play(player) {
        player.changeState(new PlayingState());
        console.log("Playing");
    }
    pause() {
        console.log("Player is stopped");
    }
    stop() {
        console.log("Already stopped");
    }
}

class MediaPlayer {
    constructor() {
        this.state = new StoppedState();
    }

    changeState(newState) {
        this.state = newState;
    }

    play() {
        this.state.play(this);
    }

    pause() {
        this.state.pause(this);
    }

    stop() {
        this.state.stop(this);
    }
}

const player = new MediaPlayer();

player.play();
player.pause();
player.pause();
player.stop();
player.stop();
player.play();