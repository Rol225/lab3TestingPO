export class Lamp {
    color = '#cacaca';
    _el = document.createElement('div');
    _state = false;
    constructor(color) {
        if(typeof color !== "string") throw new Error('Должен быть цвет в формате строки');
        this.color = color;
        this.el.title = color;
        this.el.style.background = color;
        this.el.classList.add('lamp');
    }

    get el(){return this._el;}
    get state(){return this._state;}
    set color(value){
        this.color = (typeof value !== "string") ? value : this.color;
        this.el.style.background = this.color;
    }
}