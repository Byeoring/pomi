import { SECRET_API_KEY } from '$env/static/private';
import { PUBLIC_API_URL } from '$env/static/public';
import {page} from "$app/stores";

export const load = async (/** @type {{ fetch: any; }} */ loadEvent) => {
    const { fetch } = loadEvent;
    const url = PUBLIC_API_URL + '/민엉만지는투영땔다쿤' + '/siblings';
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + SECRET_API_KEY,
        }
    });
    const characters = await response.json();
    characters.sort((/** @type {{ ItemAvgLevel: string; }} */ a, /** @type {{ ItemAvgLevel: string; }} */ b) => b.ItemAvgLevel.localeCompare(a.ItemAvgLevel));

    return {
        characters
    };
}