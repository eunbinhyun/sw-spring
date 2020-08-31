$(document).ready(function() {
	load_winelist();
});

function load_winelist() {
	var wineList;
	var html;

	//chart 1
	var trace3 = {
		y: [],
		type: "box",
		name: "alcohol",
		marker: {
			color: "#FF4136",
			outliercolor: "rgba(219, 64, 82, 0.6)",
			line: {
				outliercolor: "rgba(219, 64, 82, 1.0)",
				outlierwidth: 2,
			},
		},
		boxpoints: "suspectedoutliers",
	};

	var trace4 = {
		y: [],
		type: "box",
		name: "quality",
		marker: {
			color: "rgb(107,174,214)",
		},
		boxpoints: "Outliers",
	};

	//chart 2
	var data2 = [
		{
			type: "scatterpolar",
			r: [],
			theta: [
				"volatile_acidity",
				"citric_acid",
				"chlorides",
				"density",
				"sulphates",
			],
			fill: "toself",
			name: "red",
		},
		{
			type: "scatterpolar",
			r: [],
			theta: [
				"volatile_acidity",
				"citric_acid",
				"chlorides",
				"density",
				"sulphates",
			],
			fill: "toself",
			name: "white",
		},
	];

	//chart3
	var yVal = [];
	var i = 0;


	$("#load_wineList").click(function() {
		
		const myDiv = document.querySelector('#myDiv');

		var url = "/wine_quality/restex";
		//chart 1
		$.ajax({
			type: "POST",
			url: url,
			//data:params,
			success: function(args) {

				myDiv.innerText = '';

				wineList = args;
				for (var i = 0; i < args.length; i++) {
					trace3.y.push(args[i].alcohol);
					trace4.y.push(args[i].quality);
				} //for

				var data = [trace3, trace4];
				var layout = {
					title: "Wine Alcohol and quality",
				};
				Plotly.newPlot("myDiv", data, layout);

				////////////////////chart 3
				wineList = args;
				for (var i = 0; i < args.length; i++) {
					yVal.push(args[i].total_sulfur_dioxide);
				} //for

				Highcharts.chart('container', {
					chart: {
						type: 'spline',
						animation: Highcharts.svg, // don't animate in old IE
						marginRight: 10,
						events: {
							load: function() {

								// set up the updating of the chart each second
								var series = this.series[0];
								setInterval(function() {
									var x = (new Date()).getTime(), // current time
										y = yVal[i];
									if (i > yVal.length) {
										i = 0;
									}
									else {
										i += 1;
									}
									series.addPoint([x, y], true, true);
								}, 1000);
							}
						}
					},

					time: {
						useUTC: false
					},

					title: {
						text: 'Live Total Sulfur Dioxide data'
					},

					accessibility: {
						announceNewData: {
							enabled: true,
							minAnnounceInterval: 15000,
							announcementFormatter: function(allSeries, newSeries, newPoint) {
								if (newPoint) {
									return 'New point added. Value: ' + newPoint.y;
								}
								return false;
							}
						}
					},

					xAxis: {
						type: 'datetime',
						tickPixelInterval: 150
					},

					yAxis: {
						title: {
							text: 'Value'
						},
						plotLines: [{
							value: 0,
							width: 1,
							color: '#808080'
						}]
					},

					tooltip: {
						headerFormat: '<b>{series.name}</b><br/>',
						pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
					},

					legend: {
						enabled: false
					},

					exporting: {
						enabled: false
					},

					series: [{
						name: 'Total sulfur dioxide data',
						data: (function() {
							// generate an array of random data
							var data = [],
								time = (new Date()).getTime(),
								i;
							//data 초기화
							for (i = -19; i <= 0; i += 1) {
								data.push({
									x: time + i * 1000,
									y: 0
								});
							}
							return data;
						}())
					}]
				});


			},
			beforeSend: function() {
				console.log("가져오는중");
				myDiv.innerText = "Loading";
				$("#wineList").empty();
			},
			error: function(e) {
				alert(e.responseText);
			},
		}); // ajax

		//chart 2
		$.ajax({
			type: "POST",
			url: url + "2",
			//data:params,
			success: function(args) {
				wineList = args;
				for (var i = 0; i < args.length; i++) {
					data2[i].r.push(args[i].volatile_acidity);
					data2[i].r.push(args[i].citric_acid);
					data2[i].r.push(args[i].chlorides);
					data2[i].r.push(args[i].density);
					data2[i].r.push(args[i].sulphates);
				} //for

				let layout = {
					polar: {
						radialaxis: {
							visible: true,
							range: [0, 1],
						},
					},
				};

				Plotly.newPlot("myDiv2", data2, layout);



			},
			beforeSend: function() {
				console.log("가져오는중");

				$("#wineList").empty();
			},
			error: function(e) {
				alert(e.responseText);
			},
		}); // ajax
	});
}
