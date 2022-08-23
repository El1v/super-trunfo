import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { type, name, value, onChange, label, dataTestid } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <textarea
          data-testid={ dataTestid }
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  // key: PropTypes.string,
  // limit: PropTypes.number,
  // label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.function,
}.isRequired;

export default Textarea;
