import { getData, postData } from "../../lib/http.request";

const form = document.querySelector('form')

form.onsubmit = (e) => {
    e.preventDefault();
    submit(e.target);
}
