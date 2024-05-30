import {expect, describe, test, beforeEach, afterEach} from "vitest";

import { Game } from '../Game';

describe('Game', () => {
    let game;

    beforeEach(() => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        game = new Game(container);
    });

    afterEach(() => {
        document.body.innerHTML = '';
        game = null;
    });

    test('constructor', () => {
        expect(game.container).toBeInstanceOf(HTMLElement);
    });

    test('startGame', () => {
        game.lampCollection.lamps.forEach(lamp => lamp.active());
        game.startGame();
        expect(game.currentSequence.length).toBe(0);
        expect(game.correctSequence.length).toBeGreaterThan(0);
        game.lampCollection.lamps.forEach(lamp => expect(lamp.state).toBeFalsy());
    });

    test('finishGame', () => {
        game.startGame();
        const correctSequence = game.correctSequence;
        game._currentSequence = [...correctSequence];
        game.finishGame();
        expect(game.correctSequence.length).toBeGreaterThan(0);
        expect(game.currentSequence.length).toBe(0);
        game.currentSequence.push('wrongColor');
        game.finishGame();
    });

    test('lampStateChange', () => {
        game._gamePlay = true;
        game.lampStateChange("orange", true);
        console.log(game._currentSequence)
        expect(game._currentSequence.includes("orange")).toBeTruthy();
        game.lampStateChange("orange", false);
        expect(game._currentSequence.includes("orange")).toBeFalsy();
        game._gamePlay = false;
    });

    test('bindEventListeners gameStateMustChange', () => {
        const event = new CustomEvent('gameStateMustChange', { detail: { status: true } });
        dispatchEvent(event);
        expect(game.gamePlay).toBeTruthy();
        expect(game.buttonStart.disabled).toBeFalsy();
        event.detail.status = false;
        dispatchEvent(event);
        expect(game.gamePlay).toBeFalsy();
        expect(game.buttonStart.disabled).toBeTruthy();
    });
});
