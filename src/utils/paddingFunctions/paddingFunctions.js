import { css } from 'react-emotion';
import Responsively from '../../';

export const padding = ({ padding }) =>
  padding &&
  css`
    ${Responsively.responsive('padding')(padding)};
  `;

export const paddingTop = ({ paddingTop, pt }) =>
  (paddingTop || pt) &&
  css`
    ${Responsively.responsive('padding-top')(paddingTop || pt)};
  `;

export const paddingRight = ({ paddingRight, pr }) =>
  (paddingRight || pr) &&
  css`
    ${Responsively.responsive('padding-right')(paddingRight || pr)};
  `;

export const paddingBottom = ({ paddingBottom, pb }) =>
  (paddingBottom || pb) &&
  css`
    ${Responsively.responsive('padding-bottom')(paddingBottom || pb)};
  `;

export const paddingLeft = ({ paddingLeft, pl }) =>
  (paddingLeft || pl) &&
  css`
    ${Responsively.responsive('padding-left')(paddingLeft || pl)};
  `;
