import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        this should be a paragraph about something that cannot be found by me so
        I typed non-sense things here to fill in this part. But the total workds
        seem not nenouth for this paragraph, so i have to write dow more and
        more non sense workds to make it look like a real long paragraph!!!
      </p>
    </div>
  );
};

export default Rainbow(About);
