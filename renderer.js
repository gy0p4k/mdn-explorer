const scraper = require('google-search-scraper');
const resultContainer = document.querySelector('.result');

const search = () => {
    let query = document.querySelector('.searchbar').value + 'site:developer.mozilla.org';
    resultContainer.innerHTML = '';
    scraper.search({query: query, limit: 10}, function(err, url, meta) {
        if(err) throw err;
        handleSearch(url, meta)
      });
}

const handleSearch = (url, meta) => {
    addResult(url, meta)
}

const resultClickHandler = (event) => {
    console.log(event.target.classList[1]);
}

const addResult = (url, meta) => {
    let result = document.createElement('div');
    let title = document.createElement('a');
    let description = document.createElement('p');
    title.innerText = meta.title;
    title.classList = 'title'
    description.innerText = meta.desc;
    description.classList = 'desc ' + url;
    result.appendChild(title);
    result.appendChild(description);
    result.classList = 'result ' + url;
    result.addEventListener('click', resultClickHandler)
    resultContainer.appendChild(result)
}


(() => {
    document.querySelector('.searchbar').addEventListener('keydown', search);
})()
