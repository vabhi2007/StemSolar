function calculateAngle(current, total) {
    return (current / total) * 360;
  }
  var progressValue = calculateAngle(100, 5000);
  document.documentElement.style.setProperty('--calculated-angle', progressValue + 'deg');
  console.log(calculateAngle);

function getProgressText(current, total){
    return "$ " + current + "/" + total;
}

