document.getElementById('add-item-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('item-name').value;
  const type = document.getElementById('item-type').value;
  const category = document.getElementById('item-category').value;
  const imageUrl = document.getElementById('item-image').value;

  const newItem = { name, type, category, imageUrl };
  
  const storedItems = JSON.parse(localStorage.getItem('dndCatalog') || '[]');
  storedItems.push(newItem);
  localStorage.setItem('dndCatalog', JSON.stringify(storedItems));

  renderCatalog();
  this.reset();
});

function renderCatalog() {
  const gallery = document.getElementById('item-gallery');
  gallery.innerHTML = '';
  
  const items = JSON.parse(localStorage.getItem('dndCatalog') || '[]');
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.type} - ${item.category}</p>
    `;
    gallery.appendChild(card);
  });
}

window.onload = renderCatalog;
