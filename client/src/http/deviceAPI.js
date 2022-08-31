import { $host, $authHost } from '.';
import jwt_decode from 'jwt-decode'

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevice = async (typeId, brandId, limit, page) => {
    const {data} = await $host.get('api/device', {params: {brandId, typeId, limit, page}})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}


