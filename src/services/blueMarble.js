export const baseApiUrl = 'https://epic.gsfc.nasa.gov/api';

export const baseUrl = 'https://epic.gsfc.nasa.gov';

class BlueMarble {

    async getNaturalsByDate(date) {
        const res = await fetch(`${baseApiUrl}/natural/date/${date}`);

        if (!res.ok) {
            throw new Error('NASA images API is not available at the moment. Try again later.')
        }
        return await res.json();
    }

    async getLastAvailableDate() {
        const res = await fetch(`${baseApiUrl}/natural/available`);

        if (!res.ok) {
            throw new Error('NASA images API is not available at the moment. Try again later.')
        }
        const json = await res.json();
        return json.slice(-1);
    }

    async getEnhancedByDate(date) {
        const res = await fetch(`${baseApiUrl}/enhanced/date/${date}`);

        if (!res.ok) {
            throw new Error('NASA images API is not available at the moment. Try again later.')
        }
        return await res.json();
    }

    async getLastAvailableEnhancedDate() {
        const res = await fetch(`${baseApiUrl}/enhanced/available`);

        if (!res.ok) {
            throw new Error('NASA images API is not available at the moment. Try again later.')
        }
        const json = await res.json();
        return json.slice(0,1);
    }
    /* async getAvailableDates() {
        const res = await fetch(`${baseApiUrl}/natural/available`);

        if (!res.ok) {
            throw new Error('NASA images API is not available at the moment. Try again later.')
        }
        await res.json();
    } */

};

export default BlueMarble;