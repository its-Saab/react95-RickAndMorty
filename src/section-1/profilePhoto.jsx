import React from "react";
import styled from "styled-components";
import {
	Button,
	Window,
	WindowHeader,
	WindowContent,
	List,
	ListItem,
	Divider,
	Cutout,
	Toolbar,
} from "react95";

const Wrapper = styled.div`
	padding: 5rem;
	transform: scale(1,1.2);

	background: ___CSS_0___;
	#default-buttons button {
		margin-bottom: 1rem;
		margin-right: 1rem;
	}

	#cutout {
		background: ___CSS_1___;
		padding: 1rem;
		width: 300px;
	}

	@media (max-width: 500px) {
		transform: translate(-4%, 4%);

		.img {
			width: 50% !important;
		}
	}
	@media (min-width: 767px) {

		.Window {
			transform: translate(75%, 15%);

		}
		.img {
			width: 60%;

		}
	}
`;

export const ProfilePhoto = (props) => {
	const [open, setOpen] = React.useState(false);

	return (
		<Wrapper>
			<Window className="Window" style={{ maxWidth: "250px" }}>
				<WindowHeader style={{ fontFamily: "ms_sans_serif" }}>
					<span role="img" aria-label="timeTravel">
						👽
					</span>
					Time-Travel.png
				</WindowHeader>
				<Toolbar noPadding>
					<Button variant="menu" disabled>
						File
					</Button>
					<Button variant="menu" disabled>
						Edit
					</Button>
					<Button variant="menu" disabled>
						View
					</Button>
					<div
						style={{
							position: "relative",
							display: "inline-block",
							alignSelf: "left",
						}}
					>
						<Button
							variant="menu"
							onClick={() => setOpen(!open)}
							size="sm"
							active={open}
						>
							Help
						</Button>
						{open && (
							<List
								style={{
									position: "absolute",
									right: "0",
									top: "100%",
									zIndex: "9999",
								}}
								open={open}
								onClick={() => setOpen(false)}
							>
								<ListItem size="sm">Copy link</ListItem>
								<Divider />
								<ListItem size="sm">
									<a href="http://www.github.com/its-Saab" target="_blank">
										Github
									</a>
								</ListItem>
								<ListItem size="sm">
									<a
										href="https://www.linkedin.com/in/mosaab-abbas/"
										target="_blank"
									>
										LinkedIn
									</a>
								</ListItem>
								<ListItem size="sm">
									<a href="mailto:musaababs@gmail.com">Email</a>
								</ListItem>
								<Divider />
								<ListItem size="sm" disabled>
									MySpace
								</ListItem>
							</List>
						)}
					</div>
				</Toolbar>
				<WindowContent style={{ padding: "0.25rem" }}>
					<Cutout>
						<img
							style={{ width: "100%", height: "1uto", display: "block" }}
							src={props.img}
							alt="profile photo"
						/>
					</Cutout>
				</WindowContent>
			</Window>
		</Wrapper>
	);
};
