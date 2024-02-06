// FILEPATH: /Users/yudiz/Documents/HTML5 Projects/Mini-Games/Dungeon-Dash/tests/home.test.js

import Home from '../src/scenes/Home.js';
import Level from '../src/scenes/Level.js';
import TweenManager from '../src/managers/TweenManager.js';
import SoundManager from '../src/managers/SoundManager.js';

jest.mock('../src/scenes/Level.js');
jest.mock('../src/managers/TweenManager.js');
jest.mock('../src/managers/SoundManager.js');

describe('Home Scene', () => {
    let home;
    let mockScene;

    beforeEach(() => {
        mockScene = { 
            stop: jest.fn(), 
            start: jest.fn(),
            add: {
                image: jest.fn().mockReturnThis(), // Mock image method
            },
            scene: {
                stop: jest.fn(),
                start: jest.fn(),
            },
        };
        home = new Home(mockScene);
        home.editorCreate = jest.fn();
        home.btnPlayGame = { setInteractive: jest.fn(), on: jest.fn() }; // Mock Phaser game object
        home.create();
    });

    test('should call editorCreate', () => {
        expect(home.editorCreate).toHaveBeenCalled();
    });

    test('should create TweenManager and SoundManager', () => {
        expect(home.oTweenManager).toBeInstanceOf(TweenManager);
        expect(home.oSoundManager).toBeInstanceOf(SoundManager);
    });

    test('should animate logo gems', () => {
        expect(home.oTweenManager.logoAnimation).toHaveBeenCalledWith(home.blue_gem, 450);
        expect(home.oTweenManager.logoAnimation).toHaveBeenCalledWith(home.red_gem, 300);
        expect(home.oTweenManager.logoAnimation).toHaveBeenCalledWith(home.yellow_gem, 500);
        expect(home.oTweenManager.logoAnimation).toHaveBeenCalledWith(home.purple_gem, 250);
    });

    test('should play background sound', () => {
        expect(home.oSoundManager.playSound).toHaveBeenCalledWith(home.oSoundManager.backgroundSound, false);
    });

    test('should set btnPlayGame interactive', () => {
        expect(home.btnPlayGame.setInteractive).toHaveBeenCalled();
    });

    test('should handle btnPlayGame pointerover event', () => {
        const pointerOverCall = home.btnPlayGame.on.mock.calls.find(call => call[0] === 'pointerover');
        expect(pointerOverCall).toBeDefined();
        pointerOverCall[1](); // Trigger the event
        expect(home.oTweenManager.pointerOverTween).toHaveBeenCalledWith(home.btnPlayGame, 1);
        expect(home.oTweenManager.pointerOverTween).toHaveBeenCalledWith(home.txtPlayGame, 1);
    });

    test('should handle btnPlayGame pointerout event', () => {
        const pointerOutCall = home.btnPlayGame.on.mock.calls.find(call => call[0] === 'pointerout');
        expect(pointerOutCall).toBeDefined();
        pointerOutCall[1](); // Trigger the event
        expect(home.oTweenManager.pointerOutTween).toHaveBeenCalledWith(home.btnPlayGame, 1);
        expect(home.oTweenManager.pointerOutTween).toHaveBeenCalledWith(home.txtPlayGame, 1);
    });

    test('should handle btnPlayGame pointerdown event', () => {
        const pointerDownCall = home.btnPlayGame.on.mock.calls.find(call => call[0] === 'pointerdown');
        expect(pointerDownCall).toBeDefined();
        pointerDownCall[1](); // Trigger the event
        expect(home.oSoundManager.stopSound).toHaveBeenCalledWith(home.oSoundManager.backgroundSound, false);
        expect(home.oSoundManager.playSound).toHaveBeenCalledWith(home.oSoundManager.clickSound, false);
        expect(mockScene.scene.stop).toHaveBeenCalledWith('Home');
        expect(mockScene.scene.start).toHaveBeenCalledWith('Level');
    });
});