import { css } from '@emotion/core';
import Responsively from '../../';

export const animation = ({ animation }) =>
  animation &&
  css`
    ${Responsively.responsive('animation')(animation)};
  `;

export const animationDelay = ({ animationDelay }) =>
  animationDelay &&
  css`
    ${Responsively.responsive('animation-delay')(animationDelay)};
  `;

export const animationDirection = ({ animationDirection }) =>
  animationDirection &&
  css`
    ${Responsively.responsive('animation-direction')(animationDirection)};
  `;

export const animationDuration = ({ animationDuration }) =>
  animationDuration &&
  css`
    ${Responsively.responsive('animation-duration')(animationDuration)};
  `;

export const animationFillMode = ({ animationFillMode }) =>
  animationFillMode &&
  css`
    ${Responsively.responsive('animation-fill-mode')(animationFillMode)};
  `;

export const animationIterationCount = ({ animationIterationCount }) =>
  animationIterationCount &&
  css`
    ${Responsively.responsive('animation-iteration-count')(animationIterationCount)};
  `;

export const animationName = ({ animationName }) =>
  animationName &&
  css`
    ${Responsively.responsive('animation-name')(animationName)};
  `;

export const animationPlayState = ({ animationPlayState }) =>
  animationPlayState &&
  css`
    ${Responsively.responsive('animation-play-state')(animationPlayState)};
  `;

export const animationTimingFunction = ({ animationTimingFunction }) =>
  animationTimingFunction &&
  css`
    ${Responsively.responsive('animation-timing-function')(animationTimingFunction)};
  `;
