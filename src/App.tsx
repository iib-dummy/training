import { Box, Divider, Typography } from '@material-ui/core'
import React from 'react'

import Fhi from './fhi/Fhi'

const App = () => (
    <Box margin={4}>
        <Typography variant="h6" gutterBottom align="center">
            heute ist der {new Date().toLocaleDateString()} - viel Spaß
        </Typography>
        <Divider />
        {/* ab hier bitte eure "Einstiegskomponente" einfügen, bspw.: */}
        <Fhi />
    </Box>
)

export default App
