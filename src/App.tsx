import { Box, Divider, Typography } from '@material-ui/core'
import React from 'react'

import Wiju1013wj from './wiju1013wj/Wiju1013wj'
const App = () => (
    <Box margin={4}>
        <Typography variant="h6" gutterBottom align="center">
            Heute ist der {new Date().toLocaleDateString()} - Viel Spaß
        </Typography>
        <Divider />
        {/* ab hier bitte eure "Einstiegskomponente" einfügen, bspw.: */}
        <Wiju1013wj />
    </Box>
)

export default App
