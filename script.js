document.getElementById('submit').onclick = function (e) {
  location.href = 'thankfulPage.html';
};

document.getElementById('rating').getElementsByTagName('a').onclick = function (
  e
) {
  e.preventDefault();
  console.log('fsfsd');
};
