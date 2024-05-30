import {expect, describe, test, beforeEach, afterEach} from "vitest";
import {Lamp} from "../Lamp.js";

describe('Lamp', () => {
    let lamp;

    beforeEach(() => {
        lamp = new Lamp('#ff0000');
        document.body.appendChild(lamp.el);
    });

    afterEach(() => {
        document.body.removeChild(lamp.el);
    });

    test('constructor def color', () => {
        expect(lamp.color).toBe('#ff0000');
        expect(lamp.el.classList.contains('lamp')).toBeTruthy();
        expect(lamp.el.style.background === lamp.color).toBeTruthy();
    });

    test('active', () => {
        lamp.active();
        expect(lamp.state).toBeTruthy();
        expect(lamp.el.classList.contains('active')).toBeTruthy();
    });

    test('deActive', () => {
        lamp.deActive();
        expect(lamp.state).toBeFalsy();
        expect(lamp.el.classList.contains('active')).toBeFalsy();
    });

    test('toggle', () => {
        expect(lamp.state).toBeFalsy();
        expect(lamp.el.classList.contains('active')).toBeFalsy();
        lamp.toggle();
        expect(lamp.state).toBeTruthy();
        expect(lamp.el.classList.contains('active')).toBeTruthy();
        lamp.toggle();
        expect(lamp.state).toBeFalsy();
        expect(lamp.el.classList.contains('active')).toBeFalsy();
    });

    test('set color', () => {
        lamp.color = '#00ff00';
        expect(lamp.color).toBe('#00ff00');
    });
});


