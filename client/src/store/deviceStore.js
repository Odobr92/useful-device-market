import { makeAutoObservable } from 'mobx';

export default class deviceStore {
    constructor(){
        this._device = [
            {id: 1, name: "Xiaomi Mi Electric Scooter 1S", price: 20000, img: "https://giffun.ru/wp-content/uploads/2019/04/0-97.jpg", rating: 0 },
            {id: 2, name: "Bosch Serie 4 VitaFresh", price: 65000, img: "https://giffun.ru/wp-content/uploads/2019/04/0-97.jpg", rating: 0 },
            {id: 3, name: "Apple iPhone 12 Pro", price: 90000, img: "https://giffun.ru/wp-content/uploads/2019/04/0-97.jpg", rating: 0 }
        ]
        makeAutoObservable(this);
    }

    setDevice(device){
        this._device = device;
    }

    get device(){
        return this._device;
    }
}