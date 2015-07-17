//statics
var xaxis = this.screen.width+'px';
var yaxis = this.screen.height+'px';
body = document.getElementById('body');
var row = document.createAttribute('row');
var col = document.createAttribute("column");


/*
Athor  Nicholas Adam 
Thu Jun 25 2015 23:09:19 GMT+0200 (CEST)
Vienna

*/
Element.prototype.s = function(s) {
	x = document.createTextNode(s);
	this.appendChild(x);
}
//shortcuts colors
Element.prototype.setColor = function(s) {
	this.style.background = s;
}
/*
	shortcut the appendChild() method
*/

Element.prototype.c = function(y) {
	this.style.color = y;
}
Element.prototype.createButton = function(val,id) {
	var b = document.createElement('button');
	b.style.width = '100%';
	b.style.height = '100%';
	b.id = id;
	//b.style.position = 'relative';
	//v = val.split(' ');
	b.s(val);
	this.appendChild(b);
}
Element.prototype.createInput = function(val,id) {
	var i = document.createElement('input');
	i.style.width = '100%';
	i.style.height = '100%';
	i.id = id;
	//b.style.position = 'relative';
	//v = val.split(' ');
	i.style.fontSize = '24px'
	i.s(val);
	this.appendChild(i);
}
function random() {
	return Math.floor(Math.random() * (255));
}

Element.prototype.gridTable = function(x,y) {
	var table = document.createElement('table');
	table.setAttribute('id','grid');
	var rows = {};
	var columns = {};
	for(i=0;i<y;i++){
		rows[i] = document.createElement('tr');
		rows[i].setAttribute('row',i);
		table.appendChild(rows[i]);
		for(z=0;z<x;z++) {
			columns[z] = document.createElement('td');
			columns[z].setAttribute('col',z);
			columns[z].style.width = rows[i].style.width / x;
			columns[z].style.height = body.style.height / y;
			columns[z].style.background = '#abc';
			rows[i].appendChild(columns[z]);
		}
	}

	table.style.width =  '100%';
	table.style.height = '800px';
	this.appendChild(table);
}
