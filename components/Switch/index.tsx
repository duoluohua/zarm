import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { SwitchProps } from './PropsType';

function getChecked(props, defaultChecked) {
  if ('checked' in props && props.checked) {
    return props.checked;
  }
  if ('defaultChecked' in props && props.defaultChecked) {
    return props.defaultChecked;
  }
  return defaultChecked;
}

export { SwitchProps };

export default class Switch extends PureComponent<SwitchProps, any> {

  static defaultProps = {
    prefixCls: 'za-switch',
    theme: 'primary',
    disabled: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: getChecked(props, false),
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  }

  onValueChange = () => {
    const { disabled, onChange } = this.props;
    if (disabled) return;

    const checked = !this.state.checked;
    this.setState({ checked });
    typeof onChange === 'function' && onChange(checked);
  }

  render() {
    const { prefixCls, className, theme, disabled } = this.props;
    const { checked } = this.state;

    const cls = classnames(`${prefixCls}`, className, {
      [`theme-${theme}`]: !!theme,
      checked,
      disabled,
    });

    return (
      <span className={cls}>
        <input type="checkbox" className={`${prefixCls}-input`} disabled={disabled} checked={checked} onChange={this.onValueChange} />
      </span>
    );
  }
}