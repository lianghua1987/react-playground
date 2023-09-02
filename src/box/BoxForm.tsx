import {Component} from "react";
import {v4 as uuidv4} from 'uuid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class BoxForm extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {height: '', width: '', backgroundColor: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: any) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e: any) {
    e.preventDefault();

    this.props.onCreate({...this.state, id: uuidv4()});
    this.setState({height: '', width: '', backgroundColor: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          onChange={this.handleChange}
          defaultValue={this.state.height}
          label="Height"
          name="height"
          id="height"
          sx={{m: 1, width: '25ch'}}
          InputProps={{
            endAdornment: <InputAdornment position="end">px</InputAdornment>
          }}
        />
        <TextField
          onChange={this.handleChange}
          defaultValue={this.state.width}
          label="Width"
          name="width"
          id="width"
          sx={{m: 1, width: '25ch'}}
          InputProps={{
            endAdornment: <InputAdornment position="end">px</InputAdornment>
          }}
        />
        <TextField
          onChange={this.handleChange}
          defaultValue={this.state.backgroundColor}
          label="Background Color"
          name="backgroundColor"
          id="backgroundColor"
          sx={{m: 1, width: '25ch'}}
        />
        <div>
          <Button type="submit" variant="contained">Add</Button>
        </div>
      </form>
    );
  }
}

export default BoxForm;