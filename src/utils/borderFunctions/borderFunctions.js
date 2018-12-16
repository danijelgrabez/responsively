import { css } from '@emotion/core';
import Responsively from '../../';

export const border = ({ border }) =>
  border &&
  css`
    ${Responsively.responsive('border')(border)};
  `;

export const borderColor = ({ borderColor }) =>
  borderColor &&
  css`
    ${Responsively.responsive('border-color')(borderColor)};
  `;

export const borderStyle = ({ borderStyle }) =>
  borderStyle &&
  css`
    ${Responsively.responsive('border-style')(borderStyle)};
  `;

export const borderWidth = ({ borderWidth }) =>
  borderWidth &&
  css`
    ${Responsively.responsive('border-width')(borderWidth)};
  `;

export const borderRadius = ({ borderRadius }) =>
  borderRadius &&
  css`
    ${Responsively.responsive('border-radius')(borderRadius)};
  `;

export const borderTopRightRadius = ({ borderTopRightRadius }) =>
  borderTopRightRadius &&
  css`
    ${Responsively.responsive('border-top-right-radius')(borderTopRightRadius)};
  `;

export const borderBottomRightRadius = ({ borderBottomRightRadius }) =>
  borderBottomRightRadius &&
  css`
    ${Responsively.responsive('border-bottom-right-radius')(borderBottomRightRadius)};
  `;

export const borderTopLeftRadius = ({ borderTopLeftRadius }) =>
  borderTopLeftRadius &&
  css`
    ${Responsively.responsive('border-top-left-radius')(borderTopLeftRadius)};
  `;

export const borderBottomLeftRadius = ({ borderBottomLeftRadius }) =>
  borderBottomLeftRadius &&
  css`
    ${Responsively.responsive('border-bottom-left-radius')(borderBottomLeftRadius)};
  `;

export const borderBottom = ({ borderBottom }) =>
  borderBottom &&
  css`
    ${Responsively.responsive('border-bottom')(borderBottom)};
  `;

export const borderBottomColor = ({ borderBottomColor }) =>
  borderBottomColor &&
  css`
    ${Responsively.responsive('border-bottom-color')(borderBottomColor)};
  `;

export const borderBottomStyle = ({ borderBottomStyle }) =>
  borderBottomStyle &&
  css`
    ${Responsively.responsive('border-bottom-color')(borderBottomStyle)};
  `;

export const borderBottomWidth = ({ borderBottomWidth }) =>
  borderBottomWidth &&
  css`
    ${Responsively.responsive('border-bottom-color')(borderBottomWidth)};
  `;

export const borderLeft = ({ borderLeft }) =>
  borderLeft &&
  css`
    ${Responsively.responsive('border-left')(borderLeft)};
  `;

export const borderLeftColor = ({ borderLeftColor }) =>
  borderLeftColor &&
  css`
    ${Responsively.responsive('border-left-color')(borderLeftColor)};
  `;

export const borderLeftStyle = ({ borderLeftStyle }) =>
  borderLeftStyle &&
  css`
    ${Responsively.responsive('border-left-style')(borderLeftStyle)};
  `;

export const borderLeftWidth = ({ borderLeftWidth }) =>
  borderLeftWidth &&
  css`
    ${Responsively.responsive('border-left-width')(borderLeftWidth)};
  `;

export const borderRight = ({ borderRight }) =>
  borderRight &&
  css`
    ${Responsively.responsive('border-right')(borderRight)};
  `;

export const borderRightColor = ({ borderRightColor }) =>
  borderRightColor &&
  css`
    ${Responsively.responsive('border-right-color')(borderRightColor)};
  `;

export const borderRightStyle = ({ borderRightStyle }) =>
  borderRightStyle &&
  css`
    ${Responsively.responsive('border-right-style')(borderRightStyle)};
  `;

export const borderRightWidth = ({ borderRightWidth }) =>
  borderRightWidth &&
  css`
    ${Responsively.responsive('border-right-width')(borderRightWidth)};
  `;

export const borderTop = ({ borderTop }) =>
  borderTop &&
  css`
    ${Responsively.responsive('border-top')(borderTop)};
  `;

export const borderTopColor = ({ borderTopColor }) =>
  borderTopColor &&
  css`
    ${Responsively.responsive('border-top-color')(borderTopColor)};
  `;

export const borderTopStyle = ({ borderTopStyle }) =>
  borderTopStyle &&
  css`
    ${Responsively.responsive('border-top-style')(borderTopStyle)};
  `;

export const borderTopWidth = ({ borderTopWidth }) =>
  borderTopWidth &&
  css`
    ${Responsively.responsive('border-top-width')(borderTopWidth)};
  `;
