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
});
