import { getAirports, getPresidents, getTouristicAttractions } from "../services/colombiaService";

export const fetchPresidents = async () => {
    try {
        const startTime = Date.now(); 
        const presidents = await getPresidents();
        const endTime = Date.now(); 
        const elapsedTime = endTime - startTime;  
        return {
            data: presidents,
            elapsedTime: `${elapsedTime} ms`
        };
    } catch (error) {
        throw new Error('Error fetching presidents: ' + error.message);
    }
};

export const fetchAirports = async () => {
    try {
        const startTime = Date.now(); 
        const airports = await getAirports();
        const endTime = Date.now();  
        const elapsedTime = endTime - startTime;  

        return {
            data: airports,
            elapsedTime: `${elapsedTime} ms`
        };
    } catch (error) {
        throw new Error('Error fetching airports: ' + error.message);
    }
};

export const fetchTouristicAttractions = async () => {
    try {
        const startTime = Date.now(); 
        const touristicAttractions = await getTouristicAttractions();
        const endTime = Date.now();  
        const elapsedTime = endTime - startTime; 

        return {
            data: touristicAttractions,
            elapsedTime: `${elapsedTime} ms`
        };
    } catch (error) {
        throw new Error('Error fetching touristic attractions: ' + error.message);
    }
};
