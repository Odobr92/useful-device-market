import { makeAutoObservable } from 'mobx';

export default class brandStore {
    constructor(){
        this._brand = [
            {id:1, name: "Samsung"},
            {id:2, name: "Bosch"},
            {id:3, name: "Xiaomi"},
            {id:4, name: "Apple"}
        ]
        makeAutoObservable(this);
    }

    setBrand(brand){
        this._brand = brand;
    }

    get brand(){
        return this._brand;
    }
}