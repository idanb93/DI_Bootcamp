

function myMove() {

    let box = document.getElementById('animate');
    let pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
          clearInterval(id);
        } else {
          pos++; 
          box.style.top = pos + "px"; 
          box.style.left = pos + "px"; 
        }
      }
}