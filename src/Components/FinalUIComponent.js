import "antd/dist/antd.css";
import "./../App.css";
import {
  Bar,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import tableData10 from "./../tableJSON10.json";
import tableData from "./../tableJSON.json";

import * as d3 from "d3";
import Papa from "papaparse";
import { useState, useEffect } from "react";

import { Col, Row, Statistic, Card, Table, Button } from "antd";

function FinalUI() {
  const [mapData, setMapData] = useState([]);
  const [csvData, setCsvData] = useState([]);

  const [countryName, setCountryName] = useState("NA");
  const [pm25Data, setPm25] = useState("NA");

  useEffect(() => {
    getLocalJSONData();
    getLocalCSVData();
  }, []);

  const getLocalJSONData = () => {
    Promise.all([require("./../sgmap.json"), ,]).then((data) => {
      setMapData(data);
    });
  };

  const getLocalCSVData = () => {
    Papa.parse(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv",
      {
        download: true,
        complete: function (results) {
          // console.log("Finished:", results.data);

          setCsvData(results.data);
        },
      }
    );
  };

  if (mapData.length !== 0) {
    const svg = d3.select("svg");

    const path = d3.geoPath();
    const projection = d3.geoMercator().center([-20, 50]);
    // .translate([width / 2, height / 2]);

    const data = new Map();
    // const colorScale = d3
    //   .scaleThreshold()
    //   .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
    //   .range(d3.schemeBlues[7]);
    let topo = mapData[0];

    console.log(topo);

    let mouseOver = function (svgData, countryData) {
      console.log("This", svgData);
      //d3.selectAll(".Country").transition().style("opacity", 0.5);
      d3.select(this)
        .transition()
        // .style("opacity", 1)
        .style("stroke", "black");
      // console.log(countryData["properties"]["name"]);
      // console.log(countryData["properties"]["2016"]);
      d3.select(this).transition().style("fill", "#ffc125");
      setCountryName(countryData["properties"]["name"]);
      setPm25(countryData["properties"]["2016"]);
    };

    let mouseLeave = function (d) {
      //d3.selectAll(".Country").transition().style("opacity", 0.8);
      d3.select(this).transition().style("stroke", "transparent");
      d3.select(this)
        .transition()
        .style("fill", function (countryData) {
          let pm25 = countryData.properties["2016"];
          // console.log(countryData.properties["2016"]);
          return pm25 === "0"
            ? "white"
            : pm25 < 2.5
            ? "#89CCC1"
            : pm25 < 3.3
            ? "#469790"
            : pm25 < 5
            ? "#1C665F"
            : pm25 < 10
            ? "#CEEEE9"
            : pm25 < 20
            ? "#F6E6C3"
            : pm25 < 30
            ? "#DDC17D"
            : pm25 < 40
            ? "#BB7D21"
            : pm25 < 50
            ? "#885103"
            : "#513102";
        });
    };

    svg.selectAll("*").remove();

    // Draw the map
    const g = svg
      .append("g")
      .selectAll("path")
      .data(topo.features)
      .enter()
      .append("path")
      // draw each country
      .attr("d", d3.geoPath().projection(projection))
      // set the color of each country
      .attr("fill", function (countryData) {
        let pm25 = countryData.properties["2016"];
        // console.log(countryData.properties["2016"]);
        return pm25 === "0"
          ? "white"
          : pm25 < 2.5
          ? "#89CCC1"
          : pm25 < 3.3
          ? "#469790"
          : pm25 < 5
          ? "#1C665F"
          : pm25 < 10
          ? "#CEEEE9"
          : pm25 < 20
          ? "#F6E6C3"
          : pm25 < 30
          ? "#DDC17D"
          : pm25 < 40
          ? "#BB7D21"
          : pm25 < 50
          ? "#885103"
          : "#513102";
      })
      // .attr("fill", function (d) {
      //   d.total = data.get(d.id) || 0;
      //   return colorScale(d.total);
      // })
      .style("stroke", "black")
      .attr("class", function (d) {
        return "Country";
      })
      .style("opacity", 0.8)
      .on("mouseover", mouseOver)
      .on("mouseleave", mouseLeave);

    // Function to handle zoom
    // const handleZoom = (e) => g.attr("transform", e.transform);
    // const zoom = d3.zoom().on("zoom", handleZoom).scaleExtent([1, 10]);
    // d3.select("svg").call(zoom);
  }

  const columns = [
    {
      title: "Rank",
      dataIndex: "Rank",
    },
    {
      title: "Country",
      dataIndex: "Location",
    },
    {
      title: "PM 2.5 Reading",
      dataIndex: "PM 2.5",
    },
  ];

  function getRanking() {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].Location === countryName) {
        console.log(tableData[i].Rank);
        return tableData[i].Rank;
      }
    }
  }

  let mouseOver2 = function (d, i) {
    console.log("12345");
  };

  var svg = d3.select("#my_dataviz");

  // Handmade legend
  svg
    .append("text")
    .attr("x", 460)
    .attr("y", 600)
    .text("Map Legend")
    .style("font-size", "15px")
    .style("font-weight", "bold")
    .attr("alignment-baseline", "middle");
  // 0 - 2.5
  svg
    .append("rect")
    .attr("width", 50)
    .attr("height", 10)
    .attr("x", 460)
    .attr("y", 620)
    .attr("fill", "#1C665F")
    .attr("stroke", "black")
    .on("mouseover", mouseOver2);
  svg
    .append("text")
    .attr("x", 460)
    .attr("y", 645)
    .text("0 - 2.5")
    .style("font-size", "12px")
    .attr("alignment-baseline", "middle");

  // 2.5 - 3.3
  svg
    .append("rect")
    .attr("width", 50)
    .attr("height", 10)
    .attr("x", 520)
    .attr("y", 620)
    .attr("fill", "#469790")
    .attr("stroke", "black")
    .on("mouseover", mouseOver2);
  svg
    .append("text")
    .attr("x", 520)
    .attr("y", 645)
    .text("2.5 - 3.3")
    .style("font-size", "12px")
    .attr("alignment-baseline", "middle");

  // 3.3 - 5
  svg
    .append("rect")
    .attr("width", 50)
    .attr("height", 10)
    .attr("x", 580)
    .attr("y", 620)
    .attr("fill", "#89CCC1")
    .attr("stroke", "black")
    .on("mouseover", mouseOver2);
  svg
    .append("text")
    .attr("x", 580)
    .attr("y", 645)
    .text("3.3 - 5")
    .style("font-size", "12px")
    .attr("alignment-baseline", "middle");

  // 5 - 10
  svg
    .append("rect")
    .attr("width", 50)
    .attr("height", 10)
    .attr("x", 640)
    .attr("y", 620)
    .attr("fill", "#CEEEE9")
    .attr("stroke", "black")
    .on("mouseover", mouseOver2);
  svg
    .append("text")
    .attr("x", 640)
    .attr("y", 645)
    .text("5 - 10")
    .style("font-size", "12px")
    .attr("alignment-baseline", "middle");

  // 10 - 20
  svg
    .append("rect")
    .attr("width", 50)
    .attr("height", 10)
    .attr("x", 700)
    .attr("y", 620)
    .attr("fill", "#F6E6C3")
    .attr("stroke", "black")
    .on("mouseover", mouseOver2);
  svg
    .append("text")
    .attr("x", 700)
    .attr("y", 645)
    .text("10 - 20")
    .style("font-size", "12px")
    .attr("alignment-baseline", "middle");

  // 20 - 30
  svg
    .append("rect")
    .attr("width", 50)
    .attr("height", 10)
    .attr("x", 760)
    .attr("y", 620)
    .attr("fill", "#DDC17D")
    .attr("stroke", "black")
    .on("mouseover", mouseOver2);
  svg
    .append("text")
    .attr("x", 760)
    .attr("y", 645)
    .text("20 - 30")
    .style("font-size", "12px")
    .attr("alignment-baseline", "middle");

  // 30 - 40
  svg
    .append("rect")
    .attr("width", 50)
    .attr("height", 10)
    .attr("x", 820)
    .attr("y", 620)
    .attr("fill", "#BB7D21")
    .attr("stroke", "black")
    .on("mouseover", mouseOver2);
  svg
    .append("text")
    .attr("x", 820)
    .attr("y", 645)
    .text("30 - 40")
    .style("font-size", "12px")
    .attr("alignment-baseline", "middle");

  // 40 - 50
  svg
    .append("rect")
    .attr("width", 50)
    .attr("height", 10)
    .attr("x", 880)
    .attr("y", 620)
    .attr("fill", "#885103")
    .attr("stroke", "black")
    .on("mouseover", mouseOver2);
  svg
    .append("text")
    .attr("x", 880)
    .attr("y", 645)
    .text("40 - 50")
    .style("font-size", "12px")
    .attr("alignment-baseline", "middle");

  // 50 onwards
  svg
    .append("rect")
    .attr("width", 50)
    .attr("height", 10)
    .attr("x", 940)
    .attr("y", 620)
    .attr("fill", "#513102")
    .attr("stroke", "black")
    .on("mouseover", mouseOver2);
  svg
    .append("text")
    .attr("x", 940)
    .attr("y", 645)
    .text("> 50")
    .style("font-size", "12px")
    .attr("alignment-baseline", "middle");

  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          textAlign: "left",
          left: 20,
          top: 10,
          zIndex: 99,
        }}
      >
        <h3>World's Carbon Emissions</h3>
        <span
          style={{
            textAlign: "left",
            position: "relative",
            top: -12,
          }}
        >
          Interactive PM 2.5 Visualisation Map
        </span>
      </div>
      <div style={{ position: "fixed", top: 0, left: 0 }}>
        <svg
          id="my_dataviz"
          width={window.innerWidth - 50}
          height={window.innerHeight}
        ></svg>
        <svg
          id="my_dataviz2"
          width={300}
          height={300}
          display={"block"}
          style={{ margin: 100 }}
        ></svg>
      </div>
      <div
        style={{
          zIndex: 99,
          position: "fixed",
          top: 0,
          right: 0,
          backgroundColor: "#f5f5f5",
          width: window.innerWidth * 0.3,
          height: window.innerHeight - 1,
          maxWidth: "500px",
          minWidth: "350px",
          overflow: "scroll",
          textAlign: "left",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
        }}
      >
        <h3>Selected Country Statistical Data</h3>
        <hr />
        <div style={{ paddingTop: 10 }}>
          <Row gutter={16}>
            <Col span={12}>
              <Card
                title="Name of Country"
                bordered={true}
                size={"small"}
                hoverable={true}
              >
                {<Statistic value={countryName} />}
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="PM2.5 Data (2016)"
                bordered={true}
                size={"small"}
                hoverable={true}
              >
                {<Statistic value={pm25Data === "0" ? "NA" : pm25Data} />}
              </Card>
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={12}>
              <Card
                title="Ranking (# of 177)"
                bordered={true}
                size={"small"}
                hoverable={true}
              >
                <Statistic value={getRanking()} suffix="/ 177" />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="Air Quality (AQI)"
                bordered={true}
                size={"small"}
                hoverable={true}
              >
                <Statistic
                  value={
                    pm25Data < 12
                      ? "Good"
                      : pm25Data < 36
                      ? "Moderate"
                      : pm25Data >= 36
                      ? "Unhealthy"
                      : "NA"
                  }
                />
              </Card>
            </Col>
          </Row>
        </div>
        <br />
        <h3>Worldwide Statistical Data</h3>
        <hr />
        <div style={{ paddingTop: 10 }}>
          <Row gutter={16}>
            <Col span={12}>
              <Card
                title="Countries Represented"
                bordered={true}
                size={"small"}
                hoverable={true}
              >
                177 Countries
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="Year"
                bordered={true}
                size={"small"}
                hoverable={true}
              >
                Annual Year 2016
              </Card>
            </Col>
          </Row>
        </div>
        <br />
        <h4>Top 10 Countries (Sorted by highest PM 2.5 Emissions)</h4>
        <hr />
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            maxWidth={400}
            data={tableData10}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="Location" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="PM 2.5" barSize={20} fill="#513102" />
          </ComposedChart>
        </ResponsiveContainer>
        <h4>List of Countries (Ranked by highest PM2.5 Emissions)</h4>
        <hr />
        <br />
        <Table columns={columns} dataSource={tableData} rowKey="Location" />
      </div>
    </div>
  );
}

export default FinalUI;
