
// You can write more code here
import Phaser from "phaser";
import TweenManager from "../managers/TweenManager";
import SoundManager from "../managers/SoundManager";
import Draw3 from "../managers/Draw3";
/* START OF COMPILED CODE */

export default class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// dark_background
		this.add.image(540, 960, "dark-background");

		// btnPlayGame
		const btnPlayGame = this.add.image(540, 1369, "button");

		// txtPlayGame
		const txtPlayGame = this.add.text(540, 1362, "", {});
		txtPlayGame.setOrigin(0.5, 0.5);
		txtPlayGame.text = "Start Game";
		txtPlayGame.setStyle({ "fontFamily": "MarkerFelt", "fontSize": "57px" });

		// dungeon_dash_logo_new
		const dungeon_dash_logo_new = this.add.image(577, 440, "dungeon-dash-logo-new");
		dungeon_dash_logo_new.scaleX = 1.3;
		dungeon_dash_logo_new.scaleY = 1.3;

		// yellow_gem
		const yellow_gem = this.add.image(568, 258, "yellow-gem");
		yellow_gem.scaleX = 1.3;
		yellow_gem.scaleY = 1.3;
		yellow_gem.angle = -13;

		// red_gem
		const red_gem = this.add.image(474, 260, "red-gem");
		red_gem.scaleX = 1.3;
		red_gem.scaleY = 1.3;
		red_gem.angle = 23;

		// purple_gem
		const purple_gem = this.add.image(754, 636, "purple-gem");
		purple_gem.scaleX = 1.3;
		purple_gem.scaleY = 1.3;
		purple_gem.angle = 26;

		// blue_gem
		const blue_gem = this.add.image(267, 547, "blue-gem");
		blue_gem.scaleX = 1.2;
		blue_gem.scaleY = 1.2;
		blue_gem.angle = -27;

		this.btnPlayGame = btnPlayGame;
		this.txtPlayGame = txtPlayGame;
		this.yellow_gem = yellow_gem;
		this.red_gem = red_gem;
		this.purple_gem = purple_gem;
		this.blue_gem = blue_gem;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	btnPlayGame;
	/** @type {Phaser.GameObjects.Text} */
	txtPlayGame;
	/** @type {Phaser.GameObjects.Image} */
	yellow_gem;
	/** @type {Phaser.GameObjects.Image} */
	red_gem;
	/** @type {Phaser.GameObjects.Image} */
	purple_gem;
	/** @type {Phaser.GameObjects.Image} */
	blue_gem;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.oTweenManager = new TweenManager(this);
		this.oSoundManager = new SoundManager(this);

		this.oTweenManager.logoAnimation(this.blue_gem, 450);
		this.oTweenManager.logoAnimation(this.red_gem, 300);
		this.oTweenManager.logoAnimation(this.yellow_gem, 500);
		this.oTweenManager.logoAnimation(this.purple_gem, 250);
		this.oSoundManager.playSound(this.oSoundManager.backgroundSound, false);

		this.btnPlayGame.setInteractive();
		this.btnPlayGame.on('pointerover', () => {
			this.oTweenManager.pointerOverTween(this.btnPlayGame, 1)
			this.oTweenManager.pointerOverTween(this.txtPlayGame, 1)
		});
		this.btnPlayGame.on('pointerout', () => {
			this.oTweenManager.pointerOutTween(this.btnPlayGame, 1)
			this.oTweenManager.pointerOutTween(this.txtPlayGame, 1)
		});
		this.btnPlayGame.on('pointerdown', () => {
			this.oSoundManager.stopSound(this.oSoundManager.backgroundSound, false);
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			this.scene.stop('Home');
			this.scene.start('Level');
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
