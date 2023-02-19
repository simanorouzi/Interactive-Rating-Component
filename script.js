const btnSubmit = document.querySelector('#submit');
const items = document.querySelectorAll('#rating a');

console.log(items);

btnSubmit.addEventListener('click', function (e) {
  location.href = 'thankfulPage.html';
});

items.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    e.target.classList.toggle('active');
    console.log(e.target.dataset.value);
  });
});
