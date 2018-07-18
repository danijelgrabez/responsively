# Responsively
Responsively is created with the intention to easily adjust components with a responsive, mobile-first approach in mind; it may resemble single purpose classes (e.g. `.mt-0`, or `.mt-0--mobile`).

This library plays nicely with [emotion](https://emotion.sh/) and [styled components](https://www.styled-components.com/) since the code output is string.

## Usage
Responsively adjust the `value` of the passed property according to passed `breakpoints`. Breakpoints can be defined on a component/page basis, but it can also be defined across the whole app, depending on one's needs.

### Simple flow
1. Define breakpoints for responsively
2. Call the function with desired property and its responsive values
3. Done 😇

```javascript
import { css } from 'react-emotion';
import responsively from 'responsively';

const responsive = responsively([480, 768, 990, 1170]);

const baseStyles = css`${responsive('margin-top')([10, 20, 30, 40, 50])};`;

// or, add responsively directly to component

<Component className={css`${responsive('margin-top')([10, 20, 30, 40, 50])};`} />
```

## Install
```npm i responsively -S```

or,

```yarn add responsively```


## API
```javascript
responsively([breakpointsArray])(propertyName)([propertyArrayValues]);
```

### Arguments
* `breakpointsArray` — An array of breakpoint values
* `propertyName` — CSS property name
* `propertyArrayValues` — An array of values which maps to provided breakpoints. By default, the first value is applied without a media query, while the rest of the values are applied as children of media query selectors.

### `breakpointsArray` and `propertyArrayValues` values
* Support all unit kinds (px, em, rem, vw, vh, %, etc.).<br>
If a unitless value is passed, it will automatically convert to `px`.
```javascript
responsive('margin-top')([10, 20, 30, '4em', '5rem']);
```
will yield:
```css
margin-top: 10px;
@media screen and (min-width: 480px) {
  margin-top: 20px;
}
@media screen and (min-width: 768px) {
  margin-top: 30px;
}
@media screen and (min-width: 990px) {
  margin-top: 4em;
}
@media screen and (min-width: 1170px) {
  margin-top: 5rem;
}
```

* Clean output <br>
The number of generated breakpoints depends on the number of passed property values.
```javascript
responsive('margin')([10]);
responsive('padding')([10, 20]);
```
will yield:
```css
margin: 10px;
padding: 10px;
@media screen and (min-width: 480px) {
  margin-top: 20px;
}
```

* Shorthand values per breakpoint
```javascript
responsive('margin')(['10px 20px']);
```
will yield:
```css
margin: 10px 20px;
```

* Correction for common typos
```javascript
responsive('margin')(['10 20']);
responsive('padding')(['10px']);
```
will yield:
```css
margin: 10px 20px;
padding: 10px;
```

### Warning message
In case one passed more property values then there are breakpoint values, responsively provides the warning in the browser's console.
```javascript
const responsive = responsively([480, 768, 990, 1170]);
responsive('padding')([10, 20, 30, 40, 50, 60]); // first argument is `default value`
```
will compile the code, but the last value will be nested in undefined breakpoint:
```css
...

@media screen and (max-width: undefined) {
  padding: 60px;
}
```

Console warning message:

![responsively-warning](http://www.danijelgrabez.com/public-links/github/responsively/responsively-warning-message.png "Image of responsively warning message")


### Skipping breakpoint
If particular breakpoint needs to be skipped, `undefined` value should be passed:
```javascript
const responsive = responsively([480, 768, 990, 1170]);
responsive('padding')([undefined, 20, undefined, undefined, 60]);
```
will yield:
```css
...

@media screen and (max-width: 480px) {
  padding: 20px;
}
@media screen and (max-width: 1170px) {
  padding: 60px;
}
```

## TODO
- [ ] Merge exact shorthand values, e.g. `'10 10' → 10px`
- [ ] `¯\_(ツ)_/¯`


## Suggestions?
[Shoot me an email](mailto:danijel.grabez@gmail.com), or [submit an issue](https://github.com/danijelgrabez/responsively/issues) 🚀
