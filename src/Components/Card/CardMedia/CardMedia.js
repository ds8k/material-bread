import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import withTheme from '../../../Theme/withTheme';

class CardMedia extends Component {
  static propTypes = {
    children: PropTypes.node,
    image: PropTypes.node,
    style: PropTypes.object,
    title: PropTypes.string,
    titleStyles: PropTypes.object,
    subtitle: PropTypes.string,
    subtitleStyles: PropTypes.string,
    height: PropTypes.number,
  };

  static defaultProps = {
    height: 194,
  };

  _renderText() {
    return (
      <View style={styles.textContainer}>
        {this._renderTitle()}
        {this._renderSubtitle()}
      </View>
    );
  }

  _renderTitle() {
    const { title, titleStyles } = this.props;
    if (!title) return null;
    return <Text style={[styles.title, titleStyles]}>{title}</Text>;
  }

  _renderSubtitle() {
    const { subtitle, subtitleStyles } = this.props;
    if (!subtitle) return null;
    return <Text style={[styles.subtitle, subtitleStyles]}>{subtitle}</Text>;
  }

  render() {
    const { image, style, height } = this.props;
    return (
      <View style={[styles.container, { height: height }, style]}>
        {image}
        {this._renderText()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    left: 16,
    bottom: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
    color: 'rgba(255,255,255,.87)',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(255,255,255,.87)',
  },
});

export default withTheme(CardMedia);