export default class SoundManager {
    constructor(scene) {
        this.scene = scene;
        this.backgroundSound = this.scene.sound.add('background-music').setVolume(0.8);
        this.clickSound = this.scene.sound.add('click').setVolume(0.4);
        this.destroyedSound = this.scene.sound.add('destroyed').setVolume(1);
        this.levelWinSound = this.scene.sound.add('level_win').setVolume(0.8);
    }

    playSound(key, loop) {
        key.play();
        key.loop = loop;
    }
    stopSound(key, loop) {
        key.stop();
        key.loop = loop;
    }
}