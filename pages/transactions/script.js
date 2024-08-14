import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { reload } from "../../lib/utills";
// import { getData } from "../../lib/http.request";


const tbody = document.querySelector("tbody");
const add_btn = document.querySelector('.add')
const localed = JSON.parse(localStorage.getItem('wallets'))

add_btn.onclick = () => {
    location.assign('/pages/addTransactions/')
}


Header()

reload([1, 2, 3], Table, tbody);
