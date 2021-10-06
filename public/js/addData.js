const body = document.querySelector('body');

body.addEventListener('click', (event) => {
  if (event.target.id === 'addCategory') {
    const locator = document.getElementById('categoryLocator');
    locator.innerHTML = '';
    const categoryForm = document.createElement('form');
    const nameInput = document.createElement('input');
    const descriptionInput = document.createElement('input');
    const submitCategory = document.createElement('button');
    nameInput.placeholder = 'Наименование';
    nameInput.name = 'nameInput';
    descriptionInput.placeholder = 'Описание';
    descriptionInput.name = 'descriptionInput';
    submitCategory.innerText = 'Добавить';
    categoryForm.appendChild(nameInput);
    // categoryForm.appendChild(descriptionInput);
    categoryForm.appendChild(submitCategory);
    locator.appendChild(categoryForm);

    categoryForm.addEventListener('submit', async (submitEvent) => {
      submitEvent.preventDefault();

      const response = await fetch('/add/addcategory', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: submitEvent.target.nameInput.value,
          // description: submitEvent.target.descriptionInput.value,
        }),
      });

      const error = await response.json().message;
      console.log(error);

      if (!error) {
        locator.innerHTML = '';
        locator.innerText = 'Категория добавлена';
      } else {
        locator.innerHTML = '';
        locator.innerText = `Не удалось добавить категорию.\n${error}`;
      }
    });
  }
  /* ======================= ======================== */

  /* ======================= ======================== */
  if (event.target.id === 'addItem') {
    const locator = document.getElementById('itemLocator');
    locator.innerHTML = '';
    const itemForm = document.createElement('form');
    const nameInput = document.createElement('input');
    const descriptionInput = document.createElement('input');
    const submitCategory = document.createElement('button');
    nameInput.placeholder = 'Наименование';
    nameInput.name = 'nameInput';
    descriptionInput.placeholder = 'Описание';
    descriptionInput.name = 'descriptionInput';
    submitCategory.innerText = 'Добавить';
    itemForm.appendChild(nameInput);
    itemForm.appendChild(descriptionInput);
    itemForm.appendChild(submitCategory);
    locator.appendChild(itemForm);

    itemForm.addEventListener('submit', async (submitEvent) => {
      submitEvent.preventDefault();

      const response = await fetch('/add/additem', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: submitEvent.target.nameInput.value,
          description: submitEvent.target.descriptionInput.value,
        }),
      });

      const error = await response.json().message;
      console.log(error);

      if (!error) {
        locator.innerHTML = '';
        locator.innerText = 'Предмет добавлен';
      } else {
        console.log('Не удалось добавить предмет.\n', error);
      }
    });
  }
});
