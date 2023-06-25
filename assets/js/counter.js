
document.addEventListener("DOMContentLoaded", function() {
    var lisInput = document.querySelector(".lis");
    var tracInput = document.querySelector(".trac");
    var countParagraph = document.querySelector(".count");

    lisInput.addEventListener("input", updateCount);
    tracInput.addEventListener("input", updateCount);

    function updateCount() {
      var lisValue = parseFloat(lisInput.value) || 0;
      var tracValue = parseFloat(tracInput.value) || 0;
      
      
      if(lisValue <= 3){
        sum = lisValue * tracValue * 2000
      }
      else{
        if(lisValue <= 5){
            sum = lisValue * tracValue * 1800
          }
          else{
            sum = lisValue * tracValue * 1680
          }
      }
      

      countParagraph.textContent = sum;
    }
  });