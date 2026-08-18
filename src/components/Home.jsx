import React from 'react';
import homeImage from '../assets/image/restaurant.png';



function Home() {
  return (
    <>
    <center>
   
    <img src={homeImage} alt="Veg Items" width="1100"  height="650"/>
    <h6>after first git push changes</h6>
    </center>
    </>
  )
}

export default Home;

/*import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  Switch,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Autocomplete,
  Rating,
  Typography,
  Divider
} from "@mui/material";



      Material‑UI (MUI) is a popular React component library that implements Google’s Material Design system. 
      Instead of writing all your CSS from scratch, MUI gives you a set of ready‑made, customizable UI 
      components (like buttons, cards, dialogs, grids, navbars) that are consistent, accessible, and responsiveout of the box.
       Pre‑built components → You get polished UI elements like Button, Card, Dialog, AppBar without reinventing them.



function Home() {
  const [fee, setFee] = useState(50);

  const handleFeeChange = (event, newValue) => {
    setFee(newValue);
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",   
        minHeight: "100vh",
        padding: "2rem"
      }}
    >
      <div className="card shadow-lg p-4" style={{ backgroundColor: "#f5f5f5", color: "purple" }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "purple" }}>
          Customer Payment Details
        </Typography>
        <Divider className="mb-4" sx={{ backgroundColor: "purple" }} />

        
        <h5 className="mb-3" style={{ color: "purple" }}>Customer Details</h5>
        <div className="row mb-3">
          <div className="col-md-6">
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              InputLabelProps={{ style: { color: "purple" } }}
              sx={{ input: { color: "purple" } }}
            />
          </div>
          <div className="col-md-6">
            <TextField
              fullWidth
              label="Email Address"
              variant="filled"
              InputLabelProps={{ style: { color: "purple" } }}
              sx={{ input: { color: "purple" } }}
            />
          </div>
        </div>

        
        <h5 className="mt-4 mb-3" style={{ color: "purple" }}>Preferences to Contact</h5>
        <div className="d-flex gap-4 mb-3">
          <FormControlLabel control={<Switch defaultChecked />} label="Mobile" sx={{ color: "purple" }} />
          <FormControlLabel control={<Switch />} label="Email" sx={{ color: "purple" }} />
        </div>

        
        <h5 className="mb-3" style={{ color: "purple" }}>Select Age</h5>
        <FormControl fullWidth className="mb-3">
          <Select defaultValue={20} sx={{ color: "purple" }}>
            <MenuItem value={18}>18–25</MenuItem>
            <MenuItem value={26}>26–35</MenuItem>
            <MenuItem value={36}>36–50</MenuItem>
          </Select>
        </FormControl>

        
        <h5 className="mb-3" style={{ color: "purple" }}>Select Items</h5>
        <Autocomplete
          options={["Chilly Paneer", "Egg Roll", "Chiily Chiken","Fish Fry","Chilly Chicken"]}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Course"
              InputLabelProps={{ style: { color: "purple" } }}
              sx={{ input: { color: "purple" } }}
            />
          )}
          className="mb-3"
        />

        
        <h5 className="mb-3" style={{ color: "purple" }}>Price</h5>
        <Slider
          value={fee}
          onChange={handleFeeChange}
          step={10}
          marks
          min={10}
          max={100}
          valueLabelDisplay="auto"
          sx={{ color: "purple" }}
        />
        <p className="mt-2" style={{ color: "purple" }}>Selected Price: ₹{fee}00</p>

        
        <h5 className="mb-3" style={{ color: "purple" }}>Payment Method</h5>
        <RadioGroup defaultValue="credit" row>
          <FormControlLabel value="credit" control={<Radio />} label="Credit Card" sx={{ color: "purple" }} />
          <FormControlLabel value="debit" control={<Radio />} label="Debit Card" sx={{ color: "purple" }} />
        </RadioGroup>

        
        <h5 className="mb-3" style={{ color: "purple" }}>Agreements</h5>
        <div className="d-flex gap-4 mb-3">
          <FormControlLabel control={<Checkbox />} label="Accept Terms & Conditions" sx={{ color: "purple" }} />
          <FormControlLabel control={<Checkbox />} label="Subscribe to Newsletter" sx={{ color: "purple" }} />
        </div>

       
        <h5 className="mb-3" style={{ color: "purple" }}>Rate Your Experience</h5>
        <center>
          <Rating defaultValue={3} precision={0.5} className="mb-3" />
        </center>

        
        <div className="d-flex justify-content-center mb-3">
          <Button variant="contained" sx={{ backgroundColor: "purple", color: "white" }}>
            Submit Form
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;*/




