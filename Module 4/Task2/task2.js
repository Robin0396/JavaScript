'use strict'

document.getElementById("form").addEventListener('submit', async function series(event) {
    event.preventDefault()

    const query = document.getElementById("query").value.trim()

    try {
        const response = await fetch (`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
        const data = await response.json()

        data.forEach(series => {
            const show = series.show
            console.log(`Title: ${show.name}`)
            console.log(`Language: ${show.language}`)
        });
    } catch (error) {
        console.log(error.message)
    }
})