// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const scraper = require('google-search-scraper');
const resultContainer = document.querySelector('.result');

console.log("hello")

const search = () => {
    let query = document.querySelector('.searchbar').value
    scraper.search({query: query, limit: 10}, (err, url, meta) => {
        if(err) throw err;
        handleSearch(url, meta)
      });
}

const handleSearch = (url, meta) => {
    if (resultContainer.childNodes.length > 10) {
        resultContainer.innerHTML = '';
    } else {
        addResult(meta)
    }
}


const addResult = (meta) => {
    let result = document.createElement('div');
    let title = document.createElement('a');
    let description = document.createElement('p');
    title.innerText = meta.title;
    title.classList = 'title'
    description.innerText = meta.desc;
    description.classList = 'desc'
    result.appendChild(title);
    result.appendChild(description);
    result.classList = 'result';
    resultContainer.appendChild(result)
}


(() => {
    document.querySelector('.searchbar').addEventListener('keydown', search);
})()
