import DashboardBox from "@/components/DashboardBox";
import { Box, useTheme } from "@mui/material";
import { me } from "../../assets";

import SocialMediaIcons from "@/components/SocialMediaIcons";

const AboutMe = () => {
  const { palette } = useTheme();
  return (
    <>
      <Box
        component="img"
        sx={{
          height: 600,
          width: 600,
          maxHeight: { xs: 600, md: 500 },
          maxWidth: { xs: 700, md: 600 },
          borderRadius: "1rem",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 2,
          borderColor: palette.primary[200],
          borderStyle: "Solid",
        }}
        alt="Up Up And A Way"
        src={me}
      />
      <div
        style={{
          height: 600,
          width: 600,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
          fontSize: "18px",
          color: "white",
        }}
      >
        <h1>About Developer</h1>
        My name is Michael, but most people call me{" "}
        <span style={{ fontWeight: "bold", color: "#FC59FF" }}>Em</span>. I've
        been a I'm a Software Engineer for 5 years and I specialize in designing
        solutions for interesting, complex problems. I my mission is to add a
        little joy to the world.
      </div>
    </>
  );
};

const AboutBikeStar = () => {
  return (
    <>
      <div
        style={{
          height: 600,
          width: 600,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
          fontSize: "18px",
          color: "white",
        }}
      >
        <h1>About BikeStar</h1>
        This website is a demo website of a dashboard that I built fo a local
        bike shop. The needed help tracking product and revenue in a way that wa
        easily accessible and available. The front end is built using{" "}
        <span style={{ fontWeight: "bold", color: "#12efc8" }}>
          {" "}
          Material UI
        </span>{" "}
        and{" "}
        <span style={{ fontWeight: "bold", color: "#12efc8" }}> React.js</span>,
        with{" "}
        <span style={{ fontWeight: "bold", color: "#12efc8" }}> Recharts</span>{" "}
        for the chart displays.{" "}
        <span style={{ fontWeight: "bold", color: "#12efc8" }}> Redux </span>
        handles all of the data fetching. The backend is built in{" "}
        <span style={{ fontWeight: "bold", color: "#12efc8" }}>
          TypeScript
        </span>{" "}
        and{" "}
        <span style={{ fontWeight: "bold", color: "#12efc8" }}>Node.js </span>,
        with{" "}
        <span style={{ fontWeight: "bold", color: "#12efc8" }}> MongoDB</span>{" "}
        being the database of choice.
      </div>
    </>
  );
};
const ContactMe = () => {
  return (
    <>
      <div
        style={{
          height: 600,
          width: 600,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
          fontSize: "20px",
          color: "white",
        }}
      >
        <h1>Contact Me</h1>
        Below are places to contact me or see the projects I've been working on.
        <SocialMediaIcons />
      </div>
    </>
  );
};

const Section1 = () => {
  return (
    <>
      <DashboardBox gridArea="a">
        {" "}
        <AboutMe />
      </DashboardBox>
      <DashboardBox gridArea="b">
        <AboutBikeStar />
      </DashboardBox>
      <DashboardBox gridArea="c">
        {" "}
        <ContactMe />
      </DashboardBox>
    </>
  );
};

export default Section1;
