import { makeAutoObservable } from 'mobx';

export default class brandStore {
    constructor(){
        this._brand = [];
        this._selectedBrend = {};
        makeAutoObservable(this);
    }

    setBrand(brand){
        this._brand = brand;
    }
    
    setSelectedBrend(brend){
        this._selectedBrend = brend;
    }

    get brand(){
        return this._brand;
    }

    get selectedBrend(){
        return this._selectedBrend;
    }
}