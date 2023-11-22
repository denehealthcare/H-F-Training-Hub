import axios from "axios";

const api = axios.create({

    baseURL: process.env.NEXT_PUBLIC_DASHBOARD_URL,
    auth: {
        username: "Admin-SG",
        password: "bVCt jTGA MtqX e4gD wv6y vO63"
    }

});

export default api;