'use strict'

document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');


    const form = document.createElement('form');
    form.id = 'search-form';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'search-input';
    input.placeholder = 'Search for a show';
    input.required = true;

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Search';

    form.appendChild(input);
    form.appendChild(button);
    body.appendChild(form);


    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'results';
    body.appendChild(resultsDiv);


    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const query = input.value.trim();


        resultsDiv.innerHTML = '';


        if (query) {
            try {

                const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();


                data.forEach(tvShow => {
                    const show = tvShow.show;


                    const article = document.createElement('article');


                    const nameElement = document.createElement('h2');
                    nameElement.textContent = show.name;
                    article.appendChild(nameElement);


                    const linkElement = document.createElement('a');
                    linkElement.href = show.url;
                    linkElement.target = '_blank';
                    linkElement.textContent = 'Details';
                    article.appendChild(linkElement);


                    if (show.image?.medium) {
                        const imageElement = document.createElement('img');
                        imageElement.src = show.image.medium;
                        imageElement.alt = show.name;
                        article.appendChild(imageElement);
                    }


                    if (show.summary) {
                        const summaryElement = document.createElement('div');
                        summaryElement.innerHTML = show.summary;
                        article.appendChild(summaryElement);
                    }


                    resultsDiv.appendChild(article);
                });

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            console.log('Please enter a search term.');
        }
    });
});
