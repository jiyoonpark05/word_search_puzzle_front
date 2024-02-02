import { useState } from "react";
import { HighlightType } from "./puzzle.types";
import styled from "styled-components";

const Highlight = ({ ...props }: HighlightType) => {
  const { parent, start: startElement, end: endElement, color } = props;
  const [size, setSize] = useState<number>();

  if (!parent) {
    return null;
  }

  if (!startElement) {
    return null;
  }

  const getAngle = (x1: number, y1: number, x2: number, y2: number) => {
    const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
    return angle;
  };

  const getElement = (
    root: HTMLDivElement,
    x: number | undefined,
    y: number | undefined
  ) => {
    if (x === null || y === null) {
      return null;
    }
    const element = root.getElementsByClassName(
      `${x}-${y}`
    )[0] as HTMLDivElement;
    return element;
  };

  const generateHighlightStyle = (
    startTarget: HTMLDivElement,
    endTarget: HTMLDivElement,
    angle: number,
    backgroundColor: string
  ) => {
    const startPoint = startTarget;
    const endPoint = endTarget;

    const p1 = { x: startPoint.offsetLeft, y: startPoint.offsetTop };
    const p2 = { x: endPoint.offsetLeft, y: endPoint.offsetTop };

    const a = p1.x - p2.x;
    const b = p1.y - p2.y;
    const distance = Math.sqrt(a * a + b * b);

    const pointWidth = startPoint.clientWidth / 2;
    const pointHeight = startPoint.clientWidth / 2;

    const height = startPoint.offsetWidth / 1.3;

    const key = `${p1.x}:${p1.y}-${p2.x}:${p2.y}`;
    const width = distance + height;
    const left = p1.x + pointWidth;
    const top = p1.y + pointHeight - height / 2;

    return { key, color: backgroundColor, width, height, left, top, angle };
  };

  const renderHighlight = () => {
    const start = getElement(parent, startElement.x, startElement.y);
    const end = getElement(parent, endElement?.x, endElement?.y) ?? start;

    if (start && end) {
      const startTarget = {
        x: start.getBoundingClientRect().left,
        y: start.getBoundingClientRect().top,
      };

      const endTarget = {
        x: end.getBoundingClientRect().left,
        y: end.getBoundingClientRect().top,
      };

      const angle = getAngle(
        startTarget.x,
        startTarget.y,
        endTarget.x,
        endTarget.y
      );

      const styleProps = generateHighlightStyle(start, end, angle, color);

      return <Line {...styleProps} key={styleProps.key} />;
    }
    return null;
  };
  return <HighlightContainer>{renderHighlight()}</HighlightContainer>;
};

const HighlightContainer = styled.div`
  position: absolute;
  z-index: 8;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Line = styled.div<{
  color: string;
  width: number;
  height: number;
  left: number;
  top: number;
  angle: number;
}>`
  position: absolute;
  transform-origin: left;
  ${(props) => `
    background-color: ${props.color};
    width: ${props.width}px; 
    height:${props.height}px;
    border-radius: 50px;
    left: ${props.left}px;
    top: ${props.top}px;
    transform: rotate(${props.angle}deg) translateX(-${props.height / 2}px);
  `}
`;

export default Highlight;
