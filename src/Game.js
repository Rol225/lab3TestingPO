export class Game {
    _container=null;
    _correctSequence = [];
    _currentSequence = [];
    _buttonStart = document.createElement("button");
    _gamePlay = false;
    constructor(container) {
        this._container = (typeof container === 'string') ? document.querySelector(container) : (container instanceof HTMLElement) ? container : null;
        if(!container) throw new Error('Контейнер должен быть либо селектором, либо HTML-элементом');

        this.container.innerHTML = '';

        this.buttonStart.type = 'button';
        this.buttonStart.innerHTML = 'Start';
        this.container.appendChild(this.buttonStart);
    }



    get container(){return this._container;}
    get correctSequence(){return this._correctSequence;}
    get currentSequence(){return this._currentSequence;}
    get gamePlay(){return this._gamePlay;}
    get buttonStart(){return this._buttonStart;}
}