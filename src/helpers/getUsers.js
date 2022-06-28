import axios from "axios";

export const getUsers = async( user ) => {
    let response = null;
    const url = `https://api.github.com/search/users?q=${ user }`;

    try {
        response = await axios.get(url);
    } catch (error) {
        console.warn(error); // eslint-disable-line no-console
        return { 'error': error };
    }

    const usersData = response.data.items.map(item => ({
        avatar: item.avatar_url, 
        id: item.id,
        name: item.login,
        url: item.html_url,
    }))

    return usersData;
}
