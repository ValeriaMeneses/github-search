import axios from "axios";

export const getRepos = async( repo ) => {
    let response = null;
    const url = `https://api.github.com/search/repositories?q=${ repo }`;

    try {
        response = await axios.get(url);
    } catch (error) {
        console.warn(error); // eslint-disable-line no-console
        return { 'error': error };
    }

    const reposData = response.data.items.map(item => ({
        avatar: item.owner.avatar_url,
        description: item.description, 
        id: item.id,
        name: item.full_name,
        url: item.git_url,
    }))

    return reposData;
}
