import React from "react";
import "./svgOnlineOffline.css";

const SvgOnlineOffline = function () {
  return (
    <div className="svg_online_offline">
      <svg
        width="30"
        height="26"
        viewBox="0 0 30 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        href="http://www.w3.org/1999/xlink"
      >
        <rect width="30" height="26" fill="url(#pattern0_378_496)" />
        <defs>
          <pattern
            id="pattern0_378_496"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#image0_378_496"
              transform="matrix(0.00866667 0 0 0.01 0.0666667 0)"
            />
          </pattern>
          <image
            id="image0_378_496"
            width="100"
            height="100"
            href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default SvgOnlineOffline;