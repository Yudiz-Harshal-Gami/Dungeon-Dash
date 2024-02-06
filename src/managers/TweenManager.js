export default class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }

    logoAnimation(logo, duration) {
        this.oScene.tweens.add({
            targets: logo,
            scaleX: 1.5,
            scaleY: 1.5,
            duration: duration,
            yoyo: true,
            repeat: -1,
        })
    }

    pointerOverTween(btn, initScale) {
        this.oScene.tweens.add({
            targets: btn,
            scaleX: initScale + 0.05,
            scaleY: initScale + 0.05,
            duration: 50,
            ease: 'Linear'
        })
    }

    pointerOutTween(btn, initScale) {
        this.oScene.tweens.add({
            targets: btn,
            scaleX: initScale,
            scaleY: initScale,
            duration: 50
        })
    }
}