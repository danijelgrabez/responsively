import { css } from '@emotion/core';
import Responsively from '../../';

export const background = ({ background }) =>
  background &&
  css`
    ${Responsively.responsive('background')(background)};
  `;

export const backgroundColor = ({ backgroundColor }) =>
  backgroundColor &&
  css`
    ${Responsively.responsive('background-color')(backgroundColor)};
  `;

export const backgroundImage = ({ backgroundImage }) =>
  backgroundImage &&
  css`
    ${Responsively.responsive('background-image')(backgroundImage)};
  `;

export const backgroundAttachment = ({ backgroundAttachment }) =>
  backgroundAttachment &&
  css`
    ${Responsively.responsive('background-attachment')(backgroundAttachment)};
  `;

export const backgroundPosition = ({ backgroundPosition }) =>
  backgroundPosition &&
  css`
    ${Responsively.responsive('background-position')(backgroundPosition)};
  `;

export const backgroundRepeat = ({ backgroundRepeat }) =>
  backgroundRepeat &&
  css`
    ${Responsively.responsive('background-repeat')(backgroundRepeat)};
  `;
