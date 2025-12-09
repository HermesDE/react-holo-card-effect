import styled, { keyframes, css } from 'styled-components';

const holoGradient = keyframes`
  0%, 100% {
    opacity: 0.5;
    background-position: 50% 50%;
    filter: brightness(.5) contrast(1);
  }
  5%, 9% {
    background-position: 100% 100%;
    opacity: 1;
    filter: brightness(.75) contrast(1.25);
  }
  13%, 17% {
    background-position: 0% 0%;
    opacity: .88;
  }
  35%, 39% {
    background-position: 100% 100%;
    opacity: 1;
    filter: brightness(.5) contrast(1);
  }
  55% {
    background-position: 0% 0%;
    opacity: 1;
    filter: brightness(.75) contrast(1.25);
  }
`;

export const StyledHoloCard = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    display: block;
    background: transparent;
    border-radius: inherit;
    box-shadow: -3px -3px 3px 0 rgba(#26e6f7, 0.3),
      3px 3px 3px 0 rgba(#f759e4, 0.3), 0 0 6px 2px rgba(#ffe759, 03),
      0 35px 25px -15px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: visible;

    > * {
      position: relative;
      z-index: 1;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0% 0%;
      background-repeat: no-repeat;
      background-size: 300% 300%;
      mix-blend-mode: color-dodge;
      opacity: 0.2;
      pointer-events: none;
      z-index: 9999;
      background-image: linear-gradient(
        115deg,
        transparent 0%,
        #54a29e 25%,
        transparent 47%,
        transparent 53%,
        #a79d66 75%,
        transparent 100%
      );
      transition: 1s;
      animation: ${holoGradient} 12s ease infinite;
    }
  `
);
