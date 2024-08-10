/**
 * return a list of presidents from the colombia API.
 * 
 * @async
 * @function getPresidents
 * @returns {Promise<Object[]|null>} Return a array of presidents if the response is successful, otherwise return null.
 * @throws {Error} throw an error if the response is unsuccessful.
 */
export const getPresidents = async () => {
    try {
        const response = await fetch('https://api-colombia.com/api/v1/President');
        if (!response.ok) {
            throw new Error('Error fetching presidents');
        }
        const presidents = await response.json();
        return presidents;
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * return a list of touristic attractions from the colombia API
 * 
 * @async
 * @function getTouristicAttractions
 * @returns {Promise<Object[]|null>} Return a array of touristic attractions  if the response is successful, otherwise return null.
 * @throws {Error} throw an error if the response is unsuccessful.
 */
export const getTouristicAttractions = async () => {
    try {
        const response = await fetch('https://api-colombia.com/api/v1/TouristicAttraction');
        if (!response.ok) {
            throw new Error('Error fetching touristic attractions');
        }
        const touristicAttractions = await response.json();
        return touristicAttractions;
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * return a list of airports from the colombia API
 * 
 * @async
 * @function getTouristicAttractions
 * @returns {Promise<Object[]|null>} Return a array of airports if the response is successful, otherwise return null.
 * @throws {Error} throw an error if the response is unsuccessful.
 */
export const getAirports = async () => {
    try {
        const response = await fetch('https://api-colombia.com/api/v1/Airport');
        if (!response.ok) {
            throw new Error('Error fetching airports');
        }
        const airports = await response.json();
        return airports;
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * Return the name of a department from the Colombia API
 * 
 * @async
 * @function getDepartmentById
 * @param {string|number} id - The ID of the department to fetch.
 * @returns {Promise<string|null>} Return the name of the department if the response is successful, otherwise return null.
 * @throws {Error} Throws an error if the response is unsuccessful.
 */
export const getDepartmentById = async (id) => {
    try {
        const response = await fetch(`https://api-colombia.com/api/v1/Department/${id}`);
        if (!response.ok) {
            throw new Error('Error fetching department');
        }
        const department = await response.json();
        return department.name;
    } catch (error) {
        console.error(error);
        return null;
    }
}


/**
 * Return the name of a department from the Colombia API
 * 
 * @async
 * @function getDepartmentById
 * @param {string|number} id - The ID of the Region to fetch.
 * @returns {Promise<string|null>} Return the name of the region if the response is successful, otherwise return null.
 * @throws {Error} Throws an error if the response is unsuccessful.
 */
export const getRegionById = async (id) => {
    try {
        const response = await fetch(`https://api-colombia.com/api/v1/Region/${id}`);
        if (!response.ok) {
            throw new Error('Error fetching department');
        }
        const department = await response.json();
        return department.name;
    } catch (error) {
        console.error(error);
        return null;
    }
}


