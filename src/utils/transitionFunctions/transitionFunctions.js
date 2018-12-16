import { css } from '@emotion/core';
import Responsively from '../../';

export const transition = ({ transition }) =>
  transition &&
  css`
    ${Responsively.responsive('transition')(transition)};
  `;

export const transitionDelay = ({ transitionDelay }) =>
  transitionDelay &&
  css`
    ${Responsively.responsive('transition-delay')(transitionDelay)};
  `;

export const transitionDuration = ({ transitionDuration }) =>
  transitionDuration &&
  css`
    ${Responsively.responsive('transition-duration')(transitionDuration)};
  `;

export const transitionProperty = ({ transitionProperty }) =>
  transitionProperty &&
  css`
    ${Responsively.responsive('transition-property')(transitionProperty)};
  `;

export const transitionTimingFunction = ({ transitionTimingFunction }) =>
  transitionTimingFunction &&
  css`
    ${Responsively.responsive('transition-timing-function')(transitionTimingFunction)};
  `;
