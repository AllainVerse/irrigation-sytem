import axios from "axios";

export const getAuth = (callback) => {
    axios
    .get("http://localhost:3000/")
    .then((res) => {
        callback(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
};