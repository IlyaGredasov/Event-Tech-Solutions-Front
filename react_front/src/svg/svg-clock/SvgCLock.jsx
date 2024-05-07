import React from 'react'
import './svgClock.css'
const SvgClock = function(){
    return<div className="svg_clock">
    <svg
      width="30"
      height="26"
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      href="http://www.w3.org/1999/xlink"
    >
      <rect width="30" height="26" fill="url(#pattern0_378_499)" />
      <defs>
        <pattern
          id="pattern0_378_499"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            href="#image0_378_499"
            transform="matrix(0.00866667 0 0 0.01 0.0666667 0)"
          />
        </pattern>
        <image
          id="image0_378_499"
          width="100"
          height="100"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  </div>;
}
export default SvgClock;