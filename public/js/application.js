const changeContainer = document.querySelector('#change-container');

// const containCat = document.querySelector('.container-inner');
// if (containCat !== null) {
//   containCat.addEventListener('click', async (event) => {
//     if (event.target.name === 'Мебель') {
//       event.preventDefault();
//       const res = await fetch(`/items1/${event.target.id}`);
//       // const items = await res.json();
//     }
//     if (event.target.name === 'Предметы интерьера') {
//       event.preventDefault();
//       const res = await fetch(`/items2/${event.target.id}`);
//       // const items = await res.json();
//     }
//   });
// }

const buttonChangeData = document.querySelector('#yes');
if (buttonChangeData !== null) {
  buttonChangeData.addEventListener('click', (event) => {
    event.preventDefault();

    changeContainer.innerHTML = `
  <form method="POST" action="/new-data" id="change" required>
    <label>Введите текущий логин: <input type="text" name="oldLogin" placeholder=" old admin login" required></label>
    <input type="text" name="login" placeholder="admin login" required>
    <input type="password" name="password" placeholder="admin password" required>
    <button type="submit">Изменить учетные данные</button>
  </form>
  `;
  });
}

const sendNewData = document.querySelector('#change');
if (sendNewData !== null) {
  sendNewData.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { action, method } = event.target;

    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        oldLogin: event.target.oldLogin.value,
        login: event.target.login.value,
        password: event.target.password.value,
      }),
    });
    const result = await response.json();
  });
}
