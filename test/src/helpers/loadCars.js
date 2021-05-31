import axios from 'axios';

export const cars = async () => {

    const coches = [];
    await axios({
        method: 'get',
        url: `https://localhost:44352/api/cars`

    }).then(resp => {
        resp.data.forEach(element => {
            coches.push(element);
        });
    });

    return coches;
}

