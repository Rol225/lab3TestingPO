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

        this.bindEventListeners();
    }

    bindEventListeners(){
        addEventListener('lampStateChange', event =>{
            const {color, state} = event.detail;
            this.lampStateChange(color, state);
        });
        addEventListener('gameStateMustChange', event =>{
            this._gamePlay = event.detail.status;
            this.buttonStart.disabled = !this._gamePlay;
        });
    }

    lampStateChange(color, state){
        if(!this.gamePlay) return;
        if(state) this._currentSequence.push(color);
        else this._currentSequence.pop();
        if(this.currentSequence.length > 0 && this.currentSequence.length === this.correctSequence.length)
            this.finishGame();
    }

    startGame(){
        this.lampCollection.deActiveAllLamps();
        this.lampCollection.mixRandom();
        this._currentSequence = [];
        this._correctSequence = this.lampCollection.getSequence();
        this.lampCollection.showSequence();
        this.buttonStart.disabled = true;
    }

    finishGame(){
        const self = this;
        const result = self.correctSequence.every((element, index) => element === self.currentSequence[index]);
        console.log(result ? "Вы прошли игру!" : "Не удача!");
        self.startGame();
    }

    get container(){return this._container;}
    get correctSequence(){return this._correctSequence;}
    get currentSequence(){return this._currentSequence;}
    get gamePlay(){return this._gamePlay;}
    get buttonStart(){return this._buttonStart;}
    get lampCollection(){return this._lampCollection;}
}