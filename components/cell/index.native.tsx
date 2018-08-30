import React, { PureComponent, CSSProperties } from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    ViewStyle,
} from 'react-native';
import PropsType from './PropsType';
import cellStyle from './style/index.native';

export interface CellProps extends PropsType {
  style?: CSSProperties;
  styles?: typeof cellStyle;
}

const cellStyles = StyleSheet.create<any>(cellStyle);

export default class Cell extends PureComponent<CellProps, any> {
  static defaultProps = {
    active: false,
    styles: cellStyles,
  };

  constructor(props) {
    super(props);
    this.state = {
      isActive: props.active,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('active' in nextProps) {
      this.setState({ isActive: nextProps.active });
    }
  }

  onPressIn = () => {
    this.setState({ isActive: true });
  }

  onPressOut = () => {
    this.setState({ isActive: false });
  }

  render() {
    const {
      hasArrow,
      icon,
      title,
      description,
      help,
      style,
      styles,
      onClick,
      children,
      ...others
    } = this.props;

    const wrapperStyle = [
      styles!.wrapperStyle,
      style,
    ] as ViewStyle;
    const cellContentStyle = [
      styles!.cellContentStyle,
    ] as ViewStyle;
    const cellLineContainerStyle = [
      icon ? styles!.cellLineHasiconLeft : styles!.cellLineLeft,
    ] as ViewStyle;
    const cellLineStyle = [
      styles!.cellLineStyle,
    ] as ViewStyle;
    const containerStyle = [
      styles!.containerStyle,
    ] as ViewStyle;
    const bodyStyle = [
      styles!.bodyStyle,
      description ? styles!.flexDirectionColumn : styles!.flexDirectionRow,
      description ? styles!.alignItemsStart : styles!.alignItemsCenter,
    ] as ViewStyle;
    const iconStyle = [
      styles!.iconStyle,
    ] as ViewStyle;
    const titleStyle = [
      description && styles!.paddingBottom,
    ] as ViewStyle;
    const arrowStyle = [
      styles!.arrowStyle,
    ] as ViewStyle;
    const helpStyle = [
      styles!.helpStyle,
    ] as ViewStyle;
    const contentStyle = [
      !onClick && wrapperStyle,
    ] as ViewStyle;

    const underlayColor = (StyleSheet.flatten(styles!.underlayColorStyle) as any).backgroundColor;

    const iconRender = icon && <View style={iconStyle}>{icon}</View>;
    const titleRender = title && <View style={titleStyle}>{title}</View>;
    const descriptionRender = description && <View>{description}</View>;
    const arrowRender = hasArrow && <View style={arrowStyle}/>;
    const helpRender = help && <View style={helpStyle}>{help}</View>;
    const contentRender = <View style={wrapperStyle}>
      <View style={cellLineContainerStyle}>
        <View style={cellLineStyle}/>
      </View>
      <View style={cellContentStyle}>
        <View style={containerStyle}>
          {iconRender}
          <View style={bodyStyle}>
            {titleRender}
            {children}
          </View>
          {descriptionRender}
          {arrowRender}
        </View>
        {helpRender}
      </View>
    </View>;
    const wrapperProps = Object.assign({ stlye: contentStyle, onPress: onClick,
      onPressIn: this.onPressIn, onPressOut: this.onPressOut }, others);
    return onClick
      ? <TouchableHighlight {...wrapperProps} underlayColor={underlayColor}>{contentRender}</TouchableHighlight>
      : (contentRender);
  }
}
