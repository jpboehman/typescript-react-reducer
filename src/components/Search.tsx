import React, { useState, ChangeEvent } from 'react';
import { TextField, Button, List, ListItem, Box, FormLabel } from '@material-ui/core';

export const Search = () => {
    const [critera, setCriteria] = useState('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => setCriteria(event.target.value);

    return (
        <div>
            <TextField label="Search" type="text" placeholder="Type something!" onChange={handleSearchChange} value={critera}></TextField>
        </div>
    )
}

export default Search
