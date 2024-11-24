'use strict';
document.addEventListener('DOMContentLoaded', () => {

  const searchForm = document.getElementById('searchForm');


  if (!searchForm) {
    console.error('Search form not found!');
    return;
  }


  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = document.getElementById('query').value.trim();

    if (!query) {
      console.error('Please enter a valid TV series name.');
      return;
    }

    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      console.log('TV Series Search Results:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
});
