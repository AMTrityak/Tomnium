import axios from 'axios';

const URL_PRODUCTS = '/products';
const URL_PRODUCT_ID = '/product';
const URL_LOGIN = '/user';
const URL_CREATE_PRODUCT = '/product/new';
const URL_TOKEN = '/login';

const fetchProducts = () => {
    return axios.get(URL_PRODUCTS)
};

const fetchProductById = (id) => {
    return axios.get(`${URL_PRODUCT_ID}/${id}`)
};

const postRegistration = ({ username, password }) => {
    const config = {
        method: 'post',
        url: URL_LOGIN,
        data: {
            username: username,
            password: password
        },
        headers: {
            'content-type': 'application/json'
        }
    };

    return axios(config)
};

const postCreateProduct = ({ name, price, description, createBy }) => {
    const config = {
        method: 'post',
        url: URL_CREATE_PRODUCT,
        data: {
            name: name,
            price: price,
            description: description,
            createBy: createBy
        },
        headers: {
            'content-type': 'application/json'
        }
    };

    return axios(config)
};

const loginToken =({username, password}) => {
  const config = {
      method: 'post',
      url: URL_TOKEN,
      data: {
          username: username,
          password: password,
      },
      headers: {
          'content-type': 'application/json'
      }
  };

  return axios(config)
};

export function setToken(token) {
    // apiClient.defaults.headers.Authorization = `Bearer ${header}`;
    localStorage.setItem('authHeader', token)
}

export default {fetchProducts, fetchProductById, postRegistration, postCreateProduct, loginToken, setToken};