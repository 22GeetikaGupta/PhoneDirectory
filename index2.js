		
directory.forEach(info=>{
	var item = document.createElement("tr");
	
	var data = document.createElement("td");
	var dataname = info.dataname;
	data.innerHTML = dataname;
	data.setAttribute("id",`name${n}`);

	var phone = document.createElement("td");
	var datanum = info.datanum;
	phone.innerHTML = datanum;
	phone.setAttribute("id",`phone${n}`);

	var but = document.createElement("button");
	var del = document.createTextNode("delete");
	but.appendChild(del);
	but.setAttribute("id",`but${n}`);
	but.setAttribute("value",`${n}`);

	item.appendChild(data);
	item.appendChild(phone);
	item.appendChild(but);

	but.onclick = () =>{
		deleteEntry(`${but.value}`)
	};
	
	document.body.appendChild(item);
	n++;
	
	
});

function deleteEntry(val) {
	var delname = document.getElementById(`name${val}`);
	var delnum = document.getElementById(`phone${val}`);
	var delbut = document.getElementById(`but${val}`);
	
	for(var a = 0; a<directory.length; a++){
		if(directory[a].dataname === delname.innerHTML){
			directory.splice(a,1);
			console.log(directory);
		}
	}
	delname.parentNode.removeChild(delname);
	delnum.parentNode.removeChild(delnum);
	delbut.parentNode.removeChild(delbut);

	
	localStorage.clear();

	localStorage.setItem('directory', JSON.stringify(directory));
}
