import "./App.css";
import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import styled from "styled-components";
import { styleReset } from "react95";

import modernDark from "react95/dist/themes/modernDark";
import windows1 from "react95/dist/themes/windows1";

import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

import { Section2 } from "./section-2/Section2.jsx";
import { Section1 } from "./section-1/Section1.jsx";
import { Info } from "./section-3/Info.jsx";
import ReactFullpage from "@fullpage/react-fullpage";

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
const Section = styled.section`
	width: 100%;
	height: 100%;
	position: relative;
	text-align: center;
`;
const Main = styled.main`
	width: 100%;
	height: 100%;
	background: teal;
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
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<>
				<Main>
					<ReactFullpage
						verticalCentered={false}
						render={({ state, fullpageApi }) => {
							return (
								<ReactFullpage.Wrapper>
									<Section className="section">
										{/* First section */}
										<Section1
											theme={themeMode}
											handleChange={handleChange}
											profilePhoto={profilePhoto}
											darkTheme={modernDark}
											lighTheme={windows1}
										/>
									</Section>

										<Section className="section">
											<Section2 onStart={() => fullpageApi.moveSectionDown()} />
										</Section>

									<Section className="section">
										<Info />
									</Section>
								</ReactFullpage.Wrapper>
							);
						}}
					/>
				</Main>
			</>
		</ThemeProvider>
	);
};

export default App;
