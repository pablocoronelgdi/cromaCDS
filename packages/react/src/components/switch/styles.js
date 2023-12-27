/*
 * INDICE:
 *
 * ESTILOS BASE
 * VARIANTES
 * FUNCIONES
 *
 */

import { css } from "styled-components";
import {
  Spacings,
  Color,
  Shapes,
  Borders,
  Opacities,
} from "@cromaui/foundations";
import { borderColor } from "polished";

/* =============================================
=            ESTILOS DE COMPONENTES            =
============================================= */

/* ----------  Switch Container  (div) ---------- */

export const SwitchContainer = (props) => {
  // ESTILOS BASE
  const base = css`
    border-radius: ${Shapes.full};
    border: ${Borders.br2};
    border-color: transparent;
    padding: 2px;
    width: fit-content;
    &:focus-within {
      border: ${Borders.br2};
      border-color: ${Color.Blue.main};
    }
  `;
  return css`
    ${base}
  `;
};

/* ----------  Switch Area  (label) ---------- */

export const SwitchArea = (props) => {
  // ESTILOS BASE
  const base = css`
    cursor: pointer;
    width: 52px; //Falta foundation
    height: ${Spacings.space32};
    display: flex;
    align-items: center;
    border: ${Borders.br2};
    border-radius: ${Shapes.full};
    padding-top: ${Spacings.space2};
    padding-bottom: ${Spacings.space2};
    transition: all 0.4s ease;
    padding-left: ${props.isPressed ? Spacings.space2 : Spacings.space4};
    padding-right: ${props.isPressed ? Spacings.space2 : Spacings.space4};
  `;

  // DISABLED
  const disabled = css`
    background-color: ${Color.Neutral[300]};
    border-color: ${props.isChecked ? Color.Neutral[300] : Color.Neutral[400]};
  `;

  // CHECKED
  const checked = css`
    background-color: ${Color.Navy.main};
    border-color: ${Color.Navy.main};
  `;

  // UNCHECKED
  const unchecked = css`
    background-color: ${Color.Neutral[300]};
    border-color: ${Color.Neutral[600]};
  `;

  if (props.disabled) {
    return css`
      ${base}
      ${disabled}
    `;
  }
  if (props.isChecked) {
    return css`
      ${base}
      ${checked}
    `;
  }
  return css`
    ${base}
    ${unchecked}
  `;
};

/* ----------  Switch Input  (input) ---------- */

export const SwitchInput = () => {
  return css`
    opacity: 0;
    width: 0;
    height: 0;
  `;
};

/* ----------  Switch Thumb  (span) ---------- */

export const SwitchThumb = (props) => {
  // ESTILOS BASE
  const base = css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Shapes.full};
    z-index: 1;
    transition: all 0.4s ease;
    // Icono
    & span {
      background-color: inherit;
      border-radius: inherit;
      height: ${props.isPressed ? "28px" : "24px"};
      width: ${props.isPressed ? "28px" : "24px"};
      transition: all 0.4s ease;
    }
    &::before {
      content: "";
      position: absolute;
      height: 40px;
      width: 40px;
      border-radius: inherit;
      z-index: -1;
    }
  `;

  // DISABLED
  const disabled = css`
    height: ${props.isChecked ? "24px" : "16px"};
    width: ${props.isChecked ? "24px" : "16px"};
    background-color: ${props.isChecked
      ? Color.Neutral[50]
      : Color.Neutral[400]};
    transform: translateX(${props.isChecked ? "18px" : 0});
    & span{
      color: ${Color.Neutral[300]}
    }
  `;

  // CHECKED
  const checked = css`
    height: ${props.isPressed ? "28px" : "24px"};
    width: ${props.isPressed ? "28px" : "24px"};
    transform: translateX(18px);
    background-color: ${Color.Neutral[50]};
    &:hover {
      &::before {
        background-color: ${Color.Navy.soft}33;
      }
    }
  `;

  // UNCHECKED
  const unchecked = css`
    height: ${props.isPressed ? "28px" : "16px"};
    width: ${props.isPressed ? "28px" : "16px"};
    transform: translateX(${props.isPressed ? "-4px" : "0px"});
    background-color: ${Color.Neutral[600]};
    &:hover {
      &::before {
        background-color: ${Color.Neutral[600] + Opacities.opacity15};
      }
    }
  `;

  if (props.disabled) {
    return css`
      ${base}
      ${disabled}
    `;
  }
  if (props.isChecked) {
    return css`
      ${base}
      ${checked}
    `;
  }
  return css`
    ${base}
    ${unchecked}
  `;
};
