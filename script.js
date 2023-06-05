const API_KEY = "5407b6c94f6f449785e4f76778f30844";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', () => fetchNews("India"));

async function fetchNews (query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = res.json();
    console.log(data);
}