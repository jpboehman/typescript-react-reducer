import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, List, ListItem, Box, FormLabel } from '@material-ui/core';

type Props = {
    onSearch?: (critera: string) => void // void return type for updating state
}

export const Search = ({ onSearch }: Props) => {
    const [critera, setCriteria] = useState('');

    // const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => setCriteria(event.target.value);
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCriteria(event.target.value);
        if (onSearch) onSearch(event.target.value);
    }

    return (
        <div>
            <TextField label="Search" type="text" placeholder="Type something!" onInput={handleSearchChange} value={critera}></TextField>
        </div>
    )
}

export default Search
