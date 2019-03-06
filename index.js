function updatename(){
	document.querySelector('#name').innerHTML = document.querySelector('#nameinput').value;
}

function updatenum(){
	document.querySelector('#num').innerHTML = document.querySelector('#numinput').value;
}

var directory;
if(localStorage.getItem('directory'))
	directory = JSON.parse(localStorage.getItem('directory'));
else{
	directory=[];
}
var n=1;
function list() {
	var dataname = document.getElementById("nameinput").value;		
	var datanum = document.getElementById("numinput").value;

	directory.push({'dataname':dataname, 'datanum':datanum});
	localStorage.setItem('directory', JSON.stringify(directory));
}