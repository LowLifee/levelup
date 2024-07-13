window.addEventListener('DOMContentLoaded', () => {

   const orderBtn = document.querySelectorAll('.order-btn');

   const openBuyForm = () => {
      $('html, body').animate({
         scrollTop: $(document).height()
      }, 1100)
   }

   orderBtn.forEach(item => {
      item.addEventListener('click', openBuyForm)
   });

   const timeField = document.querySelector('.order-time'),
      __TIME = 1800;

   const timeCounter = () => {
      let min = __TIME / 60,
         sec = 0;

      const timer = setInterval(() => {
         if (sec === 0) {
            min = min - 1;
            sec = 60;
         }
         sec--;

         timeField.textContent = `${min > 9 ? min : '0' + min}:${sec > 9 ? sec : '0' + sec} `

      }, 1000);

      if (min === 0 && sec === 0) {
         clearInterval(timer)
      }


   }

   timeCounter();


   const compositionText = document.querySelectorAll('.composition-item-text');

   const handleMore = (element, text, moreBtn, closeBtn) => {
      element.textContent = `${text}`;
      moreBtn.remove();
      element.append(closeBtn)
   }

   const hadnleClose = (element, text, moreBtn, closeBtn) => {
      element.textContent = `${text}... `;
      closeBtn.remove();
      element.appendChild(moreBtn)
   }


   compositionText.forEach(item => {
      if (item.textContent.length > 312) {
         const text = item.textContent.slice(0, 312);
         const fullText = item.textContent;

         const moreBtn = document.createElement('span');
         const closeBtn = document.createElement('span');

         moreBtn.classList.add('more');
         moreBtn.textContent = 'ещё';
         moreBtn.addEventListener('click', () => {
            handleMore(item, fullText, moreBtn, closeBtn);
         })

         closeBtn.classList.add('more');
         closeBtn.textContent = 'свернуть';
         closeBtn.addEventListener('click', () => {
            hadnleClose(item, text, moreBtn, closeBtn);
         })


         item.innerHTML = `${text}... `;
         item.appendChild(moreBtn)
      }
   });


   const nameInput = document.getElementById('order-user-name');
   const phoneInput = document.getElementById('order-user-number');

   // Функция для создания подсказки
   function createTooltip(input, text) {
      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip'); // Добавьте класс для стилизации
      tooltip.textContent = text;
      input.parentNode.appendChild(tooltip);

      // Позиционирование подсказки
      tooltip.style.position = 'absolute';
      tooltip.style.top = `${input.offsetTop - 30}px`; // 5px отступ сверху
      tooltip.style.right = `${input.offsetWidth + 5}px`; // 5px отступ справа
      tooltip.style.backgroundColor = '#fff'; // Фон подсказки
      tooltip.style.padding = '5px';
      tooltip.style.borderRadius = '5px';
      tooltip.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // Тень
      tooltip.style.zIndex = '1'; // Чтобы подсказка была поверх инпута

      // Скрыть подсказку при потере фокуса
      input.addEventListener('blur', () => {
         tooltip.remove();
      });
   }

   // Добавляем подсказки при фокусе
   nameInput.addEventListener('focus', () => {
      createTooltip(nameInput, 'Иван Иванов');
   });

   phoneInput.addEventListener('focus', () => {
      createTooltip(phoneInput, '+7 (999) 123-45-67');
   });

});
