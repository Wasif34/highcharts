import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { chart, color, Tooltip } from "highcharts";
import { elevationData } from "./assets/data";

const options = {
  chart: { type: "line" },
  title: { text: "Fruit Consumption" },
  xAxis: { categories: ["Apples", "Bananas", "Oranges"] },
  yAxis: { title: { text: "Fruit eaten" } },
  series: [
    { name: "Jane", data: [1, 0, 4], color: "pink" },
    { name: "John", data: [5, 7, 3], color: "blue" },
  ],
  plotOptions: {
    series: {
      pointWidth: 30,
      color: "red",
    },
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    itemStyle: {
      fontWeight: "bold",
      color: "#555",
    },
  },
  tooltip: {
    shared: true,
    backgroundColor: "white",
  },
  credits: {
    enabled: false,
  },
};

const options1 = {
  chart: {
    type: "area",
    zooming: {
      type: "x",
    },
    panning: true,
    panKey: "shift",
    scrollablePlotArea: {
      minWidth: 600,
    },
    credits: {
      enabled: false,
    },
  },

  caption: {
    text:
      "This chart uses the Highcharts Annotations feature to place " +
      "labels at various points of interest. The labels are responsive " +
      "and will be hidden to avoid overlap on small screens.",
  },

  title: {
    text: "2017 Tour de France Stage 8: Dole - Station des Rousses",
  },

  accessibility: {
    description:
      "This line chart uses the Highcharts Annotations " +
      "feature to place labels at various points of interest. The " +
      "labels are responsive and will be hidden to avoid overlap on " +
      "small screens. Image description: An annotated line chart " +
      "illustrates the 8th stage of the 2017 Tour de France cycling " +
      "race from the start point in Dole to the finish line at Station " +
      "des Rousses. Altitude is plotted on the Y-axis, and distance is " +
      "plotted on the X-axis. The line graph is interactive, and the " +
      "user can trace the altitude level along the stage. The graph is " +
      "shaded below the data line to visualize the mountainous " +
      "altitudes encountered on the 187.5-kilometre stage. The three " +
      "largest climbs are highlighted at Col de la Joux, Côte de Viry " +
      "and the final 11.7-kilometer, 6.4% gradient climb to Montée de " +
      "la Combe de Laisia Les Molunes which peaks at 1200 meters above " +
      "sea level. The stage passes through the villages of Arbois, " +
      "Montrond, Bonlieu, Chassal and Saint-Claude along the route.",
    landmarkVerbosity: "one",
  },

  lang: {
    accessibility: {
      screenReaderSection: {
        annotations: {
          descriptionNoPoints:
            "{annotationText}, at distance " +
            "{annotation.options.point.x}km, elevation " +
            "{annotation.options.point.y} meters.",
        },
      },
    },
  },

  credits: {
    enabled: false,
  },

  annotations: [
    {
      draggable: "",
      labelOptions: {
        backgroundColor: "rgba(105, 34, 34, 0.5)",
        verticalAlign: "top",
        y: 15,
      },
      labels: [
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 27.98,
            y: 255,
          },
          text: "Arbois",
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 45.5,
            y: 611,
          },
          text: "Montrond",
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 63,
            y: 651,
          },
          text: "Mont-sur-Monnet",
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 84,
            y: 789,
          },
          x: -10,
          text: "Bonlieu",
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 129.5,
            y: 382,
          },
          text: "Chassal",
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 159,
            y: 443,
          },
          text: "Saint-Claude",
        },
      ],
    },
    {
      draggable: "",
      labels: [
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 101.44,
            y: 1026,
          },
          x: -30,
          text: "Col de la Joux",
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 138.5,
            y: 748,
          },
          text: "Côte de Viry",
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 176.4,
            y: 1202,
          },
          text: "Montée de la Combe <br>de Laisia Les Molunes",
        },
      ],
    },
    {
      draggable: "",
      labelOptions: {
        shape: "connector",
        align: "right",
        justify: false,
        crop: true,
        style: {
          fontSize: "10px",
          textOutline: "1px white",
        },
      },
      labels: [
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 96.2,
            y: 783,
          },
          text: "6.1 km climb <br>4.6% on avg.",
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 134.5,
            y: 540,
          },
          text: "7.6 km climb <br>5.2% on avg.",
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 172.2,
            y: 925,
          },
          text: "11.7 km climb <br>6.4% on avg.",
        },
      ],
    },
  ],

  xAxis: {
    labels: {
      format: "{value} km",
    },
    minRange: 5,
    title: {
      text: "Distance",
    },
    accessibility: {
      rangeDescription: "Range: 0 to 187.8km.",
    },
  },

  yAxis: {
    startOnTick: true,
    endOnTick: false,
    maxPadding: 0.35,
    title: {
      text: null,
    },
    labels: {
      format: "{value} m",
    },
    accessibility: {
      description: "Elevation",
      rangeDescription: "Range: 0 to 1,553 meters",
    },
  },

  tooltip: {
    headerFormat: "Distance: {point.x:.1f} km<br>",
    pointFormat: "{point.y} m a. s. l.",
    shared: true,
  },

  legend: {
    enabled: false,
  },

  series: [
    {
      data: elevationData,
      lineColor: Highcharts.getOptions().colors[1],
      color: "pink",
      fillOpacity: 0.5,
      name: "Elevation",
      marker: {
        enabled: false,
      },
      threshold: null,
    },
  ],
};

