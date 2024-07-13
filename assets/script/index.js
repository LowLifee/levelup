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

   //compositionText.forEach(item => {
   //   if(item)
   //})

});