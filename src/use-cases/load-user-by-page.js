import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";
/**
 * 
 * @param {Number} page 
 * @param {Promise<User[]>} //regresa arreglo de usuario
 */

export const loadUsersByPage = async(page = 1) => {
      
     try {
          //  const res = await fetch(`http://localhost:3001/users?page=${page}`);
          const url = `${import.meta.env.VITE_BASE_URL}/users?page=${page}`;
          const red = await fetch(url);
           if (!red.ok) {
             throw new Error(`HTTP error! status: ${red.status}`);
           }
           const data = await red.json();
           const users = data.map(localhostUserToModel);
           return users;
          
         } catch (error) {
           console.error('Error fetching users:', error);
        
    }
};

