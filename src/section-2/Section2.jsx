import styled from "styled-components";
import { useState, useEffect } from "react";
import {
	Tab,
	WindowContent,
	WindowHeader,
	Anchor,
	TabBody,
	Tabs,
	Window,
} from "react95";
import axios from "axios";
import { EventFire } from "./EventFire";

const Wrapper = styled.div`
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

	@media (max-width: 500px) {
		#cutout {
			position: absolute;
			left: 0;
			max-width: 100%;
		}
	}
`;

export const Section2 = () => {

	return (
		<div
			style={{
				backgroundImage: "url('/section2.png')",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundHeight: "100%",
				backgroundWidth: "100%",
				backgroundAttachment: "fixed",
				height: "100%",
				position: "relative",
				width: "100%",
			}}
		>
			<EventFire/>
		</div>
	);
};

