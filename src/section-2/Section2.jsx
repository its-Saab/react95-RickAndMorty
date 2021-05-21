import styled from "styled-components";
import { EventFire } from "./EventFire";

const Wrapper2 = styled.div`
	background-image: url("/section-2-b.png");
	background-size: cover;
	height: 100%;
`;
export const Section2 = () => {
	return (
		<Wrapper2>
			<EventFire />
		</Wrapper2>
	);
};
