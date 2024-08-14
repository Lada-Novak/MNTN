document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.header__scroll a');
  const sections = document.querySelectorAll('.content__item, .header');
  const mainSection = document.querySelector('.scroll__box');

  //проверка нахождения данных элементов
  // console.log(document.querySelector('.scroll__box'));
  // console.log(document.querySelectorAll('.content__item'));
  // console.log(document.querySelectorAll('.header__scroll-link'));
  // })

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const stepLink = document.querySelector(`.header__scroll a[href="#${id}"]`);

      if (entry.isIntersecting) {
        steps.forEach(step => step.classList.remove('active'));
        stepLink.classList.add('active');
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(mainSection);
  sections.forEach(section => observer.observe(section));
});




window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.menu__btn').addEventListener('click', function(){
    document.querySelector('.menu__mobile').classList.toggle('menu__mobile--active')
    document.querySelector('.menu__btn').classList.toggle('active__burger')
    document.querySelector('.logo').classList.toggle('logo__active')
  })
});