'use strict';

document.getElementById("form").addEventListener('submit', async function (event) {
    event.preventDefault();

    const query = document.getElementById("query").value.trim();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    try {
        const url = query
            ? `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`
            : `https://api.chucknorris.io/jokes/random`;

        const response = await fetch(url);
        const data = await response.json();

        if (query && data.result) {

            data.result.forEach(joke => {
                const article = document.createElement("article");
                article.innerHTML = `<p>${joke.value}</p>`;
                resultsContainer.appendChild(article);
            });
        } else if (!query) {

            const article = document.createElement("article");
            article.innerHTML = `<p>${data.value}</p>`;
            resultsContainer.appendChild(article);
        } else {
            resultsContainer.innerHTML = `<p>No jokes found for "${query}".</p>`;
        }
    } catch (error) {
        resultsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        console.error(error);
    }
});
