import { makeAutoObservable } from 'mobx';

export default class basketStore {
    constructor(){
        this._basketDevice = [{count: 0, rows: []}];
        makeAutoObservable(this);
    }

    setBasketDevice(basketDevice){
        this._basketDevice = basketDevice;
        this._basketDevice.rows = this._basketDevice.rows.sort();
    }
    
    get basketDevice(){
        return this._basketDevice;
    }

}