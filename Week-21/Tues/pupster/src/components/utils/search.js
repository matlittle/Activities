import axios from 'axios';

export default {
  search: function randomDog() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  }
}

