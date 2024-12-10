document.addEventListener('DOMContentLoaded', function() {
		document.querySelectorAll('.colorinput').forEach(function(input) { 
			input.addEventListener('input', function() {
			var r=document.getElementById('red').value || 0;
			var g=document.getElementById('green').value || 0;
			var b=document.getElementById('blue').value || 0;
			var rgbColor = 'rgb(' + r + ',' + g + ',' + b + ')'; 
			document.body.style.backgroundColor = rgbColor;
			 });
        });
      });