import { makeAutoObservable } from 'mobx';

export default class brandStore {
    constructor(){
        this._brand = [
            {id:1, name: "Samsung"},
            {id:2, name: "Bosch"},
            {id:3, name: "Xiaomi"},
            {id:4, name: "Apple"}
        ];
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