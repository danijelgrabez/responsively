import { css } from '@emotion/core';
import Responsively from '../../';

export const height = ({ height }) =>
  height &&
  css`
    ${Responsively.responsive('height')(height)};
  `;

export const maxHeight = ({ maxHeight }) =>
  maxHeight &&
  css`
    ${Responsively.responsive('max-height')(maxHeight)};
  `;

export const minHeight = ({ minHeight }) =>
  minHeight &&
  css`
    ${Responsively.responsive('max-height')(minHeight)};
  `;

export const width = ({ width }) =>
  width &&
  css`
    ${Responsively.responsive('width')(width)};
  `;

export const maxWidth = ({ maxWidth }) =>
  maxWidth &&
  css`
    ${Responsively.responsive('max-width')(maxWidth)};
  `;

export const minWidth = ({ minWidth }) =>
  minWidth &&
  css`
    ${Responsively.responsive('max-width')(minWidth)};
  `;

export const lineHeight = ({ lineHeight, lh }) =>
  (lineHeight || lh) &&
  css`
    ${Responsively.responsive('line-height')(lineHeight || lh)};
  `;
