import React from 'react';

function App() {
  const apartments = [
    {
      id: 1,
      title: 'Уютная квартира в центре',
      price: '2000 руб./сутки',
      location: 'Центральный район',
      bedrooms: 2,
      bathrooms: 1,
      area: '60 кв. м',
      image: 'https://via.placeholder.com/500'
    },
    {
      id: 2,
      title: 'Современная студия',
      price: '1500 руб./сутки',
      location: 'Пригород',
      bedrooms: 1,
      bathrooms: 1,
      area: '40 кв. м',
      image: 'https://via.placeholder.com/500'
    },
  ];

  return (
    <div className="app">
      <header>

        <div className="logo">Логотип</div>

        <div className="buttons">
          <button>Вход</button>
          <button>Сдать жилье</button>
        </div>
      </header>

      <main>
  <div className="search">
    <select name="city" id="city">
      <option value="">Выберите город</option>
      <option value="moscow">Москва</option>
      <option value="saint-petersburg">Санкт-Петербург</option>
    </select>
    <input type="date" name="checkInDate" id="checkInDate" placeholder="Дата заезда" />
    <input type="date" name="checkOutDate" id="checkOutDate" placeholder="Дата выезда" />
    <input type="number" name="guests" id="guests" placeholder="Количество гостей" />
    <button>Поиск</button>
  </div>

  <h2>Доступные квартиры</h2>
  <div className="apartments">
    {apartments.map(apartment => (
      <div key={apartment.id} className="apartment">
        <img src={apartment.image} alt={apartment.title} />
        <div className="details">
          <h3>{apartment.title}</h3>
          <p><strong>Цена:</strong> {apartment.price}</p>
          <p><strong>Местоположение:</strong> {apartment.location}</p>
          <p><strong>Количество спален:</strong> {apartment.bedrooms}</p>
          <p><strong>Количество ванных комнат:</strong> {apartment.bathrooms}</p>
          <p><strong>Площадь:</strong> {apartment.area}</p>
        </div>
      </div>
    ))}
  </div>
</main>


      <footer>
        <h2>А тут подвал</h2>
      </footer>
    </div>
  );
}

export default App;
