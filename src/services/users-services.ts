import { apiLocal } from "./api";

const usersService = {
  loadUsuario: (user: any) => apiLocal.post("/login/", user),
  getUsuario: () => apiLocal.get("/users?role=admin&role=editor"),
  newUsuario: (user: any) => apiLocal.post("/users/", user),
  deleteUsuario: (id: any) => apiLocal.delete(`/users/${id}`),
  infoUsuario: (id: any) => apiLocal.get(`/users/${id}`),
};

export default usersService;
