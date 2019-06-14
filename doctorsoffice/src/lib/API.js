import axios from 'axios';

const API_CLIENTS = 'http://localhost:8080/doctorsoffice/client';
const API_APPOINTMENTS = 'http://localhost:8080/doctorsoffice/appointment';
const API_FAMILYDOCTORS = 'http://localhost:8080/doctorsoffice/familydoctor';

export default {
  getClients() {
    return axios.get(API_CLIENTS).then(response => response.data);
  },
  getAppointments() {
    return axios.get(API_APPOINTMENTS).then(response => response.data);
  },
  getFamilyDoctors() {
    return axios.get(API_FAMILYDOCTORS).then(response => response.data);
  }
}
