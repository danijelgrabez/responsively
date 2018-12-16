import { css } from '@emotion/core';
import Responsively from '../../';

export const listStyle = ({ listStyle }) =>
  listStyle &&
  css`
    ${Responsively.responsive('list-style')(listStyle)};
  `;

export const listStyleImage = ({ listStyleImage }) =>
  listStyleImage &&
  css`
    ${Responsively.responsive('list-style-image')(listStyleImage)};
  `;

export const listStylePosition = ({ listStylePosition }) =>
  listStylePosition &&
  css`
    ${Responsively.responsive('list-style-position')(listStylePosition)};
  `;

export const listStyleType = ({ listStyleType }) =>
  listStyleType &&
  css`
    ${Responsively.responsive('list-style-type')(listStyleType)};
  `;

export const markerOffset = ({ markerOffset }) =>
  markerOffset &&
  css`
    ${Responsively.responsive('marker-offset')(markerOffset)};
  `;
