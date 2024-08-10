import React from 'react';
import { groupPresidentsByPoliticalParty, groupTouristicAttractionsByDepartmentsAndCities, groupAirportsByRegionAndDepartmentsAndCitiesAndType, groupAirportsByDepartmentsAndCities } from '../utils/AgroupEntities'; // Ajusta la ruta según tu estructura de proyecto

const Card = () => {

    // Función para manejar el clic en el botón de agrupación de presidentes
    const handleGroupPresidents = async () => {
        try {
            const result = await groupPresidentsByPoliticalParty();
            console.log('Grouped Presidents by Political Party:', result);
        } catch (error) {
            console.error('Error grouping presidents:', error);
        }
    };

    // Función para manejar el clic en el botón de agrupación de atracciones turísticas
    const handleGroupTouristicAttractions = async () => {
        try {
            const result = await groupTouristicAttractionsByDepartmentsAndCities();
            console.log('Grouped Touristic Attractions by Departments and Cities:', result);
        } catch (error) {
            console.error('Error grouping touristic attractions:', error);
        }
    };

    const handleGroupAirports = async () => {
        try {
            const result = await groupAirportsByDepartmentsAndCities();
            console.log('Grouped Airports by  Department and City:', result);
        } catch (error) {
            console.error('Error grouping airports:', error);
        }
    };


    // Función para manejar el clic en el botón de agrupación de aeropuertos
    const handleGroupAirportsByManyConditions = async () => {
        try {
            const result = await groupAirportsByRegionAndDepartmentsAndCitiesAndType();
            console.log('Grouped Airports by Region, Department, City, and Type:', result);
        } catch (error) {
            console.error('Error grouping airports:', error);
        }
    };

    return (
        <div className="card">
            <h1>Card Component</h1>
            <button onClick={handleGroupPresidents}>Group Presidents</button>
            <button onClick={handleGroupTouristicAttractions}>Group Touristic Attractions</button>
            <button onClick={handleGroupAirports}>Group Airports</button>
            <button onClick={handleGroupAirportsByManyConditions}>Group Airports by many conditions</button>
        </div>
    );
};

export default Card;
