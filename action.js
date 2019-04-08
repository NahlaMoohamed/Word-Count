window.onload=function(){
  var element = document.getElementById('textInput');
  element.addEventListener("keyup", function (evt) {
      var input = document.getElementById('textInput').value;
      var check = input.split("\n").length;
      var count = 0;
      if(check > 1){
        count = 0;
        var lines = input.split("\n");
        for(var i=0; i<lines.length; i++){
          count+=lines[i].split(" ").filter(i => i).length;
        }
      }
      else{
        count = input.split(" ").filter(i => i).length;
      }
      
      if(count > 0){
        document.getElementById('wordLength').innerHTML = count + " words";
      }
      else{
        document.getElementById('wordLength').innerHTML = '';
      }
  }, false);

}