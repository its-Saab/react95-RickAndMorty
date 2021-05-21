import React, { useState } from "react";
import styled from "styled-components";
import { Radio, Hourglass } from "react95";
import { UpperMenu } from "./UpperMenu.jsx";

// original Windows95 font (optionally)
import { ProfilePhoto } from "./profilePhoto.jsx";


const BoxWrapper = styled.div`
	position: relative;
	right: 10%;
	display: inline-block;
	max-width: 100%;
	width: 100%;
	overflow: hidden;

	/* margin-top: -2em; */
	@media (max-height: 700px) {
		max-width: 100%;
		margin-top: -5em;
	}
	@media (max-width: 700px) {
		margin-top: -5em;
		transform: scale(0.7);
	}
`;
const Centered = styled.div`
	position: absolute;
	width: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
	background-image: url("/windows 95.jpg");
	background-size: cover;
	height: 100%;
	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		mix-blend-mode: screen;
		pointer-events: none;
	}
`;

export const Section1 = ({
	theme,
	handleChange,
	profilePhoto,
	darkTheme,
	lightTheme,
}) => {
	return (
		<Wrapper>
				<Hourglass
					size={22}
					style={{
						position: "absolute",
						right: "0",
						top: "0",
					}}
				/>
				<div
					className="upperMenu"
					style={{ position: "absolute", left: "0", top: "0"}}
				>
					<UpperMenu theme={theme} />
				</div>
			<Centered>
				<BoxWrapper>
					<div>
						<ProfilePhoto img={profilePhoto} />
						<Radio
							checked={theme === darkTheme}
							onChange={handleChange}
							value={darkTheme}
							name="Rick"
							type="radio"
							className="radioButton"
							style={{ transform: "translate(180px,-40px)" }}
						/>
						<img
							src="/rick.png"
							className="radio-Button"
							style={{
								height: "55px",
								width: "55px",
								transform: "translate(180px,-40px)",
							}}
						/>
						<Radio
							checked={theme === lightTheme}
							onChange={handleChange}
							value={lightTheme}
							name="rickAndMorty"
							type="radio"
							className="radioButton"
							style={{ transform: "translate(290px,-40px)" }}
						/>
						<img
							src="/rickAndMorty.png"
							className="radio-Button"
							style={{
								height: "50px",
								width: "85px",
								transformOrigin: "75% 75%",
								transform: "translate(185px,-38px)",
							}}
						/>
					</div>
				</BoxWrapper>
			</Centered>
		</Wrapper>
	);
};
