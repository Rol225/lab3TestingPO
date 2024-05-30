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

    showSequence(){
        if(this.lamps.length <= 0) return;
        const self = this;
        this.lamps.forEach((lamp, index) => {
            setTimeout(() => {
                lamp.active();
            }, 1000 * index);
        });
        setTimeout(()=>{
            self.deActiveAllLamps();
        }, 1000 * this.lamps.length);
    }

    mixRandom() {
        for (let i = this.lamps.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.lamps[i], this.lamps[j]] = [this.lamps[j], this.lamps[i]];
        }
    }

    get colors(){return this._colors;}
    get lamps(){return this._lamps;}
}