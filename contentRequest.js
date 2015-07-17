var divs = document.querySelectorAll('div.content');

$.ajax({
		type:'GET',
		url:'content.xml',
	
		success: function(data) {
			console.log(data);
			$(data).find('content data').each(function(i) {
				var status  = $(this).find('text').text();
				divs[i].s(status);
			});
		},
		error: function() {
			alert('error loading orders');
		}
});
