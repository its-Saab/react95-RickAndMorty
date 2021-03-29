import "./App.css";
import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Radio, styleReset, List, ListItem, Divider, Hourglass } from "react95";
// pick a theme of your choice
import modernDark from "react95/dist/themes/modernDark";
import windows1 from "react95/dist/themes/windows1";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
// import { UpperMenu } from "./section-1/UpperMenu-FirstSection";
import {Section2} from "./section-2/Section2.jsx";
import { Section1 } from "./section-1/Section1.jsx";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';

  }
  ${styleReset}
`;
const FirstSectionWrapper = styled.div`
	padding: 5rem;
	transform: scale(1, 1.1);
	background: ___CSS_0___;
	#default-buttons button {
		margin-bottom: 1rem;
		margin-right: 1rem;
	}

	#cutout {
		background: ___CSS_1___;
		padding: 1rem;
		width: 500px;
	}

	[type="radio"] {
		position: absolute;
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* IMAGE STYLES */
	[type="radio"] + img {
		cursor: pointer;
	}

	/* CHECKED STYLES */
	[type="radio"]:checked + img {
		outline: 2px solid #f00;
		margin-right: 10px;
	}

	@media (max-width: 500px) {
		transform: translate(0%, -120%);

		#cutout {
			position: absolute;
			left: 0;
			max-width: 100%;
		}

		.img {
			transform: scale(-20%, -30%);
		}
		.radio-image {
			position: absolute;
			transform: translate(-10%, -10%);
		}
	}
`;

const App = () => {
	const [themeMode, setThemeMode] = useState(modernDark);
	const [profilePhoto, setProfilePhoto] = useState("/2.jpg");
	const handleChange = (e) => {
		e.target.name === "Rick"
			? setThemeMode(modernDark)
			: setThemeMode(windows1);
		e.target.name === "Rick"
			? setProfilePhoto("/2.jpg")
			: setProfilePhoto("/1.jpg");
	};
	return (
		<div

	>
			<GlobalStyles />
			<ThemeProvider theme={themeMode}>
				<div >
				{/* First section */}
				<Section1
					theme={themeMode}
					handleChange={handleChange}
					profilePhoto={profilePhoto}
					darkTheme={modernDark}
					lighTheme={windows1}
				/>
				</div>
				<div>
					{/* First section */}
					<Section2 />
				</div>
			</ThemeProvider>
		</div>
	);
};

export default App;
