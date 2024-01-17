import { useEffect, useState } from "react";
import styled from "styled-components";
import { HIGHLIGHT_COLOR, Word } from "./puzzle.types";

type LinesType = {
  parent: HTMLDivElement | null;
  foundAnswers: Word[];
};

const FoundAnswers = ({ ...props }: LinesType) => {
  const { parent, foundAnswers } = props;
  const [size, setSize] = useState<number>();
  useEffect(() => {
    const resizeListener = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  if (!parent) {
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

  const generateStyleProps = (
    startElement: HTMLDivElement,
    endElement: HTMLDivElement,
    angle: number,
    backColor: string
  ) => {
    const point1 = startElement;
    const point2 = endElement;

    const p1 = { x: point1.offsetLeft, y: point1.offsetTop };
    const p2 = { x: point2.offsetLeft, y: point2.offsetTop };

    const a = p1.x - p2.x;
    const b = p1.y - p2.y;
    const distance = Math.sqrt(a * a + b * b);

    const pointWidth = point1.clientWidth / 2;
    const pointHeight = point1.clientWidth / 2;

    const height = point1.offsetWidth / 1.3;

    const key = `${p1.x}:${p1.y}-${p2.x}:${p2.y}`;
    const width = distance + height;
    const left = p1.x + pointWidth;
    const top = p1.y + pointHeight - height / 2;

    return { key, color: backColor, width, height, left, top, angle };
  };

  return (
    <FoundContainer>
      {foundAnswers.map((word, i) => {
        const color = HIGHLIGHT_COLOR[i % HIGHLIGHT_COLOR.length];
        const foundWord = word;
        const start = getElement(
          parent,
          foundWord.path[0].x,
          foundWord.path[0].y
        );
        const end = getElement(
          parent,
          foundWord.path[foundWord.path.length - 1].x,
          foundWord.path[foundWord.path.length - 1].y
        );

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

          const styleProps = generateStyleProps(start, end, angle, color);
          return <FoundWordLine {...styleProps} />;
        }
        return null;
      })}
    </FoundContainer>
  );
};

const FoundContainer = styled.div`
  position: absolute;
  z-index: 8;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const FoundWordLine = styled.div<{
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

export default FoundAnswers;
