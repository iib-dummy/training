import { TextField } from '@material-ui/core'
import React from 'react'

const vicropht = () => <TextField margin="dense" fullWidth label="vicropht" />

class MyForm extends React.Component {
    constructor() {
        super()
        this.state = { id: null }
    }
    handleChange = event => {
        this.setState({ id: event.target.value })
    }
    handleSubmit = event => {
        //Make a network call somewhere
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField floatingLabelText="ID Number" onChange={this.handleChange} />
                <RaisedButton label="Submit" type="submit" />
            </form>
        )
    }
}

export default vicropht
