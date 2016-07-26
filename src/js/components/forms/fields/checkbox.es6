import assign from 'lodash.assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { fieldProps, FieldBase} from './base.es6';
import omit from '../../utils/omit';

const Type = React.PropTypes;

class CheckboxField extends FieldBase {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.renderOption = this.renderOption.bind(this);
  }

  baseContainerClasses() {
    return ['checkbox-field'];
  }

  onChange() {
    const values = [];
    const {
      elements
    } = ReactDOM.findDOMNode(this.refs.fieldset);

    for (let i = 0, len = elements.length; i < len; i++) {
      let {
        checked,
        value
      } = elements.item(i);

      if (checked) {
        values.push(value);
      }
    }

    this.handleChange(values);
  }

  renderOption(value, index, label) {
    const {
      defaultValue,
      readOnly
    } = this.props;

    // if options is an Array, the third argument in .map is that Array
    if (Array.isArray(label)) {
      label = null;
    }

    return (
      <label key={`${value}-${index}`} className="block py1">
        <input
          checked={readOnly ? defaultValue.includes(value) : null}
          defaultChecked={!readOnly && defaultValue.includes(value)}
          readOnly={readOnly}
          type="checkbox"
          value={value}
        />
        <span className="label-right">{label || value}</span>
      </label>
    );
  }

  getOptions() {
    const {
      options
    } = this.props;

    if (Array.isArray(options)) {
      return options.map(this.renderOption);
    } else {
      return Object.keys(options).map((value, index) => {
        return this.renderOption(value, index, options[value]);
      });
    }
  }

  contents() {
    const spreadProps = omit(this.props, 'onChange');

    return (
      <fieldset
        id={this.props.name}
        onChange={this.onChange}
        ref="fieldset"
        {...spreadProps}
      >
        {this.getOptions()}
      </fieldset>
    );
  }
};

CheckboxField.displayName = 'CheckboxField';

CheckboxField.propTypes = assign({
  options: Type.oneOfType([Type.object, Type.array]).isRequired,
}, fieldProps);

CheckboxField.defaultProps = assign({
  defaultValue: []
}, FieldBase.defaultProps);

export default CheckboxField;
