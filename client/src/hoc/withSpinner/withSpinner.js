import Spinner from '../../components/UI/Spinner/Spinner';

const withSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default withSpinner;
