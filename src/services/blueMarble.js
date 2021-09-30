export const baseApiUrl = 'https://epic.gsfc.nasa.gov/api';

export const baseUrl = 'https://epic.gsfc.nasa.gov';

class BlueMarble {

   /*  async getAllNaturals() {
        const res = await fetch(`${baseApiUrl}/natural`);

        if (!res.ok) {
            throw new Error('Could not fetch data')
        }
        return await res.json();
    } */

    async getNaturalsByDate(date) {
        const res = await fetch(`${baseApiUrl}/natural/date/${date}`);

        if (!res.ok) {
            throw new Error('Could not fetch data')
        }
        return await res.json();
    }

    async getLastAvailableDate() {
        const res = await fetch(`${baseApiUrl}/natural/available`);

        if (!res.ok) {
            throw new Error('Could not fetch data')
        }
        const json = await res.json();
        return json.slice(-1);
    }
};

export default BlueMarble;