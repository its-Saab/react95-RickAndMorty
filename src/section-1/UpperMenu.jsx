import windows1 from "react95/dist/themes/windows1";
import { List, ListItem} from "react95";

export const UpperMenu = (props) => {
	let theme = props.theme;

	return theme === windows1 ? (
		<List style={{ fontFamily: "ms_sans_serif" }}>
			<ListItem>👽 Distroy</ListItem>
			<ListItem>🔫 Kill</ListItem>
			<ListItem disabled>😴Sleep</ListItem>
		</List>
	) : (
		<List style={{ fontFamily: "ms_sans_serif" }}>
			<ListItem>👽 Travel</ListItem>
			<ListItem>🍺 Drink</ListItem>
			<ListItem>😴 Sleep</ListItem>
		</List>
	);
};
