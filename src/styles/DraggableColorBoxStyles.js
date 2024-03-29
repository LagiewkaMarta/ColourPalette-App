import sizes from "../helpers/sizeHelpers";

export default {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		textTransform: 'uppercase',
		marginBottom: '-3.5px',
		'&:hover svg': {
			color: '#fff',
			transform: 'scale(1.3)',
		},
		[sizes.down("lg")]: {
			width: "25%",
			height: "20%"
		},
		[sizes.down("md")]: {
			width: "50%",
			height: "10%"
		},
		[sizes.down("sm")]: {
			width: "100%",
			height: "5%"
		},
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: 0,
		bottom: 0,
		padding: '10px',
		color: '#000',
		letterSpacing: '1px',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'space-between',
	},
	deleteIcon: {
		color: 'rgba(0,0,0,.5)',
		transition: 'all .3s ease-in-out',
	},
};
