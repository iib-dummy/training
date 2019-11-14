import { Box, Divider, Typography } from '@material-ui/core'
import React from 'react'

import Fhi from './fhi/Fhi'
import TeamDone from './TeamDone/TeamDone'
import Vicropht from './vicropht/vicropht'
import Kakerlake from './Kakerlake/Kakerlake'
import Wiju1013wj from './wiju1013wj/Wiju1013wj'
import Ts from './teamsalbei/Ts'

const App = () => (
    <Box margin={4}>
        <Typography variant="h6" gutterBottom align="center">
            Heute ist der {new Date().toLocaleDateString()} - Viel Spaß
        </Typography>
        <Divider />
        <Fhi />
        <TeamDone />
        <Vicropht />
        <Kakerlake />
        <Wiju1013wj />
        <Ts />
    </Box>
)

export default App
