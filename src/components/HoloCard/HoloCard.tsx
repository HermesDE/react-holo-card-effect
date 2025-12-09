import React, { useRef, useState } from 'react';
import { StyledHoloCard } from './HoloCard.styles';

interface Props {
  children: React.ReactNode;
  height?: number;
  width?: number;
  showSparkles?: boolean;
  asWrapper?: boolean;
}

export const HoloCard = ({
  children,
  height,
  width,
  showSparkles,
  asWrapper = false,
}: Props) => {
  const [hover, setHover] = useState(false);
  const [animated, setAnimated] = useState(true);
  const [activeBackgroundPosition, setActiveBackgroundPosition] = useState({
    tp: 0,
    lp: 0,
  });
  const ref = useRef<HTMLDivElement>(null);

  const handleOnMouseOver = (event: any) => {
    setAnimated(false);
    setHover(true);

    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const l =
      event.type === 'touchmove'
        ? event.touches[0].clientX - rect.left
        : event.nativeEvent.offsetX;

    const t =
      event.type === 'touchmove'
        ? event.touches[0].clientY - rect.top
        : event.nativeEvent.offsetY;

    const h = card.clientHeight;
    const w = card.clientWidth;

    var px = Math.abs(Math.floor((100 / w) * l) - 100);
    var py = Math.abs(Math.floor((100 / h) * t) - 100);

    var lp = 50 + (px - 50) / 1.5;
    var tp = 50 + (py - 50) / 1.5;

    setActiveBackgroundPosition({ lp, tp });
  };

  const handleOnMouseOut = () => {
    setHover(false);
    setAnimated(true);
  };

  return (
    <StyledHoloCard
      ref={ref}
      active={hover}
      animated={animated}
      activeBackgroundPosition={activeBackgroundPosition}
      onMouseMove={handleOnMouseOver}
      onTouchMove={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
      height={height}
      width={width}
      showSparkles={showSparkles ?? true}
      asWrapper={asWrapper}
    >
      {children}
    </StyledHoloCard>
  );
};
