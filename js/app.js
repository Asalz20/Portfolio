const logoName = document.getElementById("logo-name");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");
const arrow = document.getElementById("arrow-scroll");
const navbar = document.querySelector("nav");

window.onload = function() {
  // all your particles.js code here
  particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
}