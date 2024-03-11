import { API } from "config";

type Word = {
  lang: string;
  level: string;
  cnt: number;
  diff?: string;
  words?: Array<{ speech: string; geschlecht: string; word: string }>;
};

// generate Random words
const callRandomWordsApi = async (optionState: Word) => {
  try {
    const response = await fetch(
      //   `${API.RANDOM_WORDS}lang=${optionState.lang}&level=${optionState.level}&cnt=${optionState.cnt}`,
      `${API.RANDOM_WORDS}lang=en&level=A1&cnt=3`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(
        `[API] call random words request failed with status: ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error calling API A:", error);
    throw error;
  }
};

// generate Puzzle data based on Random words
const callPuzzleApi = async (randomWords: any) => {
  let requestBody = {};
  if (randomWords && Array.isArray(randomWords.words)) {
    requestBody = {
      words: randomWords.words.map((el: any) => el.word),
    };
  } else {
    throw new Error("randomWords or its words property is undefined");
  }

  try {
    const response = await fetch(`${API.PUZZLE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
      cache: "no-store",
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(
        `[API] call puzzle request failed with status: ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error calling API A:", error);
    throw error;
  }
};

const getPuzzle = async (optionState: Word) => {
  try {
    const randomWords = await callRandomWordsApi(optionState);
    const puzzle = await callPuzzleApi(randomWords);

    puzzle.data = { ...puzzle.data, wordDetail: randomWords.words };

    return puzzle;
  } catch (error) {
    console.error("error fetching puzzle data", error);
    throw error;
  }
};

export default getPuzzle;
