import { css } from '@emotion/core';
import Responsively from '../../';

export const flex = ({ flex }) =>
  flex &&
  css`
    ${Responsively.responsive('flex')(flex)};
  `;

export const flexBasis = ({ flexBasis }) =>
  flexBasis &&
  css`
    ${Responsively.responsive('flex-basis')(flexBasis)};
  `;

export const flexShrink = ({ flexShrink }) =>
  flexShrink &&
  css`
    ${Responsively.responsive('flex-shrink')(flexShrink)};
  `;

export const flexGrow = ({ flexGrow }) =>
  flexGrow &&
  css`
    ${Responsively.responsive('flex-grow')(flexGrow)};
  `;

export const flexDirection = ({ flexDirection }) =>
  flexDirection &&
  css`
    ${Responsively.responsive('flex-direction')(flexDirection)};
  `;

export const flexWrap = ({ flexWrap }) =>
  flexWrap &&
  css`
    ${Responsively.responsive('flex-wrap')(flexWrap)};
  `;

export const flexFlow = ({ flexFlow }) =>
  flexFlow &&
  css`
    ${Responsively.responsive('flex-flow')(flexFlow)};
  `;

export const justifyContent = ({ justifyContent }) =>
  justifyContent &&
  css`
    ${Responsively.responsive('justify-content')(justifyContent)};
  `;

export const alignItems = ({ alignItems }) =>
  alignItems &&
  css`
    ${Responsively.responsive('align-items')(alignItems)};
  `;

export const alignContent = ({ alignContent }) =>
  alignContent &&
  css`
    ${Responsively.responsive('align-content')(alignContent)};
  `;

export const order = ({ order }) =>
  order &&
  css`
    ${Responsively.responsive('order')(order)};
  `;

export const alignSelf = ({ alignSelf }) =>
  alignSelf &&
  css`
    ${Responsively.responsive('align-self')(alignSelf)};
  `;
