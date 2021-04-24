import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {fade} from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {setText} from '../../redux/inputSlice';
import {useSelector, useDispatch} from 'react-redux';

const useStyles = makeStyles((theme) => createStyles({
  search: {
    'position': 'relative',
    'flexBasis': '16rem',
    'backgroundColor': fade(theme.palette.primary.light, 0.7),
    'height': '2rem',
    'borderRadius': '0.5rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    paddingLeft: '3rem',

  },
  inputRoot: {
    color: 'inherit',
  },
}));

const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const value = useSelector((state) => state.input.inputText);

  const onInputChange = (e) => {
    dispatch(setText({text: e.target.value}));
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={value}
        onChange={onInputChange}
        placeholder=''
        classes={{
          root: classes.inputRoot,
          input: classes.searchInput,
        }}
        inputProps={{'aria-label': 'search', 'autoFocus': true}}
      />
    </div>
  );
};

export default Search;
