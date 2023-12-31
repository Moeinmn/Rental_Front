import axios from "axios";

export default async function getUserInfo (userId:any){
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
   let url = `${apiUrl}/v1/user/${userId}`
    try {
      const response = await axios.get(url);
  
      return response.data;
    } catch (error) {
     
      console.error('Error fetching current user:', error);
    
    }
}