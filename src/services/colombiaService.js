
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


