import axios from 'axios';

const DOCTOR_API_BASE_URL = 'http://localhost:8082/api/doctors';

class DoctorService {
    getDoctors(){
        return axios.get(DOCTOR_API_BASE_URL);
    }
}

export default new DoctorService();