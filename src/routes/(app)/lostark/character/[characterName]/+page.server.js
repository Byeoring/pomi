import { SECRET_API_KEY } from '$env/static/private';
import { PUBLIC_API_URL } from '$env/static/public';

export const load = async (/** @type {{ fetch: any; params: any }} */ serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent; //server load event에서 제공해주는 param을 통해서 우리는 url 알 수 있음
    const { characterName } = params;
    const url = PUBLIC_API_URL + characterName + '/siblings';

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

    return {
        characters
    };
}
