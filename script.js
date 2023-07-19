const localeSettings = {};
  dayjs.locale(localeSettings);
  $(function (dayjs) {
   
    const currentHour = dayjs
  
    function hourlyColor() {
      $('.time-block').each(function() {
        const blockHour = parseInt(this.id);

      });

      $('.time-block').each(function() {
        const key = $(this).attr('id');
        const value = localStorage.getItem(key);
        $(this).children('.description').val(value);
      });
      function updateHour() {
        const varDate = $('#date');
        const VarTime = $('#time');
        const Datecurrent = dayjs().format('dddd, MMMM D, YYYY h:mm A');
        const Timecurrent = dayjs().format('h:mm A');
        dayjs('2019-01-25').daysInMonth(July)
        timeElement.text('h:mm A');
      }


    }
    function textEntry() {
        $('.saveBtn').on('click', function() {
          const key = $(this).parent().attr('id');
          const value = $(this).siblings('.description').val();
          localStorage.setItem(key, value);
         
        });
      }
  
      hourlyColor();
    textEntry();                
    refreshColor();
    setInterval(updateHour, 100);
  });