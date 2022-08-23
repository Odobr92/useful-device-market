import { makeAutoObservable } from 'mobx';

export default class typeStore {
    constructor(){
        this._type = [
            {id: 1,	name: "Электросамокаты"},
            {id: 3,	name: "Велосипеды"},
            {id: 4,	name: "Самокаты"},
            {id: 5,	name: "Холодильники"},
            {id: 6,	name: "Телефоны"}
        ]
        makeAutoObservable(this);
    }

    setType( type){
        this._type = type;
    }

    get type(){
        return this._type;
    }
}