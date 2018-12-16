import { css } from '@emotion/core';
import Responsively from '../../';

export const color = ({ color }) =>
  color &&
  css`
    ${Responsively.responsive('color')(color)};
  `;

export const direction = ({ direction }) =>
  direction &&
  css`
    ${Responsively.responsive('direction')(direction)};
  `;

export const lineHeight = ({ lineHeight }) =>
  lineHeight &&
  css`
    ${Responsively.responsive('line-height')(lineHeight)};
  `;

export const letterSpacing = ({ letterSpacing }) =>
  letterSpacing &&
  css`
    ${Responsively.responsive('letter-spacing')(letterSpacing)};
  `;

export const textAlign = ({ textAlign }) =>
  textAlign &&
  css`
    ${Responsively.responsive('text-align')(textAlign)};
  `;

export const textDecoration = ({ textDecoration }) =>
  textDecoration &&
  css`
    ${Responsively.responsive('text-decoration')(textDecoration)};
  `;

export const textIndent = ({ textIndent }) =>
  textIndent &&
  css`
    ${Responsively.responsive('text-indent')(textIndent)};
  `;

export const textShadow = ({ textShadow }) =>
  textShadow &&
  css`
    ${Responsively.responsive('text-shadow')(textShadow)};
  `;

export const textTransform = ({ textTransform }) =>
  textTransform &&
  css`
    ${Responsively.responsive('text-transform')(textTransform)};
  `;

export const textOverflow = ({ textOverflow }) =>
  textOverflow &&
  css`
    ${Responsively.responsive('text-overflow')(textOverflow)};
  `;

export const unicodeBidi = ({ unicodeBidi }) =>
  unicodeBidi &&
  css`
    ${Responsively.responsive('unicode-bidi')(unicodeBidi)};
  `;

export const whiteSpace = ({ whiteSpace }) =>
  whiteSpace &&
  css`
    ${Responsively.responsive('white-space')(whiteSpace)};
  `;

export const wordSpacing = ({ wordSpacing }) =>
  wordSpacing &&
  css`
    ${Responsively.responsive('word-spacing')(wordSpacing)};
  `;
