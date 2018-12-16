import { css } from '@emotion/core';
import Responsively from '../../';

export const margin = ({ margin }) =>
  margin &&
  css`
    ${Responsively.responsive('margin')(margin)};
  `;

export const marginTop = ({ marginTop, mt }) =>
  (marginTop || mt) &&
  css`
    ${Responsively.responsive('margin-top')(marginTop || mt)};
  `;

export const marginRight = ({ marginRight, mr }) =>
  (marginRight || mr) &&
  css`
    ${Responsively.responsive('margin-right')(marginRight || mr)};
  `;

export const marginBottom = ({ marginBottom, mb }) =>
  (marginBottom || mb) &&
  css`
    ${Responsively.responsive('margin-bottom')(marginBottom || mb)};
  `;

export const marginLeft = ({ marginLeft, ml }) =>
  (marginLeft || ml) &&
  css`
    ${Responsively.responsive('margin-left')(marginLeft || ml)};
  `;
