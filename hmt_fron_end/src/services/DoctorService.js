import axios from 'axios';

const DOCTOR_API_BASE_URL = 'http://localhost:8082/api/doctors';

class DoctorService {
    getDoctors(){
        return axios.get(DOCTOR_API_BASE_URL);
    }

    createDoctor(doctor){
        return axios.post(DOCTOR_API_BASE_URL, doctor);
    }

    updateDoctor(doctor){
        return axios.put(DOCTOR_API_BASE_URL, doctor);
    }
}

export default new DoctorService();