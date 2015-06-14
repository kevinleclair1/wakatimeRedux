

var app = {};



app.getData = function(){
	$.ajax({
		url: '/getData',
		type: 'GET',
		success: function(data){
			console.log(data);
		}
	})
}
app.getResults = function(){
		$.ajax({
			url: 'https://wakatime.com/api/v1/users/current',
			type: 'GET',
			dataType: 'json',
			beforeSend: function (xhr){
				xhr.setRequestHeader('Authorization: Bearer ' + app.token)
			},
			success: function(data){
				console.log(data);
			},
			error: function(error){
				console.log(error);
			}
		});
};

app.getData();

