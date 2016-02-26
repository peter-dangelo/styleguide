import React from 'react';
import { fieldProps, FieldBase} from './base.es6';

const Type = React.PropTypes;

class NumberField extends FieldBase {

  constructor() {
    super();
    this.units = this.units.bind(this);
  }

  units(){
    if(this.props.units) {
      return <span className={this.unitsClasses()}>{this.props.units}</span>
    }
  }

  unitsClasses() {
    var classes = ['units'];
    classes.push('grey-50');
    return classes.join(' ');
  }

  baseContainerClasses() {
    return ['number-field'];
  }

  validate(value=null) {
    if (!!value && Number.isNaN(+value)) {
      return ['Invalid number'];
    } else {
      return [];
    }
  }

  contents() {
    const {
      onBlur,
      onFocus,
      onKeyUp
    } = this.props;

    return  (
      <div>
        <input 
          disabled={this.props.disabled}
          type="number"
          readOnly={this.props.readOnly}
          name={this.props.name}
          id={this.props.name}
          onChange={(e) => this.handleChange(e.target.value)}
          {...{onBlur, onFocus, onKeyUp}}
        />
        <span className='icon-arrow-double relative'></span>
        {this.units()}
      </div>
    );
  }
};

NumberField.displayName = "NumberField";

NumberField.propTypes = Object.assign({
  units: Type.string
}, fieldProps);

export default NumberField;
