const responsively = breakpointValues => cssProperty => (cssValues) => {
  const [defaultValue, ...responsiveValues] = cssValues;

  const parseValue = (value) => {
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
      `@media screen and (min-width: ${parseValue(breakpointValues[index])}) {
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
