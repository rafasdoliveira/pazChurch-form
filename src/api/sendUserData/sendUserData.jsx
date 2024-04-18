import axios from "axios"

const SendUserData = async (url, formData) => {
  
    try {
        const response = await axios.post(url, formData, {
            headers: {
                'Content-Type': 'application/json'
            }, 
            
        }) 
        console.log({response})
        return response.data
    }
    catch (error) {
        console.log({error})
        throw error
    }
}

export default SendUserData
