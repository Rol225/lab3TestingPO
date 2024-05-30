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
    active(){
        this.el.classList.add('active');
        this._state = true;
        this.postEventChange();
    }

    deActive(){
        this.el.classList.remove('active');
        this._state = false;
        this.postEventChange();
    }

    toggle(){
        this.el.classList.toggle('active');
        this._state = !this.state;
        this.postEventChange();
    }

    postEventChange(){
        dispatchEvent(new CustomEvent('lampStateChange', {
            detail: {color: this.color, state: this.state}
        }));
    }

    get el(){return this._el;}
    get state(){return this._state;}
    set color(value){
        this.color = (typeof value !== "string") ? value : this.color;
        this.el.style.background = this.color;
    }
}