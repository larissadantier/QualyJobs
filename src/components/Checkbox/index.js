import { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, InputCheckbox } from './styles';

export default function Checkbox({ children }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleIsChecked() {
    setIsChecked(!isChecked);
  }

  return (
    <Label>
      <InputCheckbox onChange={handleIsChecked} />
      <svg
        className={`checkbox ${isChecked ? 'checkbox-active' : ''}`}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke={isChecked ? '#fff' : 'none'}
        />
      </svg>
      <span className="text-checkbox">{children}</span>
    </Label>
  );
}

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
};
