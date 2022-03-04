import PropTypes from 'prop-types';
import { StyledInput } from './styles';

export default function Input({ maxWidth, height, placeholder }) {
  return <StyledInput maxWidth={maxWidth} height={height} placeholder={placeholder} />;
}

Input.propTypes = {
  maxWidth: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};
