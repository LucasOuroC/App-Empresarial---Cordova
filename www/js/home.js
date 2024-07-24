function togglePurchases() {
  const purchases = document.querySelector('.recent-purchases');
  const button = document.querySelector('.toggle-button');

  if (purchases.classList.contains('expanded')) {
      purchases.style.maxHeight = '0';
      button.innerText = '';
  } else {
      purchases.style.maxHeight = purchases.scrollHeight + 'px';
      button.innerText = '';
  }

  purchases.classList.toggle('expanded');
}

function openMap() {
  window.location.href = "https://www.google.com/maps?q=Arena+Cajueiro,Feira+de+Santana,BA";
}