import axios from 'axios';

const API_URL = 'http://localhost:8080/planilla/';
class PlanillaService {
    getPlanilla() {
        return axios.get(API_URL);
    }
}

export default new PlanillaService();