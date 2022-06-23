import visualOne from "../Images/global-emissions-4.jpg";
import visualOneNew from "../Images/visual-one-new.png";
import "@fontsource/ibm-plex-sans";

function MilestoneOne() {
  // JS code here
  var a = "1234";

  return (
    <div style={{ fontFamily: "IBM Plex Sans", fontWeight: "100" }}>
      {/* HTML code here */}
      <div
        id="header"
        style={{
          width: "100%",
          height: window.innerHeight,
          background: "black",
          marginTop: 0,
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
            fontSize: "5em",
          }}
        >
          The purpose of visualisation is insight,{" "}
          <span style={{ color: "#418cff" }}>not pictures.</span>
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
        <div id="beforeContent">
          <p style={{ textAlign: "left", fontSize: "2em", color: "#111111" }}>
            Introduction to Milestone One
          </p>
          <table style={{ textAlign: "left", marginTop: 0 }}></table>
        </div>
        <hr />
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
            Created by Iman Ghosh, this infograph features a globe-like shape
            (which represents Earth) split into multiple segments of different
            shapes and sizes; each segment represents one of the top 30 highest
            producers of carbon emissions in the world.
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
                    marginBottom: -10,
                  }}
                >
                  Data
                </h2>
                <ul>
                  <li>
                    The infograph aims to illustrate where majority of the
                    world’s carbon emissions came from.
                  </li>
                  <li>
                    The visualisation is designed to highlight the top "heavy
                    hitters" countries which acccounts for nearly 50% of the
                    world's carbon emissions.
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
                    marginBottom: -10,
                  }}
                >
                  Task
                </h2>
                <ul>
                  <li>
                    To be able to tell at one glance the carbon emission impact
                    of each country comparatively
                  </li>
                </ul>
              </tr>
              <br />
              <tr>
                <h2
                  style={{
                    fontWeight: 100,
                    marginTop: -10,
                    marginBottom: -10,
                    marginLeft: -20,
                  }}
                >
                  Idiom (Good)
                </h2>
                <ul>
                  <li>
                    Inclusion of each country’s carbon emission percentages.
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
                    marginBottom: -10,
                    marginLeft: -20,
                  }}
                >
                  Idiom (Bad)
                </h2>
                <ul>
                  <li>
                    We observe that the higher the percentage, the darker the
                    shade of purple. However, some countries are not represented
                    in any shade of purple. Countries with less than 0.7% (i.e.
                    Vietnam & Argentina were coloured in pink).
                  </li>
                  <li>
                    We observed that South Korea (1.7%) has a darker shade of
                    purple as compared to other countries with higher carbon
                    emission percentages (e.g., Japan with 3.3%).
                  </li>
                  <li>
                    Inconsistent segment sizes for the same percentage of carbon
                    emissions. E.g. the size of Vietnam & Argentina (both 0.6%)
                    are inherently different.
                  </li>
                  <li>
                    The countries were neither sorted alphabetically nor grouped
                    by their percentage.
                  </li>
                  <li>
                    No list of countries is provided to allow easy
                    identification of all the countries represented.
                  </li>
                  <li>
                    The font used in the segments is not standardised. E.g. the
                    font used for “Malaysia” is different from the rest of the
                    other countries.
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
                style={{ textAlign: "left", verticalAlign: "top" }}
              >
                <h2 style={{ fontWeight: 100 }}>Improvements</h2>
              </td>
              <td>
                <ul>
                  <li>
                    Bar graphs or pie charts can be employed to better
                    accentuate the difference in percentages
                  </li>
                  <li>
                    Using different colour weights can help users easily
                    differentiate between the name of the country and the
                    percentage values
                  </li>
                  <li>
                    Names of countries should be positioned upright and not
                    tilted 90 degrees
                  </li>
                  <li>
                    Countries can also be grouped by their regions or positioned
                    according to their actual geographical locations on the
                    globe (geographical graphs only).
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
        <div id="visualOne">
          <p style={{ textAlign: "left", fontSize: "2em", color: "#111111" }}>
            Visual #2 - TBC{" "}
            <a href="#">
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
            Created by
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
                    marginBottom: -10,
                  }}
                >
                  Data
                </h2>
                <ul>
                  <li>123</li>
                </ul>
              </tr>
              <br />
              <tr>
                <h2
                  style={{
                    fontWeight: 100,
                    marginTop: -10,
                    marginLeft: -20,
                    marginBottom: -10,
                  }}
                >
                  Task
                </h2>
                <ul>
                  <li>123</li>
                </ul>
              </tr>
              <br />
              <tr>
                <h2
                  style={{
                    fontWeight: 100,
                    marginTop: -10,
                    marginBottom: -10,
                    marginLeft: -20,
                  }}
                >
                  Idiom (Good)
                </h2>
                <ul>
                  <li>123</li>
                </ul>
              </tr>
              <br />
              <tr>
                <h2
                  style={{
                    fontWeight: 100,
                    marginTop: -10,
                    marginBottom: -10,
                    marginLeft: -20,
                  }}
                >
                  Idiom (Bad)
                </h2>
                <ul>
                  <li>123</li>
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
                style={{ textAlign: "left", verticalAlign: "top" }}
              >
                <h2 style={{ fontWeight: 100 }}>Improvements</h2>
              </td>
              <td>
                <ul>
                  <li>123</li>

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
      </div>
    </div>
  );
}

export default MilestoneOne;
