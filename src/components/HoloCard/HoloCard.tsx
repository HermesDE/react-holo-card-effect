import React from 'react';
import { StyledHoloCard } from './HoloCard.styles';

interface Props {
  children: React.ReactNode;
}

export const HoloCard = ({
  children,
}: Props) => {
  return (
    <StyledHoloCard>
      {children}
    </StyledHoloCard>
  );
};
