import {Lamp} from "./Lamp.js";
export class LampCollection {
    _lamps = [];
    _colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'aquamarine', 'white', 'gray', 'brown', 'burlywood', 'chocolate', 'cornflowerblue', 'teal'];
    constructor() {
        this.colors?.forEach(color => {this.lamps.push(new Lamp(color));});
    }

    getSequence(){
        return this.lamps?.map(lamp => lamp.color) ?? [];
    }

    deActiveAllLamps() {
        this.lamps?.forEach(lamp => {lamp.deActive();});
    }

    get colors(){return this._colors;}
    get lamps(){return this._lamps;}
}