const amountInput = document.getElementById('usd-amount');
const currencySelect = document.getElementById('currency-select');
const resultDisplay = document.getElementById('converted-amount');

// Новый API для получения курсов валют
const API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

// Храним курсы валют
let rates = {};

// Получаем курсы валют при загрузке страницы
async function fetchRates() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    // Извлекаем нужные курсы из ответа API
    rates = {
      EUR: data.rates.EUR,
      GBP: data.rates.GBP,
      JPY: data.rates.JPY,
      CNY: data.rates.CNY,
      RUB: data.rates.RUB
    };

    // Обновляем результат
    updateResult();
  } catch (error) {
    resultDisplay.textContent = 'Ошибка загрузки курса';
    console.error('Ошибка API:', error);
  }
}

// Обновляем результат конвертации
function updateResult() {
  const amount = parseFloat(amountInput.value);
  const selectedCurrency = currencySelect.value;
  const rate = rates[selectedCurrency];

  if (isNaN(amount) || !rate) {
    resultDisplay.textContent = '= …';
    return;
  }

  const converted = amount * rate;
  resultDisplay.textContent = `= ${converted.toFixed(2)} ${selectedCurrency}`;
}

// Слушаем изменения в поле ввода и в выборе валюты
amountInput.addEventListener('input', updateResult);
currencySelect.addEventListener('change', updateResult);

// Загружаем курсы при старте
fetchRates();
