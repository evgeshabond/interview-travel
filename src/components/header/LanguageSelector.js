import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import languagesList from '../../utils/getLanguagesList';
import {setLanguage} from '../../redux/settingsSlice';
import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  selectWrapper: {
    backgroundColor: 'inherit',
    paddingLeft: theme.spacing(1),
  },
}));

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.settings.language);
  const classes = useStyles();

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(setLanguage({language: e.target.value}));
  };

  return (
    <div className={classes.selectWrapper} >
      <select
        value={language}
        onChange={handleChange}>
        {languagesList.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
