import React, { useState } from "react";
import styled from "styled-components";
import { Radio, Hourglass } from "react95";
import { UpperMenu } from "./UpperMenu.jsx";

// original Windows95 font (optionally)
import { ProfilePhoto } from "./profilePhoto.jsx";

const Wrapper = styled.div`
	padding: 5rem;
	/* transform: scale(1, 1.1); */
	background: ___CSS_0___;
	font-family: "ms_sans_serif";
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
		/* transform: translate(0%, -120%); */

		.wrapper-dev {
			background-size: 100%;
			background-position: fixed;
			background-position-x: 1000;
		}

		#cutout {
			position: absolute;
			left: 0;
			max-width: 100%;
		}

		/* .img {
    transform: scale(-20%, -30%);
  }
  .radio-image {
    position: absolute;
    transform: translate(-10%, -10%);
  } */
	}

	@media (min-width: 767px) {
		/* transform: translate(30%,-100%); */
		#cutout {
			position: absolute;
			left: 0;
			max-width: 100%;
		}

		.img {
			/* transform: scale(0%, -30%); */
		}
		.radio-image {
			position: absolute;
			transform: translate(30%, 600%);
			width: 100%;
		}
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
		<div
			className="wrapper-dev"
			style={{
				backgroundImage: "url('/windows 95.jpg')",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundHeight: "100%",
				backgroundWidth: "100%",
				backgroundAttachment: "fixed",
				backgroundPosition: "top",
				height: "100%"
			}}
		>
			<UpperMenu theme={theme} />
			<Hourglass
				size={22}
				style={{
					position: "absolute",
					right: "0",
					top: "0",
				}}
			/>
			<div style={{ margin: "auto", width: "60%", padding: "10px" }}>
				<Wrapper>
					<ProfilePhoto img={profilePhoto} />
					<Radio
						checked={theme === darkTheme}
						onChange={handleChange}
						value={darkTheme}
						name="Rick"
						type="radio"
						style={{ transform: "translate(280px,-40px)" }}
					/>
					<img
						src="/rick.png"
						className="radio-image"
						style={{
							height: "55px",
							width: "55px",
							transform: "translate(280px,-40px)",
						}}
					/>
					<Radio
						checked={theme === lightTheme}
						onChange={handleChange}
						value={lightTheme}
						name="rickAndMorty"
						type="radio"
						style={{ transform: "translate(460px,-40px)" }}
					/>
					<img
						src="/rickAndMorty.png"
						className="radio-image"
						style={{
							height: "50px",
							width: "85px",
							transformOrigin: "75% 75%",
							transform: "translate(350px,-40px)",
						}}
					/>
				</Wrapper>
			</div>
		</div>
	);
};
