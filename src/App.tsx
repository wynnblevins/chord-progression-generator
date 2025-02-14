import React from "react"
import './App.css';
import ChordProgressionDisplay from "./components/ChordProgressionDisplay";
import { 
  FormControl, 
  FormControlLabel, 
  FormGroup, 
  MenuItem, 
  Select, 
  SelectChangeEvent, 
  Switch 
} from "@mui/material";

export enum Progression {
  I_ii_VI_IV = "I ii VI IV",
  I_IV_V = "I IV V",
  I_vi_IV_V = "I vi IV V",
  I_V_iii_vi = "I V iii vi",
  I_V_vi_IV = "I V vi IV",
  i_iv_v_i = "i iv v i",
  i_III_i_VII = "i III i VII",
  i_iidim7_v_i = "i ii°7 v i",
  i_bVI_bIII_bVII = "i bVII bIII bVII",
  i_bVII_bVI_bVII_i = "i bVII bVI bVII i",
  i_bVII_bVI_V7 = "i bVII bVI V7"
}

export enum Key {
  C = "C",
  G = "G",
  D = "D",
  A = "A",
  E = "E",
  B = "B",
  Gb = "Gb",
  Db = "Db",
  Ab = "Ab",
  Eb = "Eb",
  Bb = "Bb",
  F = "F",
}

const App = () => {
  const [state, setState] = React.useState({
    major: true,
    musicKey: Key.C as string,
    progressionList: [] as any[],
    progression: Progression.I_IV_V
  });

  const handleMajorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      major: event.target.checked,
      progression: event.target.checked ? Progression.I_IV_V : Progression.i_III_i_VII
    });
  };

  const handleProgressionChange = (event: SelectChangeEvent) => {
    setState({
      ...state,
      progression: event.target.value as Progression
    });
  };

  const handleKeyChange = (event: SelectChangeEvent) => {
    setState({
      ...state,
      musicKey: event.target.value as any
    });
  };
  
  return (
    <>
      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={state.major} onChange={handleMajorChange} name="Major" />
            }
            label="Major"
          />
        </FormGroup>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>

        <Select
          labelId="keySelectLabel"
          id="keySelect"
          value={state.musicKey}
          onChange={handleKeyChange}
        >
          <MenuItem value="C">C</MenuItem>
          <MenuItem value="G">G</MenuItem>
          <MenuItem value="D">D</MenuItem>
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="E">E</MenuItem>
          <MenuItem value="B">B</MenuItem>
          <MenuItem value="Gb">Gb/F#</MenuItem>
          <MenuItem value="Db">Db</MenuItem>
          <MenuItem value="Ab">Ab</MenuItem>
          <MenuItem value="Eb">Eb</MenuItem>
          <MenuItem value="Bb">Bb</MenuItem>
          <MenuItem value="F">F</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        { state.major ? (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.progression}
            label="Age"
            onChange={handleProgressionChange}
          >
            <MenuItem value={Progression.I_IV_V}>{Progression.I_IV_V}</MenuItem>
            <MenuItem value={Progression.I_V_iii_vi}>{Progression.I_V_iii_vi}</MenuItem>
            <MenuItem value={Progression.I_V_vi_IV}>{Progression.I_V_vi_IV}</MenuItem>
            <MenuItem value={Progression.I_ii_VI_IV}>{Progression.I_ii_VI_IV}</MenuItem>
            <MenuItem value={Progression.I_vi_IV_V}>{Progression.I_vi_IV_V}</MenuItem>
          </Select>
        ) : (
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.progression}
            label="Age"
            onChange={handleProgressionChange}
          >
            <MenuItem value={Progression.i_III_i_VII}>{Progression.i_III_i_VII}</MenuItem>
            <MenuItem value={Progression.i_iv_v_i}>{Progression.i_iv_v_i}</MenuItem>
            <MenuItem value={Progression.i_iidim7_v_i}>{Progression.i_iidim7_v_i}</MenuItem>
            <MenuItem value={Progression.i_bVII_bVI_bVII_i}>{Progression.i_bVII_bVI_bVII_i}</MenuItem>
            <MenuItem value={Progression.i_bVII_bVI_V7}>{Progression.i_bVII_bVI_V7}</MenuItem>
          </Select> 
        )
      }
      </FormControl>
      
      <ChordProgressionDisplay 
        musicKey={state.musicKey} 
        major={state.major} 
        progression={state.progression}
      ></ChordProgressionDisplay>
    </>
  ) 
}

export default App
