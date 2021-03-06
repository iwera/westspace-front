const API_URL = 'http://localhost:8080/api/ws/v1';
import axios from 'axios';

const api = {

    getMenu() {
        return axios.get(`${API_URL}/menu`);
    },

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

    getPage(slug) {
        return axios.get(`${API_URL}/page/${slug}`);
    },

    getArtists(letter) {
        return axios.get(`${API_URL}/artists/az/${letter}`);
    },

    getArtist(id) {
        return axios.get(`${API_URL}/artists/${id}`);
    }

}

export default api;
