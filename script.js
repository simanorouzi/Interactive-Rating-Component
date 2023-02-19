const firstPage = document.querySelector('#first-page');
const thankfulPage = document.querySelector('#rating-tankful');
const btnSubmit = document.querySelector('#submit');
const items = document.querySelectorAll('#rating a');
const rateVal = document.querySelector('#rate-val');

btnSubmit.addEventListener('click', function (e) {
  firstPage.classList.add('unshow');
  thankfulPage.classList.remove('unshow');
});

items.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    items.forEach((s) => {
      s.classList.remove('active');
    });
    e.target.classList.add('active');
    rateVal.innerHTML = e.target.dataset.value;
  });
});
