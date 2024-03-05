const hambuger = document.querySelector('#hambuger');
hambuger.addEventListener("click", (e) => {
      const menu = document.querySelector('#navbar .menu');
      menu.classList.toggle('active');
})