const histogramOptions = {
  chart: {
    type: "column",
  },
  credits: {
    enabled: false,
  },
  title: {
    text: "Histogram using a column chart",
  },
  subtitle: {
    text: "",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "",
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">' +
      "{series.name}: </td>" +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0,
      borderWidth: 0,
      groupPadding: 0,
      shadow: false,
    },
  },
  series: [
    {
      name: "Data",
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 124.1, 95.6, 54.4],
    },
  ],
};

const pieOptions = {
  chart: {
    type: "pie",
  },
  title: {
    text: "Egg Yolk Composition",
  },
  tooltip: {
    valueSuffix: "%",
  },
  subtitle: {
    text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: [
        {
          enabled: true,
          distance: 20,
        },
        {
          enabled: true,
          distance: -40,
          format: "{point.percentage:.1f}%",
          style: {
            fontSize: "1.2em",
            textOutline: "none",
            opacity: 0.7,
          },
          filter: {
            operator: ">",
            property: "percentage",
            value: 10,
          },
        },
      ],
    },
  },
  series: [
    {
      name: "Percentage",
      colorByPoint: true,
      data: [
        {
          name: "Water",
          y: 55.02,
        },
        {
          name: "Fat",
          sliced: true,
          selected: true,
          y: 26.71,
        },
        {
          name: "Carbohydrates",
          y: 1.09,
        },
        {
          name: "Protein",
          y: 15.5,
        },
        {
          name: "Ash",
          y: 1.68,
        },
      ],
    },
  ],
};

