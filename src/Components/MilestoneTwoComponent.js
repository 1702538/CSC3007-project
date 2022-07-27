// Main Background
import milestoneTwoBackground from "../Images/milestoneTwoBackground.jpg";

// FinalUI Images
import finalUIReject1 from "../Images/finalUI-reject-1.png";
import finalUIReject2 from "../Images/finalUI-reject-2.png";
import finalUIReject3 from "../Images/finalUI-reject-3.png";
import finalUIReject4 from "../Images/finalUI-reject-4.png";

import finalUIAccept1 from "../Images/finalUI-accept-1.png";
import finalUIAccept2 from "../Images/finalUI-accept-2.png";

import finalUIScreen1 from "../Images/finalUI-userInterface-1.png";
import finalUIScreen2 from "../Images/finalUI-userInterface-2.png";

import finalUILogo1 from "../Images/finalUI-logo-1.png";
import finalUILogo2 from "../Images/finalUI-logo-2.png";
import finalUILogo3 from "../Images/finalUI-logo-3.png";
import finalUILogo4 from "../Images/finalUI-logo-4.png";
import finalUILogo5 from "../Images/finalUI-logo-5.png";

// VisualTwo Images
import visualTwo from "../Images/Countries-with-the-Worst-Air-Quality-Full-Size.jpg";

import "@fontsource/ibm-plex-sans";
import "antd/dist/antd.css";

import { Card, Button } from "antd";
const { Meta } = Card;

