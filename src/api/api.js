import axios from 'axios'; //Libreria para hacer peticiones en HTTP para poder buscar información

export const api = axios.create({
    baseURL: "http://localhost:5001"
})

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url);
    setData(respuesta.data);
}