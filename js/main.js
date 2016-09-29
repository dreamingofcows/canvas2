function Main() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        
      }
    }

var paint = false;

$('#canvas').mousedown(function(e){
		  var mouseX = e.pageX - this.offsetLeft;
		  var mouseY = e.pageY - this.offsetTop;
				
		  paint = true;
		  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
		  redraw();
});	
	
$('#canvas').mousemove(function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});
