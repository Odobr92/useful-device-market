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
    
    setSelectedBrand(brend){
        this._selectedBrend = brend;
    }

    get brand(){
        return this._brand;
    }

    get selectedBrand(){
        return this._selectedBrend;
    }
}