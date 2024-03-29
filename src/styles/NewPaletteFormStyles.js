import { DRAWER_WIDTH } from '../constants/constants';
const drawerWidth = DRAWER_WIDTH;

export default theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		height: '100vh',
	},
	drawerPaper: {
		width: drawerWidth,
		display: 'flex',
		alignItems: 'center',
	},
	drawerHeader: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		padding: 0,
		flexGrow: 1,
		height: 'calc(100vh - 64px)',
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	container: {
		width: '90%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttons: {
		width: '100%',
	},
	button: {
		width: '50%',
	},
});
