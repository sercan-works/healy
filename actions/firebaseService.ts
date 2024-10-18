import { get, ref } from "firebase/database";
import database from "./firebase";


 export const getData = async () => {
    try {
      const headerRef = ref(database, 'data'); // Get ref of 'data'
      const snapshot = await get(headerRef); // Get data of 'data'
      return snapshot.val();
    } catch (error) {
      console.error('Error getting data:', error);
      throw error;
    }
  };
  