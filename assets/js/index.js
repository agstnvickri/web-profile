const hambuger = document.querySelector('#hamburger');
hambuger.addEventListener("click", (e) => {
      const menu = document.querySelector('#navbar .menu');
      menu.classList.toggle('active');
})