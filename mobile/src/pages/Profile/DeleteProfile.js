import api from '../../services/api';



export default async function deleteProfile(id) {
    const baseURL = 'http://192.168.0.103:3333';
    return await api({
        url: `${baseURL}/clients/${id}`,
        method: "DELETE",
        data: id,
   });
}