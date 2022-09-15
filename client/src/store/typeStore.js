import { makeAutoObservable } from 'mobx';

export default class typeStore {
    constructor(){
        this._type = []
        this._selectedType = {};
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