import { getAirports, getDepartmentById, getPresidents, getRegionById, getTouristicAttractions } from "../services/colombiaService"

export const groupPresidentsByPoliticalParty =  async () =>{
    try{
        const presidents = await getPresidents();

        const groupedData = {}

        for(const president of presidents){
            if(!groupedData[president.politicalParty]){
                groupedData[president.politicalParty] = {
                    presidentsList : [],
                    count : 0
                }
            }
            groupedData[president.politicalParty].presidentsList.push(president);
            groupedData[president.politicalParty].count += 1;
        }
        const sortedParties = Object.entries(groupedData)
            .map(([politicalParty, {presidentsList,count}]) => ({ politicalParty, presidentsList,count }))
            .sort((a, b) => b.count - a.count);
        
        return sortedParties;

    }
    catch(error){
        throw new Error('error agrouping presidents by political party' + error.message)
    }
} 


export const groupTouristicAttractionsByDepartmentsAndCities = async () => {
    try {

        const touristicAttractions = await getTouristicAttractions();
        const groupedData = {};

        for (const touristicAttraction of touristicAttractions) {
            const departmentId = touristicAttraction.city.departmentId;
            const departmentName = await getDepartmentById(departmentId);
            const cityName = touristicAttraction.city.name;

            if (!groupedData[departmentName]) {
                groupedData[departmentName] = {};
            }

            if (!groupedData[departmentName][cityName]) {
                groupedData[departmentName][cityName] = {
                    touristicAttractionNames: [touristicAttraction],
                    count : 1
                };
            } else {
                groupedData[departmentName][cityName].touristicAttractionNames.push(touristicAttraction)
                groupedData[departmentName][cityName].count += 1;
                };
            }
        return groupedData;
            
    } catch (error) {
        throw new Error('Error grouping touristic attractions by department and city: ' + error.message);
    }
}


export const groupAirportsByDepartmentsAndCities = async () => {
    try {

        const airports = await getAirports();
        const groupedData = {};

        for (const airport of airports) {
            const departmentName = airport.department.name;
            const cityName = airport.city.name;

            if (!groupedData[departmentName]) {
                groupedData[departmentName] = {};
            }

            if (!groupedData[departmentName][cityName]) {
                groupedData[departmentName][cityName] = {
                    airportsList: [airport],
                    count : 1
                };
            } else {
                groupedData[departmentName][cityName].airportsList.push(airport)
                groupedData[departmentName][cityName].count += 1;
                };
            }
        return groupedData;
            
    } catch (error) {
        throw new Error('Error grouping airports by department and city: ' + error.message);
    }
}



export const groupAirportsByRegionAndDepartmentsAndCitiesAndType = async () => {
    try {
        const airports = await getAirports();
        const groupedData = { "region": {} };

        for (const airport of airports) {
            const departmentName = airport.department.name;
            const cityName = airport.city.name;
            const regionId = airport.department.regionId;
            const regionName = await getRegionById(regionId);
            const airportType = airport.type; 

            if (!groupedData["region"][regionName]) {
                groupedData["region"][regionName] = { "department": {} };
            }

            if (!groupedData["region"][regionName]["department"][departmentName]) {
                groupedData["region"][regionName]["department"][departmentName] = { "city": {} };
            }

            if (!groupedData["region"][regionName]["department"][departmentName]["city"][cityName]) {
                groupedData["region"][regionName]["department"][departmentName]["city"][cityName] = { "type": {} };
            }

            if (!groupedData["region"][regionName]["department"][departmentName]["city"][cityName]["type"][airportType]) {
                groupedData["region"][regionName]["department"][departmentName]["city"][cityName]["type"][airportType] = 0;
            }

            groupedData["region"][regionName]["department"][departmentName]["city"][cityName]["type"][airportType] += 1;
        }

        return groupedData;
    } catch (error) {
        throw new Error('Error grouping airports by region, department, city, and type: ' + error.message);
    }
};