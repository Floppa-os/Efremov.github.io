import { getNews, getWeather, getEvents } from './api.js';

// Отображение новостей
async function renderNews() {
    const newsData = await getNews();
    const newsList = document.getElementById('news-list');

    if (newsData && newsData.length > 0) {
        newsData.forEach(item => {
            const article = document.createElement('article');
            article.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.date} — ${item.summary}</p>
            `;
            newsList.appendChild(article);
        });
    } else {
        newsList.innerHTML = '<p>Нет новостей.</p>';
    }
}

// Отображение погоды
async function renderWeather() {
    const weatherData = await getWeather();
    const weatherInfo = document.getElementById('weather-info');

    if (weatherData) {
        weatherInfo.innerHTML = `
            <p><strong>Температура:</strong> ${weatherData.main.temp}°C</p>
            <p><strong>Погода:</strong> ${weatherData.weather[0].description}</p>
            <p><strong>Влажность:</strong> ${weatherData.main.humidity}%</p>
        `;
    } else {
        weatherInfo.innerHTML = '<p>Данные о погоде недоступны.</p>';
    }
}

// Отображение событий
async function renderEvents() {
    const eventsData = await getEvents();
    const eventsList = document.getElementById('events-list');

    if (eventsData && eventsData.length > 0) {
        eventsData.forEach(event => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>${event.name}</h3>
                <p>${event.date} — ${event.location}</p>
            `;
            eventsList.appendChild(div);
        });
    } else {
        eventsList.innerHTML = '<p>Ближайших событий нет.</p>';
    }
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderNews();
    renderWeather();
    renderEvents();
});
