import { DRAWER_WIDTH } from '../constants/constants';
import sizes from "../helpers/sizeHelpers";
const drawerWidth = DRAWER_WIDTH;

export default theme => ({
	root: {
		display: 'flex',
	},
	hide: {
		display: 'none',
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '64px',
	},
	appBarShift: {
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	navBtns: {
		marginRight: '.5rem',
		minWidth: '20vw',
		fontSize: ".5rem",

		[sizes.down("lg")]: {
			marginRight: 0,
			minWidth: "30vw",

		},

		[sizes.down("md")]: {
			marginRight: 0,
			minWidth: "40vw",

		},
		[sizes.down("xs")]: {
			marginRight: "1rem",
			minWidth: "50vw",

		},
		'& a': {
			textDecoration: 'none',
		},
	},
});
