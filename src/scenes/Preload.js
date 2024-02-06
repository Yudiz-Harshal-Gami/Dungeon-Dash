
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// dark_background
		this.add.image(540, 960, "dark-background");

		// progress
		const progress = this.add.text(540, 1521, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.visible = false;
		progress.setStyle({ "fontFamily": "MarkerFelt", "fontSize": "50px" });

		// dungeon_dash_logo_new
		const dungeon_dash_logo_new = this.add.image(577, 440, "dungeon-dash-logo-new");
		dungeon_dash_logo_new.scaleX = 1.3;
		dungeon_dash_logo_new.scaleY = 1.3;

		// blue_gem
		const blue_gem = this.add.image(267, 547, "blue-gem");
		blue_gem.scaleX = 1.2;
		blue_gem.scaleY = 1.2;
		blue_gem.angle = -27;

		// purple_gem
		const purple_gem = this.add.image(754, 636, "purple-gem");
		purple_gem.scaleX = 1.3;
		purple_gem.scaleY = 1.3;
		purple_gem.angle = 26;

		// red_gem
		const red_gem = this.add.image(474, 260, "red-gem");
		red_gem.scaleX = 1.3;
		red_gem.scaleY = 1.3;
		red_gem.angle = 23;

		// yellow_gem
		const yellow_gem = this.add.image(568, 258, "yellow-gem");
		yellow_gem.scaleX = 1.3;
		yellow_gem.scaleY = 1.3;
		yellow_gem.angle = -13;

		this.progress = progress;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	progress;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();


		this.editorPreload();

		this.fakeLoader();

		// this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Home"));
	}

	fakeLoader() {
		this.progress.setVisible(false);

		this.outerBar = this.add.sprite(540, 1652, "loading-bar");
		this.outerBar.setOrigin(0.5);

		this.innerBar = this.add.sprite((540 / 2) - 40, 1645, "loading");
		this.innerBar.setOrigin(0, 0.5);
		this.innerBar.setVisible(false)

		this.innerBarWidth = this.innerBar.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.innerBar.x,
			this.innerBar.y - this.innerBar.displayHeight / 2,
			this.innerBar.displayWidth,
			this.innerBar.displayHeight
		);

		this.innerBar.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			this.progress.setVisible(true);
			this.innerBar.setVisible(true);

			const currentProgress = currentInterval * progressIncrement;
			// Replace with your game object image
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.innerBar.x,
				this.innerBar.y - this.innerBar.displayHeight / 2,
				this.innerBarWidth * currentProgress,
				this.innerBar.displayHeight
			);


			// this.loadingBall.x = (this.innerBarWidth - 60) * currentProgress + 280;

			this.progress.setText(currentInterval + '%')

			currentInterval++;

			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.scene.start("Home");
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
