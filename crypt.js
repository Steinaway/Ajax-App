ar array = document.querySelectorAll('button.nav');
for(var i = 0; i < array.length;i++){
	array[i].addEventListener('click',function() {
		var active = document.querySelector('.content.active');
		var more = active.className.split(' ');
		active.className = more[0] + ' visually-hidden';
		var classnames = this.className.split(' ');
		var target = document.getElementById(classnames[0]);
		var bla = target.className.split(' ');
		target.className = bla[0] + ' active';
	});
}

