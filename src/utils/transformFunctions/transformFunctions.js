import { css } from '@emotion/core';
import Responsively from '../../';

export const transform = ({ transform }) =>
  transform &&
  css`
    ${Responsively.responsive('transform')(transform)};
  `;

export const transformOrigin = ({ transformOrigin }) =>
  transformOrigin &&
  css`
    ${Responsively.responsive('transform-origin')(transformOrigin)};
  `;
