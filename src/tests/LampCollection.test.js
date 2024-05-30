import {expect, describe, test, beforeEach, afterEach} from "vitest";
import {LampCollection} from "../LampCollection.js";
import {Lamp} from "../Lamp.js";

describe('LampCollection', () => {
    let lampCollection;

    beforeEach(() => {
        lampCollection = new LampCollection();
    });

    afterEach(() => {
        lampCollection = null;
    });

    test('constructor', () => {
        expect(lampCollection.lamps.length).toBe(15);
        expect(lampCollection.lamps[0]).toBeInstanceOf(Lamp);
        expect(lampCollection.lamps[0].color).toBe('red');
        expect(lampCollection.lamps[1]).toBeInstanceOf(Lamp);
        expect(lampCollection.lamps[1].color).toBe('orange');
    });
});
