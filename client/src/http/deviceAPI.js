import { $host, $authHost } from '.';
import jwt_decode from 'jwt-decode'

export const createDevice = async (email, password) => {
    const {data} = await $authHost.post('api/user/registration', {email, password, role: 'ADMIN'})
    return data
}

export const fetchDevice = async () => {
    const {data} = await $host.get('api/device')
    return data
}
