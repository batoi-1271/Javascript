// https://icanhazdadjoke.com/
const jokeHeading = document.querySelector('.joke-heading');
const jokeBtn = document.querySelector('.joke-button');
const joke = document.querySelector('.joke');

async function getJoke() {
    const reponse = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: 'application/json'
        }
    })
    const data = await reponse.json();
    return data;
}

async function handleClick() {
    joke.classList.add('is-loading')
    const response = await getJoke()
    jokeHeading.textContent = response.joke;
    joke.classList.remove('is-loading')

}
jokeBtn.addEventListener('click', handleClick)