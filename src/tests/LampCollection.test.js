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

    test('getSequence', () => {
        const sequence = lampCollection.getSequence();
        expect(sequence).toEqual(lampCollection.colors);
    });

    test('deActiveAllLamps', () => {
        lampCollection.lamps.forEach(lamp => lamp.active());
        lampCollection.deActiveAllLamps();
        lampCollection.lamps.forEach(lamp => expect(lamp.state).toBeFalsy());
    });

    test('showSequence', () => {
        lampCollection.showSequence();
        lampCollection.lamps.forEach((lamp, index) => {
            setTimeout(() => {
                expect(lamp.state).toEqual(true);
            }, 1000 * index);
        });
        setTimeout(()=>{
            lampCollection.lamps.forEach(lamp => expect(lamp.state).toEqual(false));
        }, 1000 * lampCollection.lamps.length + 1000);
    });
});
