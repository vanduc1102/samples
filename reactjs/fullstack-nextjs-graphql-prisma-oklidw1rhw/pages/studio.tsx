import React from "react";
import Iframe from "react-iframe";

function StudioPage() {
  return (
    <div className="flex" style={{ height: "80vh", width: "100%" }}>
      <Iframe
        url="http://localhost:5555/"
        position="relative"
        scrolling={"no"}
        styles={{ flex: "1 1 0" }}
      />
    </div>
  );
}

export default StudioPage;
