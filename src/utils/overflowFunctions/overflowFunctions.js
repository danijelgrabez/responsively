import { css } from '@emotion/core';
import Responsively from '../../';

export const overflow = ({ overflow }) =>
  overflow &&
  css`
    ${Responsively.responsive('overflow')(overflow)};
  `;

export const overflowX = ({ overflowX }) =>
  overflowX &&
  css`
    ${Responsively.responsive('overflow-x')(overflowX)};
  `;

export const overflowY = ({ overflowY }) =>
  overflowY &&
  css`
    ${Responsively.responsive('overflow-y')(overflowY)};
  `;
