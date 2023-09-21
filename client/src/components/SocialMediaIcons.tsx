import { twitterIcon, linkedinIcon, githubColor, emLogo } from "../assets";
import "./styles.css";

const SocialMediaIcons = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
          gap: "1.75rem",
        }}
      >
        <a
          className="iconY"
          href="https://www.linkedin.com/in/m-harley/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ height: "34px", width: " 2rem", objectFit: "contain" }}
            alt="linkedin-link"
            src={linkedinIcon}
          />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{
              height: "2.5rem",
              width: " 2.5rem",
              objectFit: "scale-down",
            }}
            alt="twitter-link"
            src={twitterIcon}
          />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/MGhostHarley"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{
              height: "2.5rem",
              width: " 2.5rem",
              objectFit: "scale-down",
            }}
            alt="github-link"
            src={githubColor}
          />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://emharley.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{
              height: "2.5rem",
              width: " 2.5rem",
              objectFit: "scale-down",
            }}
            alt="em-log"
            src={emLogo}
          />
        </a>
      </div>
    </>
  );
};

export default SocialMediaIcons;
