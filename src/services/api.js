import axios from "axios";

// essa variável contém o baseUrl para reaproveitar a url, que é o endereço do servidor.
export const api = axios.create({
  baseURL: "https://rocketnotes-api-ro0i.onrender.com"
});

