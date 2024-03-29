import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PaletteFormNav from './PaletteFormNav';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// form validator
import { ValidatorForm } from 'react-material-ui-form-validator';
// color picker
import ColorPickerForm from './ColorPickerForm';
import { Button } from '@material-ui/core';
import DraggableColorList from './DraggableColorList';

import arrayMove from 'array-move';
import styles from '../styles/NewPaletteFormStyles';

class NewPaletteForm extends React.Component {
	static defaultProps = {
		maxColors: 20,
	};
	state = {
		open: false,
		colors: [],
	};

	componentDidMount() {
		ValidatorForm.addValidationRule('isColorNameUnique', value =>
			this.state.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
		);
		ValidatorForm.addValidationRule('isColorUnique', value =>
			this.state.colors.every(({ color }) => color !== this.state.currentColor)
		);
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	handleSubmit = newPalette => {
		newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
		newPalette.colors = this.state.colors;
		this.props.savePalette(newPalette);
		this.props.history.push('/');
	};

	addNewColor = newColor => {
		this.setState(prevState => ({
			colors: [...prevState.colors, newColor],
			newName: '',
		}));
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleDeleteColor = name => {
		this.setState({
			colors: this.state.colors.filter(color => color.name !== name),
		});
	};

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex),
		}));
	};

	clearColors = () => {
		this.setState({
			colors: [],
		});
	};
	addRandomColor = () => {
		let allColors = this.props.palettes.map(p => p.colors).flat();
		let randClr;
		let pickedClr;
		let isClrDuplicate = true;
		//making sure we don't add a duplicate color
		while (isClrDuplicate) {
			randClr = Math.floor(Math.random() * allColors.length);
			pickedClr = allColors[randClr];
			console.log(pickedClr)
			isClrDuplicate = this.state.colors.some(clr => clr.name === pickedClr.name);
		}

		this.setState({
			colors: [...this.state.colors, pickedClr],
		});
	};
	render() {
		const { classes, maxColors, palettes } = this.props;
		const { open, colors } = this.state;
		const paletteFull = colors.length >= maxColors;
		return (
			<div className={classes.root}>
				<PaletteFormNav
					open={open}
					classes={classes}
					paletteFull={paletteFull}
					palettes={palettes}
					handleSubmit={this.handleSubmit}
					handleDrawerOpen={this.handleDrawerOpen}
					handleDrawerClose={this.handleDrawerClose}
				/>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<div className={classes.container}>
						<Typography variant="h4"> Design Your Palette </Typography>
						<div className={classes.buttons}>
							<Button variant="contained" color="secondary" onClick={this.clearColors}>
								Clear Palette
							</Button>
							<Button
								variant="contained"
								color="primary"
								onClick={this.addRandomColor}
								disabled={paletteFull}
							>
								Random Color
							</Button>
						</div>

						<ColorPickerForm paletteFull={paletteFull} addNewColor={this.addNewColor} />
					</div>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<div className={classes.drawerHeader} />
					<DraggableColorList
						colors={this.state.colors}
						handleDeleteColor={this.handleDeleteColor}
						axis="xy"
						onSortEnd={this.onSortEnd}
					/>
				</main>
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
