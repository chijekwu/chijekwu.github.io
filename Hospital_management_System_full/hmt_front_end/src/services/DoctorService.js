import axios from 'axios';

const DOCTOR_API_BASE_URL = 'http://localhost:8082/api/doctors';

class DoctorService {
    getDoctors(){
        return axios.get(DOCTOR_API_BASE_URL);
    }

    createDoctor(doctor){
        return axios.post(DOCTOR_API_BASE_URL, doctor);
    }
    getDoctorById(docId){
        return axios.get(DOCTOR_API_BASE_URL + '/' + docId);
    }

    updateDoctor(docId, doctor){
        return axios.put(DOCTOR_API_BASE_URL + "/" + docId, doctor);
    }

    deleteDoctor(docId){
        return axios.delete(DOCTOR_API_BASE_URL + "/" + docId);
    }

    getDoctDetails(docId){
        return axios.get(DOCTOR_API_BASE_URL + '/' + docId);
    }
}

export default new DoctorService();