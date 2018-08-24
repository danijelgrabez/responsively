import { css } from 'react-emotion';
import Responsively from '../../';

export const position = ({ position }) =>
  position &&
  css`
    ${Responsively.responsive('position')(position)};
  `;

export const top = ({ top }) =>
  top &&
  css`
    ${Responsively.responsive('top')(top)};
  `;

export const right = ({ right }) =>
  right &&
  css`
    ${Responsively.responsive('right')(right)};
  `;

export const bottom = ({ bottom }) =>
  bottom &&
  css`
    ${Responsively.responsive('bottom')(bottom)};
  `;

export const left = ({ left }) =>
  left &&
  css`
    ${Responsively.responsive('left')(left)};
  `;

export const zIndex = ({ zIndex }) =>
  zIndex &&
  css`
    ${Responsively.responsive('z-index')(zIndex)};
  `;

export const overflow = ({ overflow }) =>
  overflow &&
  css`
    ${Responsively.responsive('overflow')(overflow)};
  `;

export const verticalAlign = ({ verticalAlign }) =>
  verticalAlign &&
  css`
    ${Responsively.responsive('vertical-align')(verticalAlign)};
  `;

export const clip = ({ clip }) =>
  clip &&
  css`
    ${Responsively.responsive('clip')(clip)};
  `;
