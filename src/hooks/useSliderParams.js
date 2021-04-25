import useMediaQuery from '@material-ui/core/useMediaQuery';

const useSliderParams = () => {
  const params = {
    big: {slides: 3, spaceBetween: 20},
    medium: {slides: 2, spaceBetween: 10},
    small: {slides: 1, spaceBetween: 0},
  };
  const isBig = useMediaQuery('(min-width:768px)');
  const isMedium = useMediaQuery('(min-width:500px)');
  if (isBig) return params.big;
  if (isMedium) return params.medium;
  return params.small;
};

export default useSliderParams;
