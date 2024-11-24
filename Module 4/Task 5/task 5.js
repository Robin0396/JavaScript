
'use strict'

async function joke(){
    try {
        const response = await fetch ('https://api.chucknorris.io/jokes/random')
        const joke = await response.json()
        console.log(joke.value)
    } catch (error) {
        console.log(error.message)
    }
}

joke()
