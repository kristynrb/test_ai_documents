// const ejs = require('ejs');

const test = "test";
const data = {
  "test_run_id":  "A233-CA92-3293-B9AA",
  "app_name": "Chewy.com",
  "time_stamp": "2018-01-20T12:00:00Z",
  "test_cases": [
    {
      "test_name": "View dog bone",
      "status": true,
      "test_steps": [
        {
          "step_name": "Click Dog Category",
          "screenshot": "img/file1.png",
          "launch_times": [
            100,
            134,
            123
          ],
          "memory": [
            896,
            945,
            1023
          ],
          "cpu": [
            1.1,
            1.4,
            5.7
          ]
        },
        {
          "step_name": "Click Treats",
          "screenshot": "img/file2.png",
          "launch_times": [
            345,
            441,
            286
          ],
          "memory": [
            1320,
            1206,
            1456
          ],
          "cpu": [
            12.1,
            13.4,
            12.7
          ]
        },
        {
          "step_name": "Click Bone",
          "screenshot": "img/file3.png",
          "launch_times": [
            342,
            1456,
            326
          ],
          "memory": [
            1420,
            1420,
            1420
          ],
          "cpu": [
            3.1,
            4.4,
            2.9
          ]
        },
        {
          "step_name": "Verify Bone is displayed",
          "screenshot": "img/file4.png",
          "launch_times": [
            103,
            124,
            123
          ],
          "memory": [
            1502,
            1499,
            1538
          ],
          "cpu": [
            2.1,
            3.4,
            3.7
          ]
        }
      ]
    },
    {
      "test_name": "View cat toy",
      "status": false,
      "test_steps": [
        {
          "step_name": "Click Cat Category",
          "screenshot": "img/file5.png",
          "launch_times": [
            108,
            194,
            163
          ],
          "memory": [
            996,
            945,
            1223
          ],
          "cpu": [
            2.2,
            2.4,
            2.1
          ]
        },
        {
          "step_name": "Click Toys",
          "screenshot": "img/file6.png",
          "launch_times": [
            445,
            408,
            386
          ],
          "memory": [
            920,
            1132,
            995
          ],
          "cpu": [
            2.1,
            3.2,
            2.1
          ]
        }
      ]
    }
  ]
}
console.log(data);

window.onload = function () {

  CanvasJS.addColorSet("orangeShades",["#D4A446"]);
  CanvasJS.addColorSet("greenShades",["#90EE90"]);
  CanvasJS.addColorSet("blueShades",["#56BEF4"]);

  var timeChart = new CanvasJS.Chart("timeChartContainer", {
  	animationEnabled: true,
    backgroundColor: null,
    colorSet: "orangeShades",
    height: 100,
    width: 100,
    axisY: {
      gridThickness: 0,
      tickLength: 0,
    },
  	data: [{
  		type: "column",
  		dataPoints: [
  			{ y: 20, label: 20 },
  			{ y: 30,  label: 30 },
  			{ y: 55,  label: 55 },
  		]
  	}]
  });

  var memoryChart = new CanvasJS.Chart("memoryChartContainer", {
    animationEnabled: true,
    backgroundColor: null,
    colorSet: "greenShades",
    height: 100,
    width: 100,
    axisY: {
      gridThickness: 0,
      tickLength: 0,
    },
    data: [{
      type: "column",
      dataPoints: [
        { y: 20, label: 20 },
        { y: 30,  label: 30 },
        { y: 55,  label: 55 },
      ]
    }]
  });

  var cpuChart = new CanvasJS.Chart("cpuChartContainer", {
  	animationEnabled: true,
    backgroundColor: null,
    colorSet: "blueShades",
    height: 100,
    width: 100,
    axisY: {
      gridThickness: 0,
      tickLength: 0,
    },
  	data: [{
  		type: "column",
  		dataPoints: [
  			{ y: 20, label: 20 },
  			{ y: 30,  label: 30 },
  			{ y: 55,  label: 55 },
  		]
  	}]
  });
  // Render charts
  timeChart.render();
  memoryChart.render();
  cpuChart.render();

}
