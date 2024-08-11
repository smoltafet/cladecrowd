import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

function CheckoutModal({ amount, onClose }) {
  return (
    <Box sx={{ ...modalStyle }}>
      <Typography id="checkout-modal-title" variant="h6" component="h2">
        Checkout
      </Typography>
      <Typography id="checkout-modal-description" sx={{ mt: 2 }}>
        {/* Add your checkout form here */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Card Number"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Expiration Date"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="CVV"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Amount: ${amount}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // Handle payment logic here
          }}
          sx={{ mt: 2 }}
        >
          Pay Now
        </Button>
      </Typography>
    </Box>
  );
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default CheckoutModal;
