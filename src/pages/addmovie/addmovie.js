import './addmovie.css'
import {Button, Card, TextField} from "@material-ui/core";
import { useState } from 'react';

const AddMovie =()=> {
    const [title, setTitle] = useState ('')
    return (
        <div className={'register-container'}>
            <Card className={'register-card'}>
                <h1>Inscription</h1>
                <TextField label="title"
                           type="search"
                           value={title}
                           onChange={event => setTitle(event.target.value)}
                           variant="outlined"/>
                <TextField label="description"
                           type="search"
                           variant="outlined"/>
                <TextField label="rating"
                           type="search"
                           variant="outlined"/>
                <Button variant="envoyer" color="primary">
                    Envoyer
                </Button>
            </Card>
        </div>
    )
}
export default AddMovie