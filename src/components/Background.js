import React, { useState, useEffect } from 'react';

const Background = (props) => {
  const themes = [
    {
      firstColor: '#e5d9f7',
      middleColor: '#f5f0fd',
      lastColor: '#ffffff'
    },
    {
      firstColor: '#1c1b1c',
      middleColor: '#282829',
      lastColor: '#4f4f54'
    }
  ];
  let [selectedTheme, setSelectedTheme] = useState([]);
  const svgSize = {
    width: 1600,
    height: 2980
  }
  useEffect(() => {
    if (props.theme === 'darkTheme') {
      setSelectedTheme(themes[1]);
    } else {
      setSelectedTheme(themes[0]);
    }
  }, [])
  return (
    <div className="Background">
      <svg xmlns="http://www.w3.org/2000/svg" width={svgSize.width} height={svgSize.height} viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}>
        <g mask="url(&quot;#SvgjsMask1164&quot;)" fill="none">
          <rect width={svgSize.width} height={svgSize.height} x="0" y="0" fill={selectedTheme.middleColor}></rect>
          <path d="M0,1324.056C242.277,1299.181,437.852,1118.366,604.719,940.961C745.734,791.04,776.987,580.855,871.181,397.855C971.414,203.121,1178.964,49.901,1176.087,-169.096C1173.155,-392.29,984.618,-559.329,856.208,-741.908C712.946,-945.605,623.577,-1240.893,381.418,-1298.991C137.939,-1357.405,-64.959,-1107.473,-299.24,-1019.119C-510.957,-939.275,-749.888,-943.316,-928.848,-804.852C-1130.088,-649.15,-1344.633,-449.756,-1363.111,-195.986C-1381.528,56.941,-1140.163,242.388,-1021.418,466.466C-911.194,674.465,-870.442,922.544,-690.16,1073.91C-498.884,1234.507,-248.45,1349.565,0,1324.056" fill={selectedTheme.firstColor}></path>
          <path d="M1600 3675.254C1761.419 3667.132 1907.879 3570.37 2020.732 3454.6710000000003 2120.69 3352.193 2126.029 3197.482 2190.63 3069.732 2258.89 2934.746 2419.99 2834.414 2410.733 2683.434 2401.489 2532.659 2266.701 2417.303 2145.131 2327.642 2038.343 2248.883 1898.958 2252.718 1772.451 2212.685 1642.464 2171.551 1523.097 2054.3469999999998 1391.255 2089.08 1259.413 2123.813 1206.5430000000001 2278.748 1120.437 2384.456 1037.324 2486.489 922.181 2569.89 894.76 2698.602 866.677 2830.421 929.541 2959.056 970.682 3087.4 1017.303 3232.837 1039.54 3394.173 1151.1480000000001 3498.428 1271.092 3610.469 1436.074 3683.503 1600 3675.254" fill={selectedTheme.lastColor}></path>
        </g>
        <defs>
          <mask id="SvgjsMask1164">
            <rect width={svgSize.width} height={svgSize.height} fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>
    </div>
  )
}

export default Background;