'use strict';

const tab = function () {
   let tabNav = document.querySelectorAll('.tabs-nav__item'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

   tabNav.forEach(item => {
      item.addEventListener('click', selectTavNav);
   });

   function selectTavNav() {
      console.log(this);
   }
};

tab();