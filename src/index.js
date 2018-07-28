const responsively = breakpointValues => cssProperty => (cssValues) => {
  const [defaultValue, ...responsiveValues] = cssValues;
  const unitlessProperties = [
    'animation-iteration-count',
    'border-image-slice',
    'border-image-width',
    'column-count',
    'counter-increment',
    'counter-rese',
    'flex',
    'flex-grow',
    'flex-shrink',
    'font-size-adjust',
    'font-weight',
    'line-height',
    'nav-index',
    'opacity',
    'order',
    'orphans',
    'tab-size',
    'widows',
    'z-index',
    'pitch-range',
    'richness',
    'speech-rate',
    'stress',
    'volume',
    'flood-opacity',
    'mask-box-outset',
    'mask-border-outset',
    'mask-box-width',
    'mask-border-width',
    'shape-image-threshold',
  ];

  const parseValue = (value) => {
    if (unitlessProperties.indexOf(cssProperty) > -1) {
      return value;
    } else if (/^[\d\s]+$/.test(value)) {
      return value
        .toString()
        .split(' ')
        .map(shorthandArgs => `${shorthandArgs.replace(/\D/g, '')}px`)
        .join(' ');
    }

    return value;
  };

  const parseBreakpointValue = (value) => {
    if (/^[\d\s]+$/.test(value)) {
      return value
        .toString()
        .split(' ')
        .map(shorthandArgs => `${shorthandArgs.replace(/\D/g, '')}px`)
        .join(' ');
    }
    return value;
  };

  /* eslint-disable no-confusing-arrow */
  const renderBreakpoints = (value, index) =>
    value ?
      `@media screen and (min-width: ${parseBreakpointValue(breakpointValues[index])}) {
        ${cssProperty}: ${parseValue(value)};
      }` : '';

  const defaultStyle = () => defaultValue ? `${cssProperty}: ${parseValue(defaultValue)};` : '';
  /* eslint-enable no-confusing-arrow */

  const responsiveStyles = () => {
    const responsiveStylesArray = [];

    for (let i = 0; i < responsiveValues.length; i += 1) {
      responsiveStylesArray.push(renderBreakpoints(responsiveValues[i], i));
    }

    return responsiveStylesArray
      .toString()
      .split(',')
      .join(' ');
  };

  if (cssValues.length > breakpointValues.length + 1) {
    /* eslint-disable-next-line max-len, no-console */
    return console.warn(`This function accepts ${breakpointValues.length + 1}, while you entered ${cssValues.length} arguments.
    ¯\\_(ツ)_/¯ Please check your resonsively function.`);
  }

  return `${defaultStyle()}${responsiveStyles()}`;
};

export default responsively;
