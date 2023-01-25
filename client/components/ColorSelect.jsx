import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const ColorSelect= (props) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value ? event.target.value : 'EMPTY BABY')
  };

  return (
    <div>
      <FormControl variant="standard"
       sx={{ m: 1, minWidth: 120, width: 150,
        '& label': {
          fontSize: '1.3rem',
        },
        '& label.Mui-focused': {
          color: '#000000',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#333',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#333',
          },
          '& input': {
            fontSize: '0.8rem',
          },
          '&:hover fieldset': {
            borderColor: 'green',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'green',
          }
        },
        }}>
        <InputLabel id="demo-simple-select-standard-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Color"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'red'}>Red</MenuItem>
          <MenuItem value={'orange'}>Orange</MenuItem>
          <MenuItem value={'yellow'}>Yellow</MenuItem>
          <MenuItem value={'green'}>Green</MenuItem>
          <MenuItem value={'blue'}>Blue</MenuItem>
          <MenuItem value={'purple'}>Purple</MenuItem>
          <MenuItem value={'pink'}>Pink</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ColorSelect;