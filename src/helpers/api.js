import axios from 'axios'

export const getRepo = async () => {
    try {
        const {data} = await axios.get(`https://api.github.com/users/rfkokt/repos?tab=repositories&=&type=&language=&sort=stargazers`)
        return data;
    } catch (e) {
        //
    }
}