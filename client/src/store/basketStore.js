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

    setAmount(id, amount){
        const index = this._basketDevice.rows.findIndex((b) => b.id == id)
        this._basketDevice.rows[index].amount = amount;
    }

    removeBaskedDevice(id){
        this._basketDevice.rows = this._basketDevice.rows.filter((b) => b.id != id)
    }
}