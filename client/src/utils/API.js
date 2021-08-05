import axios from 'axios';

export default {
    logIn: function (user) {
        return axios.post("/api/users/login", user)
    },
    register: function (user) {
        return axios.post("/api/users/register", user)
    },
    logOut: function () {
        return axios.post("/api/users/logout")
    },
    loanMoney: function (loan) {
        return axios.post("/api/loan/add", loan)
    },
    borrowMoney: function (money) {
        return axios.post("/api/borrow/add", money)
    },
    getLoan: function () {
        return axios.get("/api/loan/")
    },
    getBorrow: function() {
        return axios.get("/api/borrow/")
    }
}