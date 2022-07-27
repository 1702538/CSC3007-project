// VisualOne Images
import milestoneOneBackground from "../Images/milestoneOneBackground.jpg";

// VisualOne Images
import visualOne from "../Images/global-emissions-4.jpg";
import visualOneNew from "../Images/visual-one-new.png";

import visualOneVio1 from "../Images/visualOne-violation-1.png";
import visualOneVio2 from "../Images/visualOne-violation-2.png";
import visualOneVio3 from "../Images/visualOne-violation-3.png";
import visualOneVio4 from "../Images/visualOne-violation-4.png";

// VisualTwo Images
import visualTwo from "../Images/Countries-with-the-Worst-Air-Quality-Full-Size.jpg";
import visualTwoNew from "../Images/visual-two-new.png";

import visualTwoVio1 from "../Images/visualTwo-violation-1.png";
import visualTwoVio2 from "../Images/visualTwo-violation-2.png";
import visualTwoVio3 from "../Images/visualTwo-violation-3.png";

import "@fontsource/ibm-plex-sans";
import "antd/dist/antd.css";

import { Card, Button } from "antd";
const { Meta } = Card;

function MilestoneOne() {
  return (
    <div style={{ fontFamily: "IBM Plex Sans", fontWeight: "100" }}>
      {/* HTML code here */}
      <div
        id="header"
        style={{
          width: "100%",
          height: window.innerHeight,
          backgroundImage: `url(${milestoneOneBackground})`,
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
          <b>Milestone One</b>
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
            href="https://github.com/1702538/CSC3007-project/blob/main/P2-04%20Milestone%20One.pdf"
          >
            Download the Keynote
          </Button>
          <br />
          The purpose of visualisation <br />
          is insight, <span style={{ color: "#418cff" }}>not pictures.</span>
          <p
            style={{
              fontFamily: "IBM Plex Sans",
              fontWeight: "100",
              fontSize: "0.3em",
            }}
          >
            - Ben Shneiderman
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
            Introduction to Milestone One
          </p>

          <p style={{ textAlign: "left", marginLeft: 20 }}>
            <ul>
              <li>
                Pick 2 visualizations to critique / validate based on
                data-task-idiom model and suggest improvements.
              </li>
              <li>
                Presentations of critiques to peers + instructor (plus Q&A).
              </li>
              <li>
                After feedback: Either implement suggestions to improve
                visualization or find a new project topic to submit the next
                week.
              </li>
            </ul>
          </p>
          <table style={{ textAlign: "left" }}></table>
        </div>

        <br />
        <hr />
        <br />

        <div id="visualOne">
          <p style={{ textAlign: "left", fontSize: "2em", color: "#111111" }}>
            Visual #1 - All the World's Emissions in One Chart{" "}
            <a href="https://www.visualcapitalist.com/all-the-worlds-carbon-emissions-in-one-chart/ ">
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
            Created by VisualCapitalist for explanatory analysis, this
            infographic features a treemap shaped like a “globe” (which
            represents Earth). The infographic is designed to highlight the top
            "heavy hitters" countries which collectively accounts for nearly 50%
            of the world's carbon emissions in 2017.
          </p>
          <br />

          <table style={{ textAlign: "left", marginTop: 0 }}>
            <tr>
              <td rowspan="3" width={750} style={{ verticalAlign: "top" }}>
                {" "}
                <img src={visualOne} width={700} />
              </td>
              <tr>
                <h2
                  style={{
                    fontWeight: 100,
                    marginTop: 0,
                    marginLeft: -20,
                  }}
                >
                  Data
                </h2>
                <ul>
                  <li>
                    We observed that two types of data were used: Nominal
                    (Country Name) and Ratio (Share of World's Carbon Emission -
                    represented in percentages).
                  </li>
                  <li>
                    The treemap consists of multiple segments with different
                    shapes and sizes; each segment represents one of the top 30
                    highest producers of carbon emissions in the world.
                  </li>
                </ul>
              </tr>
              <br />
              <tr>
                <h2
                  style={{
                    fontWeight: 100,
                    marginTop: -10,
                    marginLeft: -20,
                  }}
                >
                  Task
                </h2>
                <ul>
                  <li>
                    The infographic aims to illustrate where most of the world’s
                    carbon emissions comes from. Large segments with higher
                    percentages are showns to be represented prominently at the
                    top and center of the graph.
                  </li>
                  <li>
                    It also aims to enable users to view the carbon emission
                    volume for each country comparatively.
                  </li>
                </ul>
              </tr>
              <br />
              <tr>
                <h2
                  style={{
                    fontWeight: 100,
                    marginTop: -10,
                    marginLeft: -20,
                  }}
                >
                  Idiom (Good)
                </h2>
                <ul>
                  <li>
                    Inclusion of each country’s carbon emission percentages
                    alongside the names.
                  </li>
                  <li>
                    Each segment represents one of the top 30 countries, with
                    the size of the segments being directly proportional to
                    their annual volume of carbon emissions.
                  </li>

                  <li>
                    The colour channels utilised in the chart is effectual, as
                    the author made use of the colour shadings to represent
                    higher and lower percentages of carbon emissions.
                  </li>
                </ul>
              </tr>
              <br />
              <tr>
                <h2
                  style={{
                    fontWeight: 100,
                    marginTop: -10,
                    marginLeft: -20,
                  }}
                >
                  Idiom (Bad)
                </h2>
                <ul>
                  <li>
                    We observed that some countries are not represented in any
                    shade of purple. Countries with less than 0.7% (i.e. Vietnam
                    & Argentina) are coloured pink. The colour pink is not
                    represented in the legend provided below. So what does the
                    colour "pink" represent?
                  </li>
                  <li>
                    We observed that South Korea (1.7%) has a darker shade of
                    purple as compared to other countries with higher carbon
                    emission percentages (e.g. Japan with 3.3%).
                  </li>
                  <li>
                    We observed that the infographic suffers from size
                    distortion (e.g. the carbon emission volume for both Vietnam
                    & Argentina are 0.6%, but they look inherently different).
                  </li>
                  <li>
                    The countries are neither grouped by region nor by their
                    carbon emissions percentages.
                  </li>
                  <li>
                    The font and size of the text are not standardised. (e.g.
                    the font used for “Malaysia” is different from the rest of
                    the other countries).
                  </li>
                  <li>
                    No list of countries is provided to allow easy
                    identification of all the countries represented.
                  </li>
                  <li>
                    The unit of measurement used to represent “Metric Tons of
                    Carbon Dioxide” is incorrect - the correct unit of measure
                    is “MTCO2e.”
                  </li>
                </ul>
              </tr>
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
                <h2 style={{ fontWeight: 100 }}>Design Violations</h2>
              </td>
              <td width={260}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    marginLeft: -20,
                  }}
                  cover={<img src={visualOneVio1} />}
                >
                  <Meta
                    title="Law of Proximity"
                    description="Skewed representation. Adjacent segments do not  correlate with each other. "
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
                  cover={<img src={visualOneVio2} />}
                >
                  <Meta
                    title="Law of Similarity"
                    description="Segments with identical percentages look completely different from each other."
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
                  cover={<img src={visualOneVio3} />}
                >
                  <Meta
                    title="Law of Common Region"
                    description="Segments are neither grouped by volume nor by their geographical location."
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
                  cover={<img src={visualOneVio4} />}
                >
                  <Meta
                    title="Law of Prägnanz"
                    description="Complex shapes and sizes make it difficult to interpret the percentages."
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
                style={{ textAlign: "left", verticalAlign: "top" }}
              >
                <h2 style={{ fontWeight: 100 }}>Improvements</h2>
              </td>
              <td>
                <ul>
                  <li>
                    Bar graphs or pie charts can be employed to better
                    accentuate the difference in percentages.
                  </li>
                  <li>
                    Standardise the font styles and how each of the countries
                    are being represented (e.g. United States is spelled in full
                    while United Kingdom and United Arab Emirates were
                    abbreviated to U.K. & U.A.E. respectively)
                  </li>
                  <li>
                    Names of countries can be positioned upright and not tilted
                    90 degrees.
                  </li>
                  <li>
                    All colours used in the charts should be included in the
                    colour legend.
                  </li>
                  <li>
                    Countries can also be grouped by their similarities (e.g.
                    they can be grouped by region, by carbon emission volume,
                    etc.)
                  </li>
                  <li>
                    The total number of countries (excluding “Rest of the
                    World”) should be reflected.
                  </li>
                  <br />
                  <img
                    src={visualOneNew}
                    width={window.innerWidth - 600}
                    style={{ marginLeft: -20 }}
                  />
                </ul>
              </td>
            </tr>
          </table>
          <br />
        </div>
        <hr />
        <br />
        <div id="visualOne">
          <p style={{ textAlign: "left", fontSize: "2em", color: "#111111" }}>
            Visual #2 - Which Countries Have the Worst Air Pollution?{" "}
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
                <br />
                <br />
                <br />
              </td>
            </tr>
            <tr>
              <tr>
                <td
                  width={window.innerWidth * 0.4}
                  style={{ verticalAlign: "top" }}
                >
                  <h2
                    style={{
                      fontWeight: 100,
                      marginTop: 0,
                      marginLeft: -20,
                    }}
                  >
                    Data
                  </h2>
                  <ul>
                    <li>
                      We observed that two types of data were used: Nominal
                      (Country Name) and Ratio (PM2.5 Concentration). However,
                      the PM2.5 Concentration data is omitted from the graph as
                      the author has decided to represent the said data using a
                      density map diagram.
                    </li>
                    <li>
                      The countries shown in the chart are also resized to
                      represent the population number rather than the amount of
                      land; the higher the population, the larger the size of
                      the country on the map.
                    </li>
                  </ul>
                </td>
                <td width={window.innerWidth * 0.04}></td>
                <td
                  width={window.innerWidth * 0.4}
                  style={{ verticalAlign: "top" }}
                >
                  <h2
                    style={{
                      fontWeight: 100,
                      marginTop: 0,
                      marginLeft: -20,
                    }}
                  >
                    Task
                  </h2>
                  <ul>
                    <li>
                      The infographic aims to provide a “bird-eyes” view of the
                      global air pollution and PM2.5 concentrations for various
                      countries around the world, and how it impacts the world.
                    </li>
                    <li>
                      The authors aims to draw viewers' attention to countries
                      who are considered "high contributors" of air pollution
                      and have "high" PM2.5 concentration readings.
                    </li>
                  </ul>
                </td>
              </tr>
              <br />
              <br />
              <tr>
                <td
                  width={window.innerWidth * 0.4}
                  style={{ verticalAlign: "top" }}
                >
                  <h2
                    style={{
                      fontWeight: 100,
                      marginTop: 0,
                      marginLeft: -20,
                    }}
                  >
                    Idioms (Good)
                  </h2>
                  <ul>
                    <li>
                      The diagram is effective in demonstrating the high levels
                      of air pollution in larger countries (i.e. India, China
                      and Russia).
                    </li>
                    <li>
                      There are clear annotations in the chart (albeit the
                      smaller text size) to inform viewers on how to read and
                      understand the chart, including information on the
                      threshold set by the WHO.
                    </li>
                    <li>
                      Good use of colour scales to represent the different
                      levels of air pollution for each of the countries - Memory
                      Colour Effect (i.e. familar colours are used to represent
                      different levels of air pollution).
                    </li>
                    <li>
                      Countries with high levels of air pollution are coloured
                      brown, which is "commonly recognised" as pollution. Good
                      example of the Von Restorff Effect.
                    </li>
                  </ul>
                </td>
                <td width={window.innerWidth * 0.04}></td>
                <td
                  width={window.innerWidth * 0.4}
                  style={{ verticalAlign: "top" }}
                >
                  <h2
                    style={{
                      fontWeight: 100,
                      marginTop: 0,
                      marginLeft: -20,
                    }}
                  >
                    Idioms (Bad)
                  </h2>
                  <ul>
                    <li>
                      Due to the resizing of the countries, it can be difficult
                      to differentiate between countries. Some countries were
                      also omitted from the map due to the scaling.
                    </li>
                    <li>
                      Different colours across the colour legend are utilised,
                      making it challenging to determine the actual levels of
                      air pollution (e.g. Indonesia is represented by almost all
                      the colours in the legend).
                    </li>
                    <li>
                      No explanation was provided to explain why the countries
                      were “pixelated” - it was later revealed in a separate
                      interview that each pixel (boxes) represents 500,000
                      people.
                    </li>
                    <li>
                      The colour gradients used do not appear to correlate with
                      the actual air pollution situation for any of the
                      countries (i.e. the United States of America)
                    </li>
                  </ul>
                </td>
              </tr>
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
                <h2 style={{ fontWeight: 100 }}>Design Violations</h2>
              </td>
              <td width={260}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    marginLeft: -20,
                  }}
                  cover={<img src={visualTwoVio1} />}
                >
                  <Meta
                    title="Law of Prägnanz"
                    description="Different shapes and sizes were utilised to fit the countries on the density map."
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
                  cover={<img src={visualTwoVio2} />}
                >
                  <Meta
                    title="Jakob’s Law"
                    description="Many countries were shrunk/enlarged and re-positioned to fit the diagram"
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
                  cover={<img src={visualTwoVio3} />}
                >
                  <Meta
                    title="Krug's 1st Law of Usability"
                    description="Different colours across the scale are used. What do the colours mean?"
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
                style={{ textAlign: "left", verticalAlign: "top" }}
              >
                <h2 style={{ fontWeight: 100 }}>Improvements</h2>
              </td>
              <td>
                <ul>
                  <li>
                    A traditional choropleth map may be more appropriate for
                    illustrating data (by country) using a world map.
                  </li>
                  <li>
                    A bar chart may be employed to illustrate the different
                    levels of air pollution better, be it by country or by
                    population numbers.
                  </li>
                  <li>
                    A fixed colour for each country should be used instead of
                    having different colours representing each country.
                  </li>
                  <li>
                    Text labels or tooltips can be used to label the different
                    countries.
                  </li>
                  <br />
                  <img
                    src={visualTwoNew}
                    width={window.innerWidth - 600}
                    style={{ marginLeft: -20 }}
                  />
                  <br />
                  <br />
                  <p>
                    Image from
                    https://www.who.int/data/gho/data/indicators/indicator-details/GHO/concentrations-of-fine-particulate-matter-(pm2-5)
                  </p>
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

export default MilestoneOne;
