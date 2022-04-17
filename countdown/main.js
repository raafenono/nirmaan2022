document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var datetime = (new Date("March 13, 2020 00:00:00").getTime()/1000) +1;
  // var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(datetime)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
