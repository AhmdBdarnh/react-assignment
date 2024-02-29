import axios from 'axios';

const http = axios.create({
    baseURL: 'https://sherote-homework-2.onrender.com/',
  headers: {
    'Content-type': 'application/json'
  }
});

class TutorialDataService {
  getAll() {
    return http.get("/shelters");
  }

  getById(id) {
    return http.get(`/shelter/${id}`);
  }

//   create(data) {
//     return http.post("/tutorials", data);
//   }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

}

export default new TutorialDataService();
