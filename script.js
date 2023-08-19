let url='https://docs.google.com/spreadsheets/d/1iVfL4zRlxN7Sxs4z69Uz0wP-0rGN1YAdUg0i0uiuO9A/export?format=csv'

async function data(){
    await fetch(url).then(result => result.text()).then(csvtext=> {
         csv().fromString(csvtext).then(final=>htmlfunction(final));
    })
}

data()

setInterval(() => {
    data()
}, 10000);


let displayDataElement=document.querySelector('.third_div')


function htmlfunction(data){
    let string=" ";
    for (let i = 0; i < data.length; i++) {
      string+=` <div class="display_flex">
      <p>${data[i].s_no}</p>
      <p>${data[i].Room_No}</p>
      <p>${data[i].Ward_No}</p>
      <p>${data[i].Unit_Name}</p>
      <p>${data[i].Procedure}</p>
      <p>${data[i].Staff}</p>
  </div>`
    }
    displayDataElement.innerHTML=string;

}
let dateDisplay = document.querySelector("#date")
let temp = document.querySelector("#temp")
let weather = document.querySelector("#weather")
let weatherImg = document.querySelector("#weather img")
let currrentdate = new Date()
let days = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July','Aug', 'Sep', 'Oct', 'Nov', 'Dec']
display(currrentdate.getDate(), currrentdate.getDay(), currrentdate.getMonth())
function display(date,day,month) {
    console.log(date,day,month)
    dateDisplay.innerText = `${days[day]} , ${months[month]}  ${date}`
}