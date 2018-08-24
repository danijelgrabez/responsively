import { css } from 'react-emotion';
import Responsively from '../../';

export const clear = ({ clear }) =>
  clear &&
  css`
    ${Responsively.responsive('clear')(clear)};
  `;

export const cursor = ({ cursor }) =>
  cursor &&
  css`
    ${Responsively.responsive('cursor')(cursor)};
  `;

export const display = ({ display }) =>
  display &&
  css`
    ${Responsively.responsive('display')(display)};
  `;

export const float = ({ float }) =>
  float &&
  css`
    ${Responsively.responsive('float')(float)};
  `;

export const position = ({ position }) =>
  position &&
  css`
    ${Responsively.responsive('position')(position)};
  `;

export const visibility = ({ visibility }) =>
  visibility &&
  css`
    ${Responsively.responsive('visibility')(visibility)};
  `;
