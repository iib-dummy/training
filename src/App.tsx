import { Box, Divider, TextField, Typography } from '@material-ui/core'
import React from 'react'

import vicropht from './vicropht/vicropht'

const App = () => (
    <Box margin={4}>
        <Typography variant="h6" gutterBottom align="center">
            heute ist der {new Date().toLocaleDateString()} - viel Spaß
        </Typography>
        <Divider />
        <TextField>Hier wird der Text Field benutzt</TextField>
    </Box>
)

export default App
