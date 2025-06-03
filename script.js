let cartCount = 0;

function addToCart(productName, price) {
  cartCount++;
  document.getElementById("cart").innerText = `🛒 Товаров: ${cartCount}`;
  
  alert(`"${productName}" добавлен в корзину за $${price}`);
  
  // Отправляем данные обратно в бота
  if (window.Telegram && window.Telegram.WebApp) {
    Telegram.WebApp.sendData(`Пользователь добавил "${productName}" за $${price}`);
  }
}