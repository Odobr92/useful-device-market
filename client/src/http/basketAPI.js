import { $authHost } from '.';

export const addBasketDevice = async (deviceId) => {
    const {data} = await $authHost.post('api/basket/add', {deviceId})
    return data
}

export const delBasketDevice = async (deviceId) => {
    const {data} = await $authHost.post('api/basket/remove', {deviceId})
    return data
}

export const fetchBasketDevice = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}

export const setAmountBasketDevice = async (deviceId, amount) => {
    const {data} = await $authHost.post('api/basket/amount', {deviceId, amount})
    return data
}

export const fetchOneBasketDevice = async (deviceId) => {
    const {data} = await $authHost.get('api/basket/' + deviceId)
    return data
}