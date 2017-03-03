Template.chart.onRendered(function(){
	
		var p1= $("#myChart").get(0).getContext("2d");
		console.log(p1);
		Meteor.call("activityPictures",function (err,res)
		{
			if (err) {console.log(err);} else{
				var data={
					labels:[],
					datasets:[{
						label:"#picture for each activity",
						fillColor:"rgba(151,187,205,0.2)",
						strokeColor: "rgba(151,187,205,1)",
						pointColor:"rgba(151,187,205,1)",
						pointStrokeColor: "#fff",
						pointHighlightFill:"#fff",
						pointHighlightStroke: "rgba(151,187,205,1)",
						data:[]
					}]			
				};
				res.forEach(function (x){
					data.labels.push(x.name);
					data.datasets[0].data.push(x.nb);
				});
				var myChart = new Chart(p1).Bar(data,Chart.defaults.global);
			}
		} );

	var p2 = $("#commentChart").get(0).getContext("2d");
	console.log(p2);
	Meteor.call("activityComment", function (err, res) {
		if (err) {
			console.log(err);
		} else {
			var data = {
				labels: [],
				datasets: [{
					label: "#picture for each activity",
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: []
				}]
			};
			res.forEach(function (x) {
				data.labels.push(x.name);
				data.datasets[0].data.push(x.nb);
			});
			var myChart = new Chart(p2).Radar(data, {pointDot: false});
		}
	});
		
})
