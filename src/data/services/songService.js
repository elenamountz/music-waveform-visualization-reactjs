import axios from 'axios';
import constants from '../constants';

const srvBaseUrl = `${constants.baseUrl}/songs`;

const songService = {
  async findAll() {
    return axios.get(`${srvBaseUrl}`);
  },
  async getInfoById(id) {
    return axios.get(`${srvBaseUrl}/${id}/info`);
  },
  async getTrackById(id) {
    return axios.get(`${srvBaseUrl}/${id}/track`);
  },
  async upload(formData) {
    return axios.post(`${srvBaseUrl}/upload`, formData);
  }
};

export default songService;