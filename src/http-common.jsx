import axios from "axios";

const http = axios.create({
  baseURL: "https://sherote-homework-2.onrender.com/",
  headers: {
    "Content-type": "application/json",
  },
});

class TutorialDataService {
  getAll() {
    return http.get("/shelters");
  }

  getById(id) {
    return http.get(`/shelter/${id}`);
  }

  update(id, data) {
    return http.put(`/shelter/${id}`, data);
  }

  delete(id) {
    return http.delete(`/shelter/${id}`);
  }
  create(data) {
    return http.post("/shelter", data);
  }
}

export default new TutorialDataService();
