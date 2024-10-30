const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});

// คำที่ต้องการแสดง
const words = ["ดร.ภควิชญ์ ดำรงเกียรติศักดิ์", "การถ่ายภาพดิจิทัล-10801106"];

// index ของคำที่จะแสดง
let index = 0;

// เลือก element h1
const heading = document.querySelector('h1');

// ฟังก์ชันสำหรับเปลี่ยนข้อความ
function changeText() {
  // เพิ่มค่า index
  index++;

  // ถ้า index เกินจำนวนคำทั้งหมด ให้เริ่มใหม่ที่ 0
  if (index >= words.length) {
    index = 0;
  }

  // เปลี่ยนข้อความใน h1
  heading.textContent = words[index];
}

// เรียกใช้ฟังก์ชันทุกๆ 1 วินาที (ปรับได้ตามต้องการ)
setInterval(changeText, 1500);

window.addEventListener('scroll', () => {
  const imageContainer = document.querySelector('.image-container');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    imageContainer.classList.add('active');
  }
  else if(scrollPosition <30){
    imageContainer.classList.add('active');
  }
});
