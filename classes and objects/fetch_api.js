// fetch api provide an interfaace for fetching sending or receiving resource
// fetch basicaaly retuern the promise 
const URL = "https://cat-fact.herokuapp.com/facts";
let random_number = Math.floor(Math.random() * 5);
let facts_para = document.querySelector("#facts");
let get_fact = document.querySelector(".get_fact");

get_fact.addEventListener("click", (event) => {
    getting_facts()
    // console.log(getting_facts())
})

const getting_facts = async () => {

    let response = await fetch(URL);
    let data = await response.json();
    facts_para.innerHTML = data[random_number].text;
}
