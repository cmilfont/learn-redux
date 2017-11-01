import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import TextField from 'material-ui/TextField';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'react-select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    flexDirection: 'column-reverse',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: 0,
    marginLeft: 5,
    marginTop: 15,
  },
  addItem: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  select: {
    minWidth: 200,
  }
});

class AddItem extends Component {

  state = {
    beer: '',
    qty: '',
  }

  changeOrigem = (selected) => {
    console.log("Selected origem: " + JSON.stringify(selected));

    this.setState({
      ...this.state,
      beer: selected.value,
    });
  }

  handleChange = name => event => {
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
  };

  create = () => {
    console.log(this.state);
  }


  getOptions = (input, callback) => {
    setTimeout(function() {
      console.log('input', input);
      callback(null, {
        options: [
          {
            value: 1,
            label: 'Abyssal',
          },
          {
            value: 2,
            label: 'Hop Madness',
          },
          {
            value: 3,
            label: 'Wit 5 Bier',
          },
          {
            value: 4,
            label: 'Hopsession',
          },
          {
            value: 5,
            label: 'Davi e Golias',
          }
        ],
        complete: true
      });
    }, 500);
  }

  render() {
    const { classes } = this.props;
    const { beer, qty } = this.state;

    return (
      <div className={classes.addItem}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="beer">Beer</InputLabel>
          <Select.Async
            id="beer"
            className={classes.select}
            placeholder="Beer"
            clearable={false}
            name="beer"
            value={beer}
            loadOptions={this.getOptions}
            onChange={this.changeOrigem}
          />
        </FormControl>

        <TextField
          id="qty"
          label="Quantity"
          className={classes.textField}
          value={qty}
          onChange={this.handleChange('qty')}
          margin="normal"
        />
        <Button
          fab
          color="accent"
          aria-label="edit"
          className={classes.button}
          onClick={this.create}
        >
          <ModeEditIcon />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(AddItem);
