export interface Student {
  ranking: number;
}

export interface Path {
  x: number;
  y: number;
}

export type Coordinate = {
  x: number;
  y: number;
};

export interface Word {
  origin_word: string;
  word: string;
  path: Path[];
}

export interface puzzleModel {
  id: string;
  color_code: string;
  attempt_count: number;
  progress_state: string;
  limit_time: number;
  start_date: null;
  end_date: null;
  words: Word[];
  puzzle: Array<string[]>;
}

export type SizeProps = {
  windowWidth: number;
};

export type TimeProps = {
  isComplete: boolean;
  handleTimerFinish: () => void;
};

export type BoardProps = {
  words: Array<string[]>;
  answers: Word[];
  foundAnswers: Word[];
  start: Coordinate | null;
  move: Coordinate | null;
  disabled: boolean | null;
  handleStart: (coord: Coordinate) => void;
  handleMove: (coord: Coordinate) => void;
  handleGameClear: () => void;
  handleTimerFinish: () => void;
  setWordBoard: (wordSearch: puzzleModel) => void;
  setFoundAnswer: (words: Word[]) => void;
};

export interface puzzleProps {
  wordBoardProps: BoardProps;
  handleStart: (coord: Coordinate) => void;
  handleMove: (coord: Coordinate) => void;
  setPuzzle: (wordSearch: puzzleModel) => void;
  setFoundAnswer: (words: Word[]) => void;
}

export type highlightType = {
  parent: HTMLDivElement | null;
  start: Coordinate | null;
  end: Coordinate | null;
  color: string;
};

// opacity 0.4
export const HIGHLIGHT_COLOR = [
  "#FF767666",
  "#76C5FF66",
  "#FFC04866",
  "#79DD8066",
  "#D166F866",
  "#F38A6266",
  "#7684FF66",
  "#66D3CA66",
  "#B47E5E66",
];
