class Jukebox {
    constructor(sounds, price) {
        this.sounds = sounds;
        this.price = price;
        this.isIdle = true;
        this.funds = 0;
        this.availableFunds = 0;
        this.activeSound = null;
        this.pendingSounds = [];
    }
    addFunds(funds) {
        this.availableFunds += funds;
        console.log('addfunds: ', this.availableFunds);
    }
    getAllFunds(user) {
        if (user instanceof Administrator) {
            let funds = this.funds;
            this.funds = 0;
            console.log('getallfunds');
            return funds;
        }
    }
    getAvailableSounds() {
        return this.sounds.map(sound => sound.info);
    }
    addToQueue(soundInfo) {
        console.log('addToQueue: ', soundInfo.name);
        if (this.availableFunds >= this.price) {
            let sound = this.sounds.filter(item => {
                return item.info === soundInfo;
            })[0];
            this.availableFunds -= this.price;
            this.funds += this.price;
            if (this.isIdle) {
                this.play(sound);
            } else {
                this.addPendingSound(sound);
            }
        }
    }
    play(sound) {
        console.log('play: ', sound.info.name);
        this.activeSound = sound;
        this.activeSound.onFinished = (info) => {
            console.log('onFinished: ', info.name);
            if (this.pendingSounds.length > 0) {
                let nextSound = this.pendingSounds.shift();
                this.play(nextSound);
            } else {
                this.isIdle = true;
            }
        }
        this.activeSound.play();
        this.isIdle = false;
    }
    addPendingSound(sound) {
        console.log('addpending: ', sound.info.name);
        this.pendingSounds.push(sound);
    }
    stop() {
        if (this.activeSound) {
            this.activeSound.stop();
            this.activeSound = null;
            this.isIdle = true;
        }
    }
    pause() {
        if (this.activeSound) {
            this.activeSound.play();
        }
    }
    resume() {
        if (this.activeSound) {
            this.activeSound.pause();
        }
    }
    setVolume(volume) {
        this.activeSound.setVolume(volume);
    }
    on() {
        if (user instanceof Administrator
            && this.activeSound && this.activeSound.isPaused) {
            this.pause();
        }
    }
    off(user) {
        if (user instanceof Administrator
            && this.activeSound && this.activeSound.isPlaying) {
            this.pause();
        }
    }
}

class Sound {
    constructor(streamData) {
        this.streamData = streamData;
        this.volume = 1;
        this.isPlaying = false;
        this.isPaused = false;
        this.info = new SoundInfo(streamData);
        this.onFinished = () => { };
    }
    play() {
        this.isPaused = false;
        this.isPlaying = true;
        this.streamData.play();
        this.streamData.onFinished = this.onFinished;
    }
    stop() {
        this.isPaused = false;
        this.isPlaying = false;
        this.streamData.stop();
    }
    pause() {
        this.isPaused = true;
        this.isPlaying = false;
        this.streamData.pause();
    }
    setVolume(volume) {
        this.volume = volume;
        this.streamData.volume(volume);
    }
    mute() {
        this.streamData.volume(0);
    }
    unmute() {
        if (this.volume === 0) {
            this.volume = 1;
        }
        this.streamData.volume(this.volume);
    }
}

class SoundInfo {
    constructor(streamData) {
        this.name = streamData.name;
        this.singer = streamData.singer;
        this.duration = streamData.duration;
        this.year = streamData.year;
    }
}

class Customer {
    constructor(funds = 0) {
        this.funds = funds;
    }
    getFunds(value) {
        if(this.funds >= value) {
            this.funds -= value;
            return value;
        }
    }
    addFunds(value) {
        this.funds += value;
    }
}

class Administrator extends Customer {
    constructor(funds = 0) {
        super(funds);
    }
}

class FakeStreamData {
    constructor(name) {
        this.name = name;
        this.onFinished = () => {};
    }
    play() {
        setTimeout(() => {
            this.onFinished(this);
        }, 100);
    }
    stop() {

    }
}

let sounds = [
        new Sound(new FakeStreamData('sound-1')),
        new Sound(new FakeStreamData('sound-2')),
        new Sound(new FakeStreamData('sound-3'))
    ], 
    jukebox = new Jukebox(sounds, 10),
    customer = new Customer(100),
    administrator = new Administrator(1000);
    
jukebox.addFunds(customer.getFunds(25));
let jukeboxSounds = jukebox.getAvailableSounds();
jukebox.addToQueue(jukeboxSounds[0]);
jukebox.addToQueue(jukeboxSounds[1]);
administrator.addFunds(jukebox.getAllFunds(administrator));

console.log('jukebox funds: ', jukebox.availableFunds);
console.log('customer funds: ', customer.funds);
console.log('administrator funds: ', administrator.funds);