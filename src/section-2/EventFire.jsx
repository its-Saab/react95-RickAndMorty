import { useState, useEffect } from "react";
import {
	Tab,
	WindowContent,
	WindowHeader,
	Anchor,
	TabBody,
	Tabs,
	Window,
	Tooltip,
	Button,
} from "react95";
import axios from "axios";

export const EventFire = () => {
	const [flag, setFalg] = useState(false);
	const [data, setData] = useState({
		name: "Morty Smith",
		status: "Alive",
		species: "Human",
		location: { name: "Earth(Replacement Dimension)" },
		origin: { name: "Earth(C-137)" },
		image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
	});
	const [tab, setTab] = useState({
		activeTab: "2",
	});
	const { activeTab } = tab;

	const handleClick = () => {
		setFalg(!flag);
	};

	const handleChangeTab = (e, value) => {
		setTab({ activeTab: value });
	};

	useEffect(() => {
		const fetchInfo = async (characterId) => {
			let info = await axios.get(
				`https://rickandmortyapi.com/api/character/${characterId}`
			);
			let { data } = info;
			setData(data);
		};

		fetchInfo(activeTab);
	}, [activeTab, flag]);

	return (
		<div>
			<div>
				<Tooltip
					text="👾 Universal‍ records"
					enterDelay={200}
					leaveDelay={500}
					style={{
						opacity: "75%",
						marginLeft: "50px",
						backgroundColor: "aqua",
					}}
				>
					<Button onClick={handleClick} style={{ opacity: "75%" }}>
						Click me
					</Button>
				</Tooltip>
				{flag && (
					<div
						style={{
							margin: "auto",
							transform: "scale(.9,.9)",
							height: "100%",
							padding: "auto",
							opacity: "95%",
							width: "50%",
						}}
					>
						<Window
							style={{
								width: "80%",
								resize: "both",
								overflow: "auto",
								fontFamily: "ms_sans_serif",
								paddingLeft: "10px",
							}}
						>
							<WindowHeader> Database.exe</WindowHeader>
							<WindowContent>
								<Tabs rows={2} value={activeTab} onChange={handleChangeTab}>
									<Tab value="1">Rick</Tab>
									<Tab value="2">Morty</Tab>
									<Tab value="3">Summer</Tab>
									<Tab value="4">Beth </Tab>
									<Tab value="5">Jerry</Tab>
									<Tab value="11">Einstein</Tab>
									<Tab value="14">Alien Morty</Tab>
									<Tab value="34">Benjamin</Tab>
								</Tabs>
								<TabBody style={{ height: 450 }}>
									<p>
										Name: <mark>{data.name}</mark>
										<hr />
									</p>
									<div style={{ display: "flex", flexDirection: "row" }}>
										<img
											src={data.image}
											style={{
												width: "20%",
												height: "40%",
												imageRendering: "pixelated",
												padding: "2px",
											}}
										/>
										<br />
										<ul style={{ paddingLeft: "2%", textAlign: "left" }}>
											<li>Status: {data.status}</li>
											<li>Species: {data.species} </li>
											<li>Location: {data.location.name}</li>
											<li>Origin: {data.origin.name}</li>
										</ul>
									</div>
								</TabBody>
							</WindowContent>
						</Window>
					</div>
				)}
				{!flag && (
					<div
						style={{
							margin: "auto",
							transform: "scale(.9,.9)",
							height: "100%",
							padding: "auto",
							opacity: "95%",
							width: "50%",
						}}
					>
						<Window
							style={{
								width: "80%",
								resize: "both",
								overflow: "auto",
								fontFamily: "ms_sans_serif",
								paddingLeft: "10px",
							}}
						>
							<WindowHeader> Database.exe</WindowHeader>
							<WindowContent>
								<Tabs rows={2} value={activeTab} onChange={handleChangeTab}>
									<Tab id="1" value="1">
										Rick
									</Tab>
									<Tab value="2">Morty</Tab>
									<Tab value="3">Summer</Tab>
									<Tab value="4">Beth </Tab>
									<Tab value="5">Jerry</Tab>
									<Tab value="11">Einstein</Tab>
									<Tab value="14">Alien Morty</Tab>
									<Tab value="34">Benjamin</Tab>
								</Tabs>
								<TabBody style={{ height: 450 }}>
									<p>
										Name:
										<hr />
									</p>
									<div style={{ display: "flex", flexDirection: "row" }}>
										<img
											src={"/mugShot.jpg"}
											style={{
												width: "20%",
												height: "40%",
												imageRendering: "pixelated",
												padding: "2px",
												opacity: "80%",
											}}
										/>
										<br />
										<ul style={{ paddingLeft: "2%" }}>
											<li>Status: </li>
											<li>Species: </li>
											<li>Location: </li>
											<li>Origin: </li>
										</ul>
									</div>
								</TabBody>
							</WindowContent>
						</Window>
					</div>
				)}
			</div>
		</div>
	);
};
