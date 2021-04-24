import {setTheme} from '../redux/settingsSlice';
import {useDispatch, useSelector} from 'react-redux';

const useToggleTheme = () => {
  const theme = useSelector((state) => state.settings.theme);
  const dispatch = useDispatch();
  const newTheme = theme === 'light' ?
                    'dark' :
                    'light';
  return () => dispatch(setTheme({theme: newTheme}));
};

export default useToggleTheme;
