import {LampCollection} from "./LampCollection.js";

export class Game {
    _container=null;
    _lampCollection = new LampCollection();
    _correctSequence = [];
    _currentSequence = [];
    _buttonStart = document.createElement("button");
    _gamePlay = false;
    constructor(container) {
        this._container = (typeof container === 'string') ? document.querySelector(container) : (container instanceof HTMLElement) ? container : null;
        if(!container) throw new Error('Контейнер должен быть либо селектором, либо HTML-элементом');

        this.container.innerHTML = '';
        this.lampCollection.lamps.forEach(lamp => {this.container.appendChild(lamp.el);});

        this.buttonStart.type = 'button';
        this.buttonStart.innerHTML = 'Start';
        this.buttonStart.addEventListener('click', this.startGame.bind(this));
        this.container.appendChild(this.buttonStart);
    }

    startGame(){
        this.lampCollection.deActiveAllLamps();
        this.lampCollection.mixRandom();
        this._currentSequence = [];
        this._correctSequence = this.lampCollection.getSequence();
        this.lampCollection.showSequence();
        this.buttonStart.disabled = true;
    }

    get container(){return this._container;}
    get correctSequence(){return this._correctSequence;}
    get currentSequence(){return this._currentSequence;}
    get gamePlay(){return this._gamePlay;}
    get buttonStart(){return this._buttonStart;}
    get lampCollection(){return this._lampCollection;}
}