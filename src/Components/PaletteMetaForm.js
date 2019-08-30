import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

export default class PaletteMetaForm extends Component {
	state = {
    stage: "name",
		open: true,
		newPaletteName: '',
	};

	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
			this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
		);
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

  showEmojiPicker = () => {
    this.setState({stage: "emoji"})
  }

  savePalette = (emoji) => {
    this.props.handleSubmit({paletteName: this.state.newPaletteName, emoji: emoji.native})
  }

	render() {
		const { newPaletteName } = this.state;
		const { hideForm, handleSubmit } = this.props;
		return (
      <>
      <Dialog open={this.state.stage === "emoji"} onClose={this.handleClose}>
      <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
      <Picker onSelect={this.savePalette} title="Pick your emoji…" emoji="point_up" />
      </Dialog>

			<Dialog open={this.state.stage === "name"} onClose={this.handleClose} aria-labelledby="form-dialog-title" onClose={hideForm}>
				<DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
				<ValidatorForm onSubmit={this.showEmojiPicker}>
					<DialogContent>
						<DialogContentText>
							Please enter a name for your new beautiful palette. Make sure it's unique!
						</DialogContentText>
						<TextValidator
							label="Palette Name"
							value={newPaletteName}
							name="newPaletteName"
							onChange={this.handleChange}
							fullWidth
							margin="normal"
							validators={['required', 'isPaletteNameUnique']}
							errorMessages={['Enter Palette Name', 'Name already used']}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={hideForm} color="primary">
							Cancel
						</Button>
						<Button variant="contained" color="primary" type="submit">
							Save Palette
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
      </>
		);
	}
}
