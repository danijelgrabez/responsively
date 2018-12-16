import { css } from '@emotion/core';
import Responsively from '../../';

export const font = ({ font }) =>
  font &&
  css`
    ${Responsively.responsive('font')(font)};
  `;

export const fontFamily = ({ fontFamily }) =>
  fontFamily &&
  css`
    ${Responsively.responsive('font-family')(fontFamily)};
  `;

export const fontSize = ({ fontSize }) =>
  fontSize &&
  css`
    ${Responsively.responsive('font-size')(fontSize)};
  `;

export const fontSizeAdjust = ({ fontSizeAdjust }) =>
  fontSizeAdjust &&
  css`
    ${Responsively.responsive('font-size-adjust')(fontSizeAdjust)};
  `;

export const fontStretch = ({ fontStretch }) =>
  fontStretch &&
  css`
    ${Responsively.responsive('font-stretch')(fontStretch)};
  `;

export const fontStyle = ({ fontStyle }) =>
  fontStyle &&
  css`
    ${Responsively.responsive('font-style')(fontStyle)};
  `;

export const fontVariant = ({ fontVariant }) =>
  fontVariant &&
  css`
    ${Responsively.responsive('font-variant')(fontVariant)};
  `;

export const fontWeight = ({ fontWeight }) =>
  fontWeight &&
  css`
    ${Responsively.responsive('font-weight')(fontWeight)};
  `;
