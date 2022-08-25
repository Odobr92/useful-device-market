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
        this._selectedType = {id:1, name:''};
        makeAutoObservable(this);
    }

    setType(type){
        this._type = type;
    }

    setSelectedType(type){
        this._selectedType = type;
    }

    get type(){
        return this._type;
    }

    get selectedType(){
        return this._selectedType;
    }
}