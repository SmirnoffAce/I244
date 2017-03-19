window.onload = function(){
	var a = document.getElementsByClassName('bead');
	for(var i = 0; i < a.length; i++){
		if(a[i].className == "bead right")
			a[i].style.cssFloat = 'left';
		else
			a[i].style.cssFloat = 'right';
	}
}
