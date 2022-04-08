function changeTheme(){
	if(document.getElementById('changetheme').innerHTML===todark){
		document.body.style.background='#555';
		document.body.style.color='white';
		document.getElementById('changetheme').innerHTML=tolight;
	}
	else{
		document.body.style.background='white';
		document.body.style.color='#555';
		document.getElementById('changetheme').innerHTML=todark;
	}
}
		
