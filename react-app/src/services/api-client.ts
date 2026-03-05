import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'aa7e43cd674d41f2aacf819544930190'
    }
})