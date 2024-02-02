// const URL = "https://cat-fact.herokuapp.com/facts";
// const btnfatch = document.querySelector("#btn");
// const para = document.querySelector("#fatch");



// const fatchdata = async()=> {
//     let respone = await fetch(URL)
//     let data = await respone.json();
//     console.log(data[0].text);
//     para.innerText = data[0].text

// };
// btnfatch.addEventListener("click",fatchdata);

const BASE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button")
const fromcurr = document.querySelector(".Form select");
const msg = document.querySelector(".msg")
const tocurr = document.querySelector(".To select");

for (let select of dropdown) {
    for (let currcode in countryList) {
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;
        if (select.name === "form" && currcode === "USD") {
            newoption.selected = "selected";

        } else if (select.name === "to" && currcode === "PKR") {
            newoption.selected = "selected";
        }
        select.append(newoption);
    }

    select.addEventListener("change", (evt) => {
        updateflage(evt.target);

    });
}

const updateflage = (elemet) => {
    let currcode = elemet.value;
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
    let img = elemet.parentElement.querySelector("img");
    img.src = newsrc;


}
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if (amtval === "" || amtval < 0) {
        amtval = 1;
        amount.value = "1";
       

        

       }
      // console.log(fromcurr.value, tocurr.value);
       const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
       let respone = await fetch(URL);
       let data = await respone.json();
       let rate =  data[tocurr.value.toLowerCase()]
        let finalamount = rate * amtval;
        msg.innerText = `${amtval} ${fromcurr.value} = ${finalamount} ${tocurr.value}`



})



