import windows1 from "react95/dist/themes/windows1";
import { List, ListItem} from "react95";

export const UpperMenu = (props) => {
	let theme = props.theme;

	return theme === windows1 ? (
		<List style={{ fontFamily: "ms_sans_serif" }}>
			<ListItem>๐ฝ Distroy</ListItem>
			<ListItem>๐ซ Kill</ListItem>
			<ListItem disabled>๐ดSleep</ListItem>
		</List>
	) : (
		<List style={{ fontFamily: "ms_sans_serif" }}>
			<ListItem>๐ฝ Travel</ListItem>
			<ListItem>๐บ Drink</ListItem>
			<ListItem>๐ด Sleep</ListItem>
		</List>
	);
};
