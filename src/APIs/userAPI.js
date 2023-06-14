import requestClient from "./requestClient";

const userAPI = {
    register: (user) => {
        let url = "/register"
        return requestClient.post(url, user)
    },

    login: (user) => {
        let url = "/login"
        return requestClient.post(url, user)
    }

}

export default userAPI;