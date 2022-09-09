import { $host, $authHost } from '.';

export const addRating = async (deviceId, rating) => {
    const {data} = await $authHost.post('api/rating', {deviceId, rate: rating})
    return data
}

export const fetchRating = async (deviceId) => {
    const {data} = await $host.get('api/rating', {deviceId})
    return data
}