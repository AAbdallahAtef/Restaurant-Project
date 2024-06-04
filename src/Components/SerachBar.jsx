import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 6, 
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '50%', // Equivalent to col-md-6
    margin: '0 auto', // Center the search bar
  },
  border: `1px solid ${alpha(theme.palette.common.black, 0.2)}`,
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4), // Added margin-bottom for suggestions list
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  paddingLeft: '15px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingRight: `calc(1em + ${theme.spacing(4)})`, 
    transition: theme.transitions.create('width'),
  },
}));

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (query) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => {
          if (response.data.meals) {
            setSuggestions(response.data.meals);
            setOpen(true);
          } else {
            setSuggestions([]);
            setOpen(false);
          }
        })
        .catch(error => {
          console.error('Error fetching the meals:', error);
          setSuggestions([]);
          setOpen(false);
        });
    } else {
      setSuggestions([]);
      setOpen(false);
    }
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', marginTop: 4 }}>
      <Search>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={query}
          onChange={handleChange}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </Search>
      {open && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Paper style={{ position: 'absolute', zIndex: 0, marginTop: "2.5rem", width: '50%' }}>
            <List>
              {suggestions.map((meal) => (
                <ListItem key={meal.idMeal} button>
                  <ListItemText primary={meal.strMeal} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </ClickAwayListener>
      )}
    </Box>
  );
};

export default SearchBar;
