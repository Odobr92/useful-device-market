import { makeAutoObservable } from 'mobx';

export default class basketStore {
    constructor(){
        this._basketDevice = [{count: 0, rows: []}];
        makeAutoObservable(this);
    }

    setBasketDevice(basketDevice){
        this._basketDevice = basketDevice;
    }
    
    get basketDevice(){
        return this._basketDevice;
    }

}