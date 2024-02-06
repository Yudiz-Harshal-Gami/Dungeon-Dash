
// You can write more code here
import Phaser from "phaser";
import TweenManager from "../managers/TweenManager";
import SoundManager from "../managers/SoundManager";
import Draw3 from "../managers/Draw3";
/* START OF COMPILED CODE */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameOptions = {
			gemSize: 100,
			fallSpeed: 100,
			destroySpeed: 100,
			boardOffset: {
				x: 150,
				y: 365
			}
		}

		this.gemsArr = [];
		this.arrowArr = [];
		this.score = 0
		this.preScore = 0
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_game_play
		const container_game_play = this.add.container(0, 0);

		// dark_background
		const dark_background = this.add.image(540, 960, "dark-background");
		container_game_play.add(dark_background);

		// score_stone
		const score_stone = this.add.image(200, 1824, "score-stone");
		container_game_play.add(score_stone);

		// txtScore
		const txtScore = this.add.text(200, 1873, "", {});
		txtScore.setOrigin(0.5, 0.5);
		txtScore.text = "0";
		txtScore.setStyle({ "fontFamily": "MarkerFelt", "fontSize": "50px" });
		container_game_play.add(txtScore);

		// time_stone
		const time_stone = this.add.image(540, 1804, "time-stone");
		container_game_play.add(time_stone);

		// txtTimer
		const txtTimer = this.add.text(540, 1873, "", {});
		txtTimer.setOrigin(0.5, 0.5);
		txtTimer.setStyle({ "fontFamily": "MarkerFelt", "fontSize": "50px" });
		container_game_play.add(txtTimer);

		// level_stone
		const level_stone = this.add.image(540, 96, "level-stone");
		container_game_play.add(level_stone);

		// txtCurrentLevel
		const txtCurrentLevel = this.add.text(540, 132, "", {});
		txtCurrentLevel.setOrigin(0.5, 0.5);
		txtCurrentLevel.text = "0";
		txtCurrentLevel.setStyle({ "fontFamily": "MarkerFelt", "fontSize": "60px" });
		container_game_play.add(txtCurrentLevel);

		// target_stone
		const target_stone = this.add.image(880, 1824, "target-stone");
		container_game_play.add(target_stone);

		// txtTarget
		const txtTarget = this.add.text(880, 1873, "", {});
		txtTarget.setOrigin(0.5, 0.5);
		txtTarget.text = "0";
		txtTarget.setStyle({ "fontFamily": "MarkerFelt", "fontSize": "50px" });
		container_game_play.add(txtTarget);

		// main_board
		const main_board = this.add.image(540, 960, "main-board");
		container_game_play.add(main_board);

		// home_button
		const home_button = this.add.image(105, 102, "home-button");
		home_button.scaleX = 0.7;
		home_button.scaleY = 0.7;
		container_game_play.add(home_button);

		// container_Time_Over
		const container_Time_Over = this.add.container(540, 960);
		container_Time_Over.visible = false;

		// dark_background_time_over
		const dark_background_time_over = this.add.image(0, 0, "dark-background");
		container_Time_Over.add(dark_background_time_over);

		// home_button_time_over
		const home_button_time_over = this.add.image(0, 727, "home-button");
		container_Time_Over.add(home_button_time_over);

		// btnRestartLevel
		const btnRestartLevel = this.add.image(0, 483, "button");
		container_Time_Over.add(btnRestartLevel);

		// txtRestartLevel
		const txtRestartLevel = this.add.text(0, 479, "", {});
		txtRestartLevel.setOrigin(0.5, 0.5);
		txtRestartLevel.text = "Reset Level";
		txtRestartLevel.setStyle({ "color": "#ffffffff", "fontFamily": "MarkerFelt", "fontSize": "55px" });
		container_Time_Over.add(txtRestartLevel);

		// btnPlayAgain
		const btnPlayAgain = this.add.image(0, 220, "button");
		container_Time_Over.add(btnPlayAgain);

		// txtPlayAgain
		const txtPlayAgain = this.add.text(0, 214, "", {});
		txtPlayAgain.setOrigin(0.5, 0.5);
		txtPlayAgain.text = "Play Again";
		txtPlayAgain.setStyle({ "color": "#ffffffff", "fontFamily": "MarkerFelt", "fontSize": "55px" });
		container_Time_Over.add(txtPlayAgain);

		// game_over_logo
		const game_over_logo = this.add.image(0, -495, "game-over-logo");
		container_Time_Over.add(game_over_logo);

		// container_Level_Up
		const container_Level_Up = this.add.container(540, 960);
		container_Level_Up.visible = false;

		// dark_background_level_up
		const dark_background_level_up = this.add.image(0, 0, "dark-background");
		container_Level_Up.add(dark_background_level_up);

		// level_up_board
		const level_up_board = this.add.image(-17, -179, "level-up-board");
		container_Level_Up.add(level_up_board);

		// txtCurrentPopupLevel
		const txtCurrentPopupLevel = this.add.text(-12, -197, "", {});
		txtCurrentPopupLevel.setOrigin(0.5, 0.5);
		txtCurrentPopupLevel.text = "1";
		txtCurrentPopupLevel.setStyle({ "fontFamily": "MarkerFelt", "fontSize": "60px" });
		container_Level_Up.add(txtCurrentPopupLevel);

		// txtPopupScore
		const txtPopupScore = this.add.text(0, 111, "", {});
		txtPopupScore.setOrigin(0.5, 0.5);
		txtPopupScore.setStyle({ "fontFamily": "MarkerFelt", "fontSize": "60px" });
		container_Level_Up.add(txtPopupScore);

		// btnNextLevel
		const btnNextLevel = this.add.image(210, 342, "play-next-button");
		container_Level_Up.add(btnNextLevel);

		// btnReplayGame
		const btnReplayGame = this.add.image(-210, 342, "replay-game");
		container_Level_Up.add(btnReplayGame);

		// home_button_level_up
		const home_button_level_up = this.add.image(0, 342, "home-button");
		container_Level_Up.add(home_button_level_up);

		// maskRectangle
		const maskRectangle = this.add.rectangle(85, 325, 910, 1267);
		maskRectangle.setOrigin(0, 0);
		maskRectangle.visible = false;
		maskRectangle.isFilled = true;

		this.container_game_play = container_game_play;
		this.txtScore = txtScore;
		this.txtTimer = txtTimer;
		this.txtCurrentLevel = txtCurrentLevel;
		this.txtTarget = txtTarget;
		this.home_button = home_button;
		this.container_Time_Over = container_Time_Over;
		this.dark_background_time_over = dark_background_time_over;
		this.home_button_time_over = home_button_time_over;
		this.btnRestartLevel = btnRestartLevel;
		this.txtRestartLevel = txtRestartLevel;
		this.btnPlayAgain = btnPlayAgain;
		this.txtPlayAgain = txtPlayAgain;
		this.container_Level_Up = container_Level_Up;
		this.dark_background_level_up = dark_background_level_up;
		this.txtCurrentPopupLevel = txtCurrentPopupLevel;
		this.txtPopupScore = txtPopupScore;
		this.btnNextLevel = btnNextLevel;
		this.btnReplayGame = btnReplayGame;
		this.home_button_level_up = home_button_level_up;
		this.maskRectangle = maskRectangle;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_game_play;
	/** @type {Phaser.GameObjects.Text} */
	txtScore;
	/** @type {Phaser.GameObjects.Text} */
	txtTimer;
	/** @type {Phaser.GameObjects.Text} */
	txtCurrentLevel;
	/** @type {Phaser.GameObjects.Text} */
	txtTarget;
	/** @type {Phaser.GameObjects.Image} */
	home_button;
	/** @type {Phaser.GameObjects.Container} */
	container_Time_Over;
	/** @type {Phaser.GameObjects.Image} */
	dark_background_time_over;
	/** @type {Phaser.GameObjects.Image} */
	home_button_time_over;
	/** @type {Phaser.GameObjects.Image} */
	btnRestartLevel;
	/** @type {Phaser.GameObjects.Text} */
	txtRestartLevel;
	/** @type {Phaser.GameObjects.Image} */
	btnPlayAgain;
	/** @type {Phaser.GameObjects.Text} */
	txtPlayAgain;
	/** @type {Phaser.GameObjects.Container} */
	container_Level_Up;
	/** @type {Phaser.GameObjects.Image} */
	dark_background_level_up;
	/** @type {Phaser.GameObjects.Text} */
	txtCurrentPopupLevel;
	/** @type {Phaser.GameObjects.Text} */
	txtPopupScore;
	/** @type {Phaser.GameObjects.Image} */
	btnNextLevel;
	/** @type {Phaser.GameObjects.Image} */
	btnReplayGame;
	/** @type {Phaser.GameObjects.Image} */
	home_button_level_up;
	/** @type {Phaser.GameObjects.Rectangle} */
	maskRectangle;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.oTweenManager = new TweenManager(this);
		this.oSoundManager = new SoundManager(this);

		this.bonusDiff = 70
		this.canPick = true;
		this.dragging = false;
		this.targetScore = 1000;
		this.currentLevel = 1;
		this.isGameStop = false;
		this.draw3 = new Draw3({
			rows: 12,
			columns: 8,
			items: 6 // Diffrent ball to Visible
		});

		this.draw3.generateField();
		this.drawField();

		this.input.on("pointerdown", this.gemSelect, this);
		this.input.on("pointermove", this.drawPath, this);
		this.input.on("pointerup", this.removeGems, this);

		// this.popUpBackground.setInteractive();
		this.dark_background_level_up.setInteractive();
		this.dark_background_time_over.setInteractive();
		this.container_Level_Up.setDepth(4);
		this.container_Time_Over.setDepth(4);

		this.btnPlayAgain.setInteractive();
		this.btnRestartLevel.setInteractive();
		this.btnReplayGame.setInteractive();
		this.btnNextLevel.setInteractive();
		this.home_button.setInteractive();
		this.home_button_time_over.setInteractive();
		this.home_button_level_up.setInteractive();

		// btnPlayAgain
		this.btnPlayAgain.on('pointerover', () => {
			this.oTweenManager.pointerOverTween(this.btnPlayAgain, 1)
			this.oTweenManager.pointerOverTween(this.txtPlayAgain, 1)
		})
		this.btnPlayAgain.on('pointerout', () => {
			this.oTweenManager.pointerOutTween(this.btnPlayAgain, 1)
			this.oTweenManager.pointerOutTween(this.txtPlayAgain, 1)
		})
		this.btnPlayAgain.on('pointerdown', () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			this.score = 0
			this.scene.restart('Level');
		})

		// btnRestartLevel
		this.btnRestartLevel.on('pointerover', () => {
			this.oTweenManager.pointerOverTween(this.btnRestartLevel, 1)
			this.oTweenManager.pointerOverTween(this.txtRestartLevel, 1)
		})
		this.btnRestartLevel.on('pointerout', () => {
			this.oTweenManager.pointerOutTween(this.btnRestartLevel, 1)
			this.oTweenManager.pointerOutTween(this.txtRestartLevel, 1)
		})
		this.btnRestartLevel.on('pointerdown', () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			this.score = 0
			sessionStorage.setItem('currentLevel', 1);
			clearInterval(this.timeInterval);
			this.scene.stop('Level');
			this.scene.start('Home');
		})

		// btnReplayGame
		this.btnReplayGame.on('pointerover', () => {
			this.oTweenManager.pointerOverTween(this.btnReplayGame, 1)
		})
		this.btnReplayGame.on('pointerout', () => {
			this.oTweenManager.pointerOutTween(this.btnReplayGame, 1)
		})
		this.btnReplayGame.on('pointerdown', () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			this.score = 0
			this.scene.restart('Level');
		})

		// btnNextLevel
		this.btnNextLevel.on('pointerover', () => {
			this.oTweenManager.pointerOverTween(this.btnNextLevel, 1)
		})
		this.btnNextLevel.on('pointerout', () => {
			this.oTweenManager.pointerOutTween(this.btnNextLevel, 1)
		})
		this.btnNextLevel.on('pointerdown', () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			this.currentLevel++;
			sessionStorage.setItem('currentLevel', this.currentLevel)
			this.scene.restart('Level');
		})

		// home-button
		this.home_button.on('pointerover', () => {
			this.oTweenManager.pointerOverTween(this.home_button, 0.7)
		})
		this.home_button.on('pointerout', () => {
			this.oTweenManager.pointerOutTween(this.home_button, 0.7)
		})
		this.home_button.on('pointerdown', () => {
			this.homeButton();
		})

		// home_button_time_over
		this.home_button_time_over.on('pointerover', () => {
			this.oTweenManager.pointerOverTween(this.home_button_time_over, 1)
		})
		this.home_button_time_over.on('pointerout', () => {
			this.oTweenManager.pointerOutTween(this.home_button_time_over, 1)
		})
		this.home_button_time_over.on('pointerdown', () => {
			this.homeButton();
		})

		// home_button_level_up
		this.home_button_level_up.on('pointerover', () => {
			this.oTweenManager.pointerOverTween(this.home_button_level_up, 1)
		})
		this.home_button_level_up.on('pointerout', () => {
			this.oTweenManager.pointerOutTween(this.home_button_level_up, 1)
		})
		this.home_button_level_up.on('pointerdown', () => {
			this.homeButton();
		})

		if (sessionStorage.getItem('currentLevel') !== null) {
			this.currentLevel = sessionStorage.getItem('currentLevel');
		}
		else {
			this.currentLevel = 1;
			sessionStorage.setItem('currentLevel', 1);
			if (this.timeInterval !== undefined) {
				clearInterval(this.timeInterval);
				this.scene.stop('Level');
				this.scene.start('Home');
			}
		}

		this.txtCurrentLevel.setText(`${this.currentLevel}`)

		this.oSoundManager.playSound(this.oSoundManager.backgroundSound, true);
		this.setGameLevel();
	}

	homeButton() {
		this.score = 0;
		this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
		clearInterval(this.timeInterval);
		this.scene.stop('Level');
		this.scene.start('Home');
	}

	setGameLevel() {
		switch (parseInt(this.currentLevel)) {
			case 1:
				this.gameTimer(120) // input as second
				break;
			case 2:
				this.gameTimer(105) // input as second
				break;
			case 3:
				this.gameTimer(90) // input as second
				break;
			case 4:
				this.targetScore = 1100;
				this.gameTimer(75) // input as second
				break;
			case 5:
				this.targetScore = 1100;
				this.gameTimer(60) // input as second
				break;
			default:
				this.targetScore = 1200 + (50 * (this.currentLevel - 5));
				this.gameTimer(60) // input as second
				break;
		}
		this.txtTarget.setText(`${this.targetScore}`)
	}

	newLevelData() {
		let tempLevel = parseInt(this.currentLevel) + 1
		let tempTarget
		switch (parseInt(this.currentLevel)) {
			case 1:
				tempTarget = 1000
				break;
			case 2:
				tempTarget = 1000
				break;
			case 3:
				tempTarget = 1100
				break;
			case 4:
				tempTarget = 1100
				break;
			default:
				tempTarget = 1200 + (50 * (tempLevel - 5));
				break;
		}
		this.txtPopupScore.setText(`${tempTarget}`);
		this.txtCurrentPopupLevel.setText(`${tempLevel}`);
	}

	drawField() {
		this.poolArray = [];
		this.arrowArray = [];
		for (let i = 0; i < this.draw3.getRows(); i++) {
			this.arrowArray[i] = [];
			for (let j = 0; j < this.draw3.getColumns(); j++) {
				let posX = this.gameOptions.boardOffset.x + this.gameOptions.gemSize * j + this.gameOptions.gemSize / 2;
				let posY = this.gameOptions.boardOffset.y + this.gameOptions.gemSize * i + this.gameOptions.gemSize / 2
				let gem = this.add.sprite(posX, posY, "stone", this.draw3.valueAt(i, j));
				gem.setMask(this.gemMask);
				this.gemsArr.push(gem);
				let arrow = this.add.sprite(posX, posY, "arrows");
				arrow.setVisible(false);
				arrow.setDepth(4);
				this.arrowArr.push(arrow);
				this.arrowArray[i][j] = arrow;
				this.draw3.setCustomData(i, j, gem);
			}
		}
	}
	gemSelect(pointer) {
		if (this.canPick && !this.isGameStop) {
			let row = Math.floor((pointer.y - this.gameOptions.boardOffset.y) / this.gameOptions.gemSize);
			let col = Math.floor((pointer.x - this.gameOptions.boardOffset.x) / this.gameOptions.gemSize);
			if (this.draw3.validPick(row, col)) {
				this.canPick = false;
				this.draw3.putInChain(row, col)
				this.draw3.customDataOf(row, col).alpha = 0.5;
				// this.draw3.customDataOf(row, col).setDepth(2)
				this.dragging = true;
			}
		}
	}
	drawPath(pointer) {
		if (this.dragging && !this.isGameStop) {
			let row = Math.floor((pointer.y - this.gameOptions.boardOffset.y) / this.gameOptions.gemSize);
			let col = Math.floor((pointer.x - this.gameOptions.boardOffset.x) / this.gameOptions.gemSize);
			if (this.draw3.validPick(row, col)) {
				let distance = Phaser.Math.Distance.Between(pointer.x, pointer.y, this.draw3.customDataOf(row, col).x, this.draw3.customDataOf(row, col).y);
				if (distance < this.gameOptions.gemSize * 0.4) {
					if (this.draw3.continuesChain(row, col)) {
						// this.draw3.customDataOf(row, col).setDepth(2)
						this.draw3.customDataOf(row, col).alpha = 0.5;
						this.draw3.putInChain(row, col);
						this.displayPath()
					}
					else {
						if (this.draw3.backtracksChain(row, col)) {
							let removedItem = this.draw3.removeLastChainItem();
							this.draw3.customDataOf(removedItem.row, removedItem.column).alpha = 1;
							this.hidePath();
							this.displayPath();
						}
					}
				}
			}
		}
	}
	removeGems() {
		if (this.dragging && !this.isGameStop) {
			this.hidePath();
			this.dragging = false;
			if (this.draw3.getChainLength() < 3) {
				let chain = this.draw3.emptyChain();
				chain.forEach(function (item) {
					this.draw3.customDataOf(item.row, item.column).alpha = 1;
				}.bind(this));
				this.canPick = true;
			}
			else {
				let gemsToRemove = this.draw3.destroyChain();
				let destroyed = 0;
				gemsToRemove.forEach(function (gem) {

					this.poolArray.push(this.draw3.customDataOf(gem.row, gem.column))
					destroyed++;

					let cloud = this.add.sprite(this.draw3.customDataOf(gem.row, gem.column).x, this.draw3.customDataOf(gem.row, gem.column).y, "smoke1", 0)
					cloud.anims.play('smokeAnimation')
					this.tweens.add({
						targets: this.draw3.customDataOf(gem.row, gem.column),
						alpha: 0,
						duration: this.gameOptions.destroySpeed,
						callbackScope: this,
						ease: 'Bounce',
						onComplete: function (event, sprite) {
							destroyed--;
							if (destroyed == 0) {
								this.makeGemsFall();
							}
						}
					});
				}.bind(this));
			}
		}
	}
	makeGemsFall() {
		let moved = 0;
		let fallingMovements = this.draw3.arrangeBoardAfterChain();

		this.oSoundManager.playSound(this.oSoundManager.destroyedSound, false);
		fallingMovements.forEach(function (movement) {
			moved++;
			this.tweens.add({
				targets: this.draw3.customDataOf(movement.row, movement.column),
				y: this.draw3.customDataOf(movement.row, movement.column).y + movement.deltaRow * this.gameOptions.gemSize,
				duration: this.gameOptions.fallSpeed * Math.abs(movement.deltaRow),
				ease: 'Bounce',
				// callbackScope: this,
				onComplete: function () {
					moved--;
					this.score += 10;
					if (moved == 0) {
						if (this.score >= this.preScore + this.bonusDiff) {
							this.particleAnims();
							this.score += 50;
						}
						// console.log(this.score, this.targetScore);
						if (this.score >= this.targetScore) {
							this.oSoundManager.playSound(this.oSoundManager.levelWinSound, false);
							this.oSoundManager.stopSound(this.oSoundManager.backgroundSound, false);
							this.container_Level_Up.setVisible(true);

							this.gemsArr.forEach((gems) => gems.setVisible(false))
							this.arrowArr.forEach((gems) => gems.setVisible(false))
							this.container_game_play.setVisible(false);
							this.isGameStop = true;

							this.newLevelData();

							this.score = 0
							clearInterval(this.timeInterval);
						}
						this.txtScore.setText(`${this.score}`)
						this.canPick = true;
					}
				}
			})
		}.bind(this));
		let replenishMovements = this.draw3.replenishBoard();
		replenishMovements.forEach(function (movement) {
			moved++;
			let sprite = this.poolArray.pop();
			sprite.alpha = 1;
			sprite.y = this.gameOptions.boardOffset.y + this.gameOptions.gemSize * (movement.row - movement.deltaRow + 1) - this.gameOptions.gemSize / 2;
			sprite.x = this.gameOptions.boardOffset.x + this.gameOptions.gemSize * movement.column + this.gameOptions.gemSize / 2,
				sprite.setFrame(this.draw3.valueAt(movement.row, movement.column));
			this.draw3.setCustomData(movement.row, movement.column, sprite);
			this.tweens.add({
				targets: sprite,
				ease: 'Bounce',
				y: this.gameOptions.boardOffset.y + this.gameOptions.gemSize * movement.row + this.gameOptions.gemSize / 2,
				duration: this.gameOptions.fallSpeed * movement.deltaRow,
				callbackScope: this,
				onComplete: function () {
					moved--;
					this.score += 10;
					if (moved == 0) {
						if (this.score >= this.preScore + this.bonusDiff) {
							this.particleAnims();
							this.score += 50;
						}
						if (this.score >= this.targetScore) {
							this.oSoundManager.playSound(this.oSoundManager.levelWinSound, false);
							this.oSoundManager.stopSound(this.oSoundManager.backgroundSound, false);
							this.gemsArr.forEach((gems) => gems.setVisible(false))
							this.arrowArr.forEach((gems) => gems.setVisible(false))
							this.container_game_play.setVisible(false);
							this.isGameStop = true;

							this.container_Level_Up.setVisible(true);
							this.newLevelData();
							this.score = 0
							clearInterval(this.timeInterval);
						}
						this.txtScore.setText(`${this.score}`)
						this.preScore = this.score
						this.canPick = true;
					}
				}
			});
		}.bind(this))
	}

	particleAnims() {
		let particles = this.add.particles('particle');
		this.container_game_play.add(particles)

		// Create the firework emitter
		let emitter = particles.createEmitter({
			speed: { min: 100, max: 300 },
			angle: { min: 360, max: 0 },
			lifespan: { min: 400, max: 500 },  // 1-2 seconds
			gravityY: 30, // Particles fall downward
			scale: { start: 0.2, end: 0 }, // Shrink particles over time
			quantity: 100, // Number of particles per burst
			blendMode: 'ADD', // Makes the yellow color brighter
			on: false // Don't start emitting immediately
		});

		// Position the emitter where you want the firework to explode
		emitter.setPosition(200, 1873);

		// Explode once
		emitter.explode(200, 200, 1873);

		// Stop emitting after 2 seconds
		setTimeout(() => {
			emitter.stop();
		}, 1500);
	}


	gameTimer(duration) {
		let timer = duration, minutes, seconds;

		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		this.txtTimer.setText(`${minutes}.${seconds}`)

		timer--;

		this.timeInterval = setInterval(() => {

			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			this.txtTimer.setText(`${minutes}.${seconds}`)

			if (--timer < -1) {
				timer = duration;
			}

			if (timer < 0) {
				this.score = 0
				this.oSoundManager.stopSound(this.oSoundManager.destroyedSound, false);
				this.oSoundManager.stopSound(this.oSoundManager.backgroundSound, false);

				this.gemsArr.forEach((gems) => gems.setVisible(false))
				this.arrowArr.forEach((gems) => gems.setVisible(false))
				this.container_game_play.setVisible(false);
				this.isGameStop = true;

				clearInterval(this.timeInterval);
				this.oSoundManager.playSound(this.oSoundManager.levelWinSound, false);
				this.container_Time_Over.setVisible(true);
			}
		}, 1000);
	}

	displayPath() {
		let path = this.draw3.getPath();
		path.forEach(function (item) {
			this.arrowArray[item.row][item.column].visible = true;
			if (!this.draw3.isDiagonal(item.direction)) {
				this.arrowArray[item.row][item.column].setFrame(0);
				this.arrowArray[item.row][item.column].angle = 90 * Math.log2(item.direction);
			}
			else {
				this.arrowArray[item.row][item.column].setFrame(1);
				this.arrowArray[item.row][item.column].angle = 90 * (item.direction - 9 + ((item.direction < 9) ? (item.direction / 3) - 1 - item.direction % 2 : 0));
			}
		}.bind(this))
	}
	hidePath() {
		this.arrowArray.forEach(function (item) {
			item.forEach(function (subItem) {
				subItem.visible = false;
				subItem.angle = 0;
			})
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
