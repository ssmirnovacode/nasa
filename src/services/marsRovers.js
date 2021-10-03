import { apiKey } from './apiKey';
import { dateConverter } from '../utils/converters';

const baseApiUrl = 'https://api.nasa.gov/mars-photos/api/v1';

class MarsRovers {

    async getRoverPhotosByDate(roverName, date) {

        const res = await fetch(`${baseApiUrl}/rovers/${roverName}/photos?earth_date=${dateConverter(date)}&api_key=${apiKey}`);

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