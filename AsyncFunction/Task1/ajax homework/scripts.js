const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const btn = document.querySelector(".btn");


loadBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)

    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка')
      }
      return response.json()
    })
    .then(
      (data) =>

      (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
    )
    .catch((error) => {
      console.log(error.message)
      resultsContainer.innerHTML = `<div class="response-container">
    <p> <span>${error.message}</span><p>
</div>`
    })


});



btn.addEventListener('click', loadUsers);
function loadUsers(e) {
  e.preventDefault()
  axios.get('https://jsonplaceholder.typicode.com/users')


    .then((response) => {
      response.data.forEach(el => {
        resultsContainer.insertAdjacentHTML("beforeend", `<div class="response-container">
  <p> Имя: <span>${el.name}</span><p>
  <p> Фамилия: <span>${el.username}</span><p>
  <p> Email <span>${el.email}</span><p>
  <p> Телефон <span>${el.phone}</span><p>
</div>`
        )
      })
    })
    .catch((err) => {
      err = 'Ошибка'
      resultsContainer.innerHTML = `<div class="response-container">
    <p> <span>${err}</span><p>
</div>`

    })

}