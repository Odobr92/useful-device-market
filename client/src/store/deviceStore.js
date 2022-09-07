import { makeAutoObservable } from 'mobx';

export default class deviceStore {
    constructor(){
        this._device = []
        this._page = 1
        this._totalCount = 0
        this._limit = 6
        makeAutoObservable(this);
    }

    setPage(page){
        this._page = page;
    }

    get page(){
        return this._page;
    }

    setTotalCount(totalCount){
        this._totalCount = totalCount;
    }

    get totalCount(){
        return this._totalCount;
    }

    setLimit(limit){
        this._limit = limit;
    }

    get limit(){
        return this._limit;
    }

    setDevice(device){
        this._device = device;
    }

    get device(){
        return this._device;
    }
}