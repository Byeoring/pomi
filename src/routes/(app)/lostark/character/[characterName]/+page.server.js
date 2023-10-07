import { SECRET_API_KEY } from '$env/static/private';
import { PUBLIC_API_URL } from '$env/static/public';

export const load = async (/** @type {{ fetch: any; }} */ loadEvent) => {
    const { fetch } = loadEvent;
    const url = PUBLIC_API_URL + '/언노님' + '/siblings';
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + SECRET_API_KEY,
        }
    });

    const characters = await response.json();

    characters.sort((/** @type {{ ServerName: string; ItemAvgLevel: string; }} */ a, /** @type {{ ServerName: any; ItemAvgLevel: string; }} */ b) =>
        b.ServerName.localeCompare(a.ServerName) || parseFloat(b.ItemAvgLevel.replace(",", "")) - parseFloat(a.ItemAvgLevel.replace(",", ""))
    );

    console.log(characters);
    return {
        characters
    };
}