function MilestoneTwo() {
  return (
    <div style={{ fontFamily: "IBM Plex Sans", fontWeight: "100" }}>
      {/* HTML code here */}
      <div
        id="header"
        style={{
          width: "100%",
          height: window.innerHeight,
          backgroundImage: `url(${milestoneTwoBackground})`,
          marginTop: 0,
          backgroundPosition: "bottom",
        }}
      >
        <p
          style={{
            fontFamily: "IBM Plex Sans",
            marginTop: 0,
            margin: 40,
            position: "absolute",
            color: "white",
            fontSize: "1.3em",
            textAlign: "left",
            lineHeight: "1.5em",
          }}
        >
          <b>Milestone Two</b>
          <br />
          Tutorial Group P2-04
        </p>
        <h1
          style={{
            color: "white",
            marginTop: 0,
            margin: 40,
            fontFamily: "IBM Plex Sans",
            fontWeight: "100",
            position: "absolute",
            bottom: 0,
            width: window.innerWidth * 0.6,
            textAlign: "left",
            fontSize: "4em",
          }}
        >
          <Button
            size={"large"}
            ghost
            href="https://github.com/1702538/CSC3007-project/blob/main/P2-04%20Milestone%20Two.pdf"
          >
            Download the Keynote
          </Button>
          &nbsp;
          <Button
            style={{ fontWeight: "bold" }}
            size={"large"}
            href="/CSC3007-project/#/dashboard"
          >
            Go to Dashboard
          </Button>
          <br />
          People ignore design <br />
          <span style={{ color: "#418cff" }}>that ignores people</span>
          <p
            style={{
              fontFamily: "IBM Plex Sans",
              fontWeight: "100",
              fontSize: "0.3em",
            }}
          >
            - Frank Chimero
          </p>
        </h1>
      </div>
      <div
        id="content"
        style={{
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        <br />
        <br />
        <div id="beforeContent">
          <p style={{ textAlign: "left", fontSize: "2em", color: "#111111" }}>
            Introduction to Milestone Two
          </p>

          <p style={{ textAlign: "left", marginLeft: 20 }}>
            <ul>
              <li>
                Suggest a new / pick an existing visualization from Milestone
                One for Milestone Two.
              </li>
              <li>
                Design a improved version of the selected visualisation for
                Milestone Two.
              </li>
              <li>
                Presentations of improvements to peers + instructor (plus Q&A).
              </li>
            </ul>
          </p>
          <table style={{ textAlign: "left" }}></table>
        </div>

        <br />
        <hr />
        <br />
        <div id="visualTwo">
          <p style={{ textAlign: "left", fontSize: "2em", color: "#111111" }}>
            Recap of Visual #2 - Which Countries Have the Worst Air Pollution?{" "}
            <a href="https://www.visualcapitalist.com/mapped-which-countries-have-the-worst-air-pollution">
              <span style={{ fontSize: "0.7em" }}>
                <b>(Source)</b>
              </span>
            </a>
          </p>
          <p
            style={{
              textAlign: "left",
              fontSize: "1em",
              color: "#111111",
              lineHeight: "1.3em",
            }}
          >
            Created by Matt Dzugan for explanatory analysis, this infographic
            provides a world map-view of the concentration of Fine Particulate
            Matter (PM2.5) for each of the countries; countries with high PM2.5
            concentrations will have a darker shade of brown, while countries
            with lower concentrations will have a dark shade of blue.
          </p>
          <table
            with={window.innerWidth}
            style={{ textAlign: "left", marginTop: 0, marginLeft: 20 }}
          >
            <tr>
              <td colSpan={2} style={{ verticalAlign: "top" }}>
                <img
                  src={visualTwo}
                  width={window.innerWidth * 0.9}
                  style={{ marginLeft: -40 }}
                />
              </td>
            </tr>
          </table>
          <br />
          <br />
          <hr />
          <br />
          <table style={{ textAlign: "left", marginTop: 0 }}>
            <tr>
              <td
                width={300}
                style={{
                  textAlign: "left",
                  verticalAlign: "top",
                }}
              >
                <h2 style={{ fontWeight: 100 }}>Rejected Chart Types</h2>
              </td>
              <td width={260}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    marginLeft: -20,
                  }}
                  cover={<img src={finalUIReject1} />}
                >
                  <Meta
                    title="Pie Charts"
                    description="Rejected as not all the countries from the JSON can be visualised"
                  />
                </Card>
              </td>
              <td width={260}>
                <Card
                  hoverable
                  headStyle={{ backgroundColor: "red", color: "#ffffff" }}
                  style={{
                    width: 240,
                    marginLeft: -20,
                  }}
                  cover={<img src={finalUIReject2} />}
                >
                  <Meta
                    title="Circular Charts"
                    description="Rejected as it is difficult to find the different countries from the chart"
                  />
                </Card>
              </td>
              <td width={260}>
                <Card
                  hoverable
                  headStyle={{ backgroundColor: "red", color: "#ffffff" }}
                  style={{
                    width: 240,
                    marginLeft: -20,
                  }}
                  visualTwoVio1
                  cover={<img src={finalUIReject3} />}
                >
                  <Meta
                    title="Line Charts"
                    description="Rejected as the aim of the visualisation is not to visualise trends"
                  />
                </Card>
              </td>
              <td width={260}>
                <Card
                  hoverable
                  headStyle={{ backgroundColor: "red", color: "#ffffff" }}
                  style={{
                    width: 240,
                    marginLeft: -20,
                  }}
                  visualTwoVio1
                  cover={<img src={finalUIReject4} />}
                >
                  <Meta
                    title="Stacked Bar Charts"
                    description="Rejected as the aim of this visualisation is not to compare between categories"
                  />
                </Card>
              </td>
            </tr>
          </table>
          <br />
          <br />
          <br />

          <table style={{ textAlign: "left", marginTop: 0 }}>
            <tr>
              <td
                width={300}
                style={{
                  textAlign: "left",
                  verticalAlign: "top",
                }}
              >
                <h2 style={{ fontWeight: 100 }}>Selected Chart Types</h2>
              </td>
              <td width={260}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    marginLeft: -20,
                  }}
                  cover={<img src={finalUIAccept1} />}
                >
                  <Meta
                    title="Choropleth Chart"
                    description="Familiar geographical layout and provides a concise view of the regions"
                  />
                </Card>
              </td>
              <td width={260}>
                <Card
                  hoverable
                  headStyle={{ backgroundColor: "red", color: "#ffffff" }}
                  style={{
                    width: 240,
                    marginLeft: -20,
                  }}
                  cover={<img src={finalUIAccept2} />}
                >
                  <Meta
                    title="Bar Chart"
                    description="Summarize a large data set in visual form and clarify trends in datasets"
                  />
                </Card>
              </td>
            </tr>
          </table>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <table style={{ textAlign: "left", marginTop: 0 }}>
            <tr>
              <td
                width={300}
                style={{
                  textAlign: "left",
                  verticalAlign: "top",
                }}
              >
                <h2 style={{ fontWeight: 100 }}>Technology Stack</h2>
              </td>
              <td width={260}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    marginLeft: -20,
                  }}
                  cover={<img src={finalUILogo1} />}
                >
                  <Meta
                    title="ReactJS Library"
                    description="An open source JavaScript Library/Framework for building interfaces."
                  />
                </Card>
              </td>
              <td width={260}>
                <Card
                  hoverable
                  headStyle={{ backgroundColor: "red", color: "#ffffff" }}
                  style={{
                    width: 240,
                    marginLeft: -20,
                  }}
                  cover={<img src={finalUILogo2} />}
                >
                  <Meta
                    title="JSON Format Files"
                    description="Lightweight data-interchange format for storing of datasets for the chart components."
                  />
                </Card>
              </td>
              <td width={260}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    marginLeft: -20,
                  }}
                  cover={<img src={finalUILogo3} />}
                >
                  <Meta
                    title="Ant Design UI Library"
                    description="To standardise the user interface appearance and layouts."
                  />
                </Card>
              </td>
            </tr>
          </table>
          <br />
          <br />
          <table style={{ textAlign: "left", marginTop: 0 }}>
            <tr>
              <td
                width={300}
                style={{
                  textAlign: "left",
                  verticalAlign: "top",
                }}
              ></td>
              <td width={260}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    marginLeft: -20,
                  }}
                  cover={<img src={finalUILogo4} />}
                >
                  <Meta
                    title="D3 Chart Library"
                    description="A JavaScript library for manipulating documents based on data."
                  />
                </Card>
              </td>
              <td width={260}>
                <Card
                  hoverable
                  headStyle={{ backgroundColor: "red", color: "#ffffff" }}
                  style={{
                    width: 240,
                    marginLeft: -20,
                  }}
                  cover={<img src={finalUILogo5} />}
                >
                  <Meta
                    title="Recharts JS Library"
                    description="Helps write clean and customisable hart components in ReactJS."
                  />
                </Card>
              </td>
            </tr>
          </table>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <table style={{ textAlign: "left", marginTop: 0 }}>
            <tr>
              <td
                width={300}
                style={{ textAlign: "left", verticalAlign: "top" }}
              >
                <h2 style={{ fontWeight: 100 }}>Improvements</h2>
              </td>
              <td>
                <ul>
                  <li>
                    A Choropleth Chart is utilised to provide a familar
                    geographical represenation of the world, so users know where
                    to find a specific country.
                  </li>
                  <li>
                    Colour scheme that mimics the colours of clean air (blue)
                    and air pollution (brown).
                  </li>
                  <li>
                    Card components to display detailed information of the
                    selected country.
                  </li>
                  <li>
                    An interactive Bar Chart is utilised to rankt the top 10
                    countries with the highest PM 2.5 readings.
                  </li>
                  <li>
                    A Table components to list all the countries (based on the
                    WHO JSON data) and their respective PM 2.5 readings.
                  </li>
                  <br />
                  <br />
                  <img
                    src={finalUIScreen1}
                    width={window.innerWidth - 500}
                    style={{ marginLeft: -20 }}
                  />
                  <br />
                  <br />
                  <img
                    src={finalUIScreen2}
                    width={window.innerWidth - 500}
                    style={{ marginLeft: -20 }}
                  />
                </ul>
              </td>
            </tr>
          </table>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default MilestoneTwo;
