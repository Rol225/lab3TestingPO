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
});
