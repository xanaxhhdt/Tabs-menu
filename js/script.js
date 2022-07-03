'use strict';

const tab = function () {
   let tabNav = document.querySelectorAll('.tabs-nav__item'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

   tabNav.forEach(item => {
      item.addEventListener('click', selectTavNav);
   });

   function selectTavNav(e) {
      tabNav.forEach(item => {
         item.classList.remove('is-active');
      });
      e.target.classList.add('is-active');
      tabName = e.target.getAttribute('data-tab-name');
      selectTabContent(tabName);
   }

   function selectTabContent(tabName) {
      tabContent.forEach(item => {
         if (item.classList.contains(tabName)) {
            item.classList.add('is-active');
         } else {
            item.classList.remove('is-active');
         }
      });
   }
};

tab();