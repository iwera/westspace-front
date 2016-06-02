const API_URL = 'http://localhost:8888/api/ws/v1';
import axios from 'axios';

const api = {

    getCurrentShows() {
        return axios.get(`${API_URL}/exhibition/current`);
    },

    getUpcomingShows() {
        return axios.get(`${API_URL}/exhibition/upcoming`);
    },

    getExhibitionYear(year) {
        return axios.get(`${API_URL}/exhibition?year=${year}&size=-1`);
    },

    getExhibition(id) {
        return axios.get(`${API_URL}/exhibition/${id}`);
    },

}

export default api;
