import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export function SearchFilter({ items, onFilterChange }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    onFilterChange(newSearchText);
  };

  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder="Buscar..."
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      value={searchText}
      onChange={handleSearchChange}
    />
  );
}