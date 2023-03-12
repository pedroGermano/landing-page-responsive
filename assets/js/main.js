const nav_menu = document.querySelector('#nav_menu');

const toggle_btn = document.querySelector('#toggle_nav');

function showMenu() {
  nav_menu.classList.toggle('show');

  document.body.classList('stop_scroll');
}

toggle_btn.addEventListener('click', showMenu);

gsap.from('.logo', {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

gsap.from('.nav_item', {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.2,
});

gsap.from('.toggle_nav_btn', {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});

gsap.from('.hero_text', {
  opacity: 0,
  y: 20,
  delay: 2.6,
  duration: 1,
});

gsap.from('.hero_subtext', {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});

gsap.from('.btn', {
  opacity: 0,
  delay: 3,
  duration: 1,
});

gsap.from('.student_list img', {
  opacity: 0,
  y: 10,
  delay: 3.2,
  duration: 0.5,
  stagger: 0.25,
});

gsap.from('.students_stats_text', {
  opacity: 0,
  y: 20,
  delay: 3.4,
  duration: 1.5,
});

gsap.from('.hero_img', {
  opacity: 0,
  y: 20,
  delay: 3.6,
  duration: 1,
});

gsap.from('.stat_item', {
  opacity: 0,
  y: 10,
  delay: 4,
  duration: 0.5,
  stagger: 0.25,
});
