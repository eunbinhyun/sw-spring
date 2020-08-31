/*
$(document).ready(function () {
  load_winelist();
});

function load_winelist() {
  var wineList;
  var html;
var yVal = [];
var i = 0;


  $("#load_wineList").click(function () {
    var url = "/wine_quality/restex";
	//chart 1
    $.ajax({
      type: "POST",
      url: url,
      //data:params,
      success: function (args) {
        wineList = args;
        for (var i = 0; i < args.length; i++) {
			yVal.push(args[i].quality);
//          trace3.y.push(args[i].alcohol);
        } //for
//그리기data, layout
Highcharts.chart('container', {
  chart: {
    type: 'spline',
    animation: Highcharts.svg, // don't animate in old IE
    marginRight: 10,
    events: {
      load: function () {

        // set up the updating of the chart each second
        var series = this.series[0];
        setInterval(function () {
          var x = (new Date()).getTime(), // current time
            y = yVal[i];
			if (i > yVal.length){
				i = 0;
			}
			else{
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
    text: 'Live random data'
  },

  accessibility: {
    announceNewData: {
      enabled: true,
      minAnnounceInterval: 15000,
      announcementFormatter: function (allSeries, newSeries, newPoint) {
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
    name: 'Random data',
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;
//초기호ㅏ
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
      beforeSend: function () {
        console.log("가져오는중");

        $("#wineList").empty();
      },
      error: function (e) {
        alert(e.responseText);
      },
    }); // ajax

  });
}
*/
/*
data = [
  {
  type: 'scatterpolar',
  r: [39, 28, 8, 7, 28, 39],
  theta: ['A','B','C', 'D', 'E', 'A'],
  fill: 'toself',
  name: 'Group A'
  },
  {
  type: 'scatterpolar',
  r: [1.5, 10, 39, 31, 15, 1.5],
  theta: ['A','B','C', 'D', 'E', 'A'],
  fill: 'toself',
  name: 'Group B'
  }
]

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 50]
    }
  }
}

Plotly.newPlot("myDiv", data, layout)
*/
/*


var trace1 = {
  y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
  type: 'box',
  name: 'All Points',
  jitter: 0.3,
  pointpos: -1.8,
  marker: {
    color: 'rgb(7,40,89)'
  },
  boxpoints: 'all'
};

var trace2 = {
  y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
  type: 'box',
  name: 'Only Wiskers',
  marker: {
    color: 'rgb(9,56,125)'
  },
  boxpoints: false
};

var trace3 = {
  y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
  type: 'box',
  name: 'Suspected Outlier',
  marker: {
    color: 'rgb(8,81,156)',
    outliercolor: 'rgba(219, 64, 82, 0.6)',
    line: {
      outliercolor: 'rgba(219, 64, 82, 1.0)',
      outlierwidth: 2
    }
  },
  boxpoints: 'suspectedoutliers'
};

var trace4 = {
  y: [0.75, 5.25, 5.5, 6, 6.2, 6.6, 6.80, 7.0, 7.2, 7.5, 7.5, 7.75, 8.15, 8.15, 8.65, 8.93, 9.2, 9.5, 10, 10.25, 11.5, 12, 16, 20.90, 22.3, 23.25],
  type: 'box',
  name: 'Wiskers and Outliers',
  marker: {
    color: 'rgb(107,174,214)'
  },
  boxpoints: 'Outliers'
};



var data = [trace1, trace2, trace3, trace4];

var layout = {
  title: 'Box Plot Styling Outliers'
};

Plotly.newPlot('myDiv', data, layout);

*/