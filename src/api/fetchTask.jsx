import axios from "axios"; // use ES module import

export const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, // allows cookies to be sent
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status == 401) {
      // clear auth data
      localStorage.clear();

      // redirect to login
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

// named export
export const signup = async (data) => {
  const response = await api.post("/user/signup", data);
  return response;
};

export const fetchProduct = async () => {
  const response = await api.get("/product/get");
  return response.data;
};

export const storeProduct = async (data) => {
  const response = await api.post("/product/add", data);
  return response;
};


export const fetchClaimproducts = async () => {
  const response = await api.get('/product/my-claims')
  return response
}

