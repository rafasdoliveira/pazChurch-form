import axios from 'axios' 

const fetchAddressByCep = async (cep) => {

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const data = response.data
        console.log({data})
        
        return data
    }
    catch (error) {
        console.log({error})
    }
}
export default fetchAddressByCep
