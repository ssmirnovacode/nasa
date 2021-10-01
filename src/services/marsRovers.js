import { apiKey } from './apiKey';
export const baseApiUrl = 'https://api.nasa.gov/mars-photos/api/v1';

class MarsRovers {

    dateConverter(dateWithZeros) {
        let date;
        if (dateWithZeros[5] !== '0' && dateWithZeros[8] !== '0') {
            date = dateWithZeros;
        }
        else if (dateWithZeros[5] === '0' && dateWithZeros[8] !== '0') {
            date = dateWithZeros.slice(0,5) + dateWithZeros.slice(6);
        }
        else if (dateWithZeros[5] !== '0' && dateWithZeros[8] === '0') {
            date = dateWithZeros.slice(0,8) + dateWithZeros.slice(9);
        }
        else if (dateWithZeros[5] === '0' && dateWithZeros[8] === '0') {
            date = dateWithZeros.slice(0,5) + dateWithZeros.slice(6,8) + dateWithZeros.slice(9);
        }
        return date;
    }

    async getRoverPhotosByDate(roverName, date) {

        const res = await fetch(`${baseApiUrl}/rovers/${roverName}/photos?earth_date=${this.dateConverter(date)}&api_key=${apiKey}`);

        if (!res.ok) {
            throw new Error('Could not fetch data')
        }
        return await res.json(); // .photos -> []
    }

    async getRoverManifest(roverName) {
        const res = await fetch(`${baseApiUrl}/manifests/${roverName}/?api_key=${apiKey}`);

        if (!res.ok) {
            throw new Error('Could not fetch data')
        }
        return await res.json();
    }
};

export default MarsRovers;