const areaChartOptions = {
  chart: {
    type: "area",
  },
  credits: {
    enabled: false,
  },
  accessibility: {
    description:
      "Image description: An area chart compares the nuclear " +
      "stockpiles of the USA and the USSR/Russia between 1945 and " +
      "2024. The number of nuclear weapons is plotted on the Y-axis " +
      "and the years on the X-axis. The chart is interactive, and the " +
      "year-on-year stockpile levels can be traced for each country. " +
      "The US has a stockpile of 2 nuclear weapons at the dawn of the " +
      "nuclear age in 1945. This number has gradually increased to 170 " +
      "by 1949 when the USSR enters the arms race with one weapon. At " +
      "this point, the US starts to rapidly build its stockpile " +
      "culminating in 31,255 warheads by 1966 compared to the USSR’s 8," +
      "400. From this peak in 1967, the US stockpile gradually " +
      "decreases as the USSR’s stockpile expands. By 1978 the USSR has " +
      "closed the nuclear gap at 25,393. The USSR stockpile continues " +
      "to grow until it reaches a peak of 40,159 in 1986 compared to " +
      "the US arsenal of 24,401. From 1986, the nuclear stockpiles of " +
      "both countries start to fall. By 2000, the numbers have fallen " +
      "to 10,577 and 12,188 for the US and Russia, respectively. The " +
      "decreases continue slowly after plateauing in the 2010s, and in " +
      "2024 the US has 3,708 weapons compared to Russia’s 4,380.",
  },
  title: {
    text: "US and USSR nuclear stockpiles",
  },
  subtitle: {
    text:
      'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
      'target="_blank">FAS</a>',
  },
  xAxis: {
    allowDecimals: false,
    accessibility: {
      rangeDescription: "Range: 1940 to 2024.",
    },
  },
  yAxis: {
    title: {
      text: "Nuclear weapon states",
    },
  },
  tooltip: {
    pointFormat:
      "{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>" +
      "warheads in {point.x}",
  },
  plotOptions: {
    area: {
      pointStart: 1940,
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
  },
  series: [
    {
      name: "USA",
      data: [
        null,
        null,
        null,
        null,
        null,
        2,
        9,
        13,
        50,
        170,
        299,
        438,
        841,
        1169,
        1703,
        2422,
        3692,
        5543,
        7345,
        12298,
        18638,
        22229,
        25540,
        28133,
        29463,
        31139,
        31175,
        31255,
        29561,
        27552,
        26008,
        25830,
        26516,
        27835,
        28537,
        27519,
        25914,
        25542,
        24418,
        24138,
        24104,
        23208,
        22886,
        23305,
        23459,
        23368,
        23317,
        23575,
        23205,
        22217,
        21392,
        19008,
        13708,
        11511,
        10979,
        10904,
        11011,
        10903,
        10732,
        10685,
        10577,
        10526,
        10457,
        10027,
        8570,
        8360,
        7853,
        5709,
        5273,
        5113,
        5066,
        4897,
        4881,
        4804,
        4717,
        4571,
        4018,
        3822,
        3785,
        3805,
        3750,
        3708,
        3708,
        3708,
        3708,
      ],
    },
    {
      name: "USSR/Russia",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        1,
        5,
        25,
        50,
        120,
        150,
        200,
        426,
        660,
        863,
        1048,
        1627,
        2492,
        3346,
        4259,
        5242,
        6144,
        7091,
        8400,
        9490,
        10671,
        11736,
        13279,
        14600,
        15878,
        17286,
        19235,
        22165,
        24281,
        26169,
        28258,
        30665,
        32146,
        33486,
        35130,
        36825,
        38582,
        40159,
        38107,
        36538,
        35078,
        32980,
        29154,
        26734,
        24403,
        21339,
        18179,
        15942,
        15442,
        14368,
        13188,
        12188,
        11152,
        10114,
        9076,
        8038,
        7000,
        6643,
        6286,
        5929,
        5527,
        5215,
        4858,
        4750,
        4650,
        4600,
        4500,
        4490,
        4300,
        4350,
        4330,
        4310,
        4495,
        4477,
        4489,
        4380,
      ],
    },
  ],
};

const barChartOptions = {
  chart: {
    type: "bar",
  },
  title: {
    text: "Historic World Population by Region",
  },
  subtitle: {
    text:
      "Source: <a " +
      'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
      'target="_blank">Wikipedia.org</a>',
  },
  xAxis: {
    categories: ["Africa", "America", "Asia", "Europe"],
    title: {
      text: null,
    },
    gridLineWidth: 1,
    lineWidth: 0,
  },
  yAxis: {
    min: 0,
    title: {
      text: "Population (millions)",
      align: "high",
    },
    labels: {
      overflow: "justify",
    },
    gridLineWidth: 0,
  },
  tooltip: {
    valueSuffix: " millions",
  },
  plotOptions: {
    bar: {
      borderRadius: "50%",
      dataLabels: {
        enabled: true,
      },
      groupPadding: 0.1,
    },
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "top",
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
    shadow: true,
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: "Year 1990",
      data: [632, 727, 3202, 721],
    },
    {
      name: "Year 2000",
      data: [814, 841, 3714, 726],
    },
    {
      name: "Year 2021",
      data: [1393, 1031, 4695, 745],
    },
  ],
};

function App() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "0.5rem",
        }}
      >
        <LineChart options={options} />
        <HighchartsReact highcharts={Highcharts} options={pieOptions} />
        <HighchartsReact highcharts={Highcharts} options={histogramOptions} />
        <HighchartsReact highcharts={Highcharts} options={options1} />
        <HighchartsReact highcharts={Highcharts} options={areaChartOptions} />
        <HighchartsReact highcharts={Highcharts} options={barChartOptions} />
      </div>
    </div>
  );
}

function LineChart({ options }) {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default App;
