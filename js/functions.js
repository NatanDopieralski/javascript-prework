function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
	console.log(msg);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
