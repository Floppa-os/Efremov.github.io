// Заглушка: в реальном проекте замените URL на API источников
const API_URLS = {
    news: 'https://newsapi.org/v2/top-headlines?country=ru&apiKey=ВАШ КЛЮЧ', // пример
    weather: 'https://api.openweathermap.org/data/2.5/weather?q=Ефремов&appid=ВАШ КЛЮЧ=metric&lang=ru',
    events: 'https://mock-api.com/efremov/events'
};

// Получение данных с API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        return null;
    }
}

// Экспорт функций для использования в main.js
export async function getNews() {
    return fetchData(API_URLS.news);
}

export async function getWeather() {
    return fetchData(API_URLS.weather);
}

export async function getEvents() {
    return fetchData(API_URLS.events);
}
