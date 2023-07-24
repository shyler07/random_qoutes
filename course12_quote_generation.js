//variables

let btn = document.querySelector('#new-quote');

let quotes = document.querySelector('.quote');
let author = document.querySelector('.author');

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quotes.innerText =  item.content;
      author.innerText = "- " +item.author;
    });
};


window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
