// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  // TODO: Add a listener for click events on the save button.This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, value);

    $('.notification').addClass('show');

    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000)
  });
  
  function hourUpdater() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourUpdater();
 
  setInterval(hourUpdater, 15000);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('ddd, MMM D, YYYY'));
});
