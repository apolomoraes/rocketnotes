import axios from "axios";

// essa variável contém o baseUrl para reaproveitar a url, que é o endereço do servidor.
export const api = axios.create({
  baseURL: "http://localhost:3333"
});

