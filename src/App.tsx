import React, { useState } from 'react';
import './App.css';

// Assuming there are at most three options
export interface QuestionData {
  id: number;
  content: JSX.Element;
  optionOneText: string;
  optionOneNextId: number;
  optionTwoText: string;
  optionTwoNextId: number;
  optionThreeText: string;
  optionThreeNextId: number;
  finalState: boolean;
}

const questions: QuestionData[] = [
  { id: 1, content: <p>Interest in a specific TR?</p>, optionOneText: "Yes", optionOneNextId: 2, optionTwoText: "No", optionTwoNextId: 3, optionThreeText: "", optionThreeNextId: -1, finalState: false },
  { id: 2, content: <p>What kind of analysis?</p>, optionOneText: "Quantification", optionOneNextId: 4, optionTwoText: "Genotyping", optionTwoNextId: 5, optionThreeText: "DNA fingerprinting", optionThreeNextId: 6, finalState: false },
  { 
    id: 3, 
    content: (
      <>
        <p><strong>Straglr</strong>: A tool for detecting tandem repeats.</p>
        <p><strong>RepeatHMM</strong>: Another tool for tandem repeat analysis.</p>
        <p><strong>TRF</strong>: A tool commonly used for finding tandem repeats in DNA sequences.</p>
      </>
    ),
    optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true 
  },
  { id: 4, content: <p>Which type are you interested in?</p>, optionOneText: "STRs (2-6 bp)", optionOneNextId: 7, optionTwoText: "VNTRs (6-100 bp)", optionTwoNextId: 8, optionThreeText: "Macrosatellites (>100 bp)", optionThreeNextId: 9, finalState: false },
  { id: 5, content: <p>Which type are you interested in?</p>, optionOneText: "STRs (2-6 bp)", optionOneNextId: 10, optionTwoText: "VNTRs (6-100 bp)", optionTwoNextId: 11, optionThreeText: "Macrosatellites (>100 bp)", optionThreeNextId: 9, finalState: false },
  { 
    id: 6, 
    content: (
      <>
        <p><strong>NASTRA</strong>: A tool for detecting tandem repeats.</p>
      </>
    ),
    optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true 
  },
  { 
    id: 7, 
    content: (
      <>
        <p><strong>tandem-genotypes</strong>: A tool for detecting tandem repeats.</p>
        <p><strong>NanoRepeat</strong>: Another tool for tandem repeat analysis.</p>
        <p><strong>Straglr</strong>: A tool commonly used for finding tandem repeats in DNA sequences.</p>
        <p><strong>LongTR</strong>: A tool commonly used for finding tandem repeats in DNA sequences.</p>
        <p><strong>HMMSTR</strong>: A tool commonly used for finding tandem repeats in DNA sequences.</p>
      </>
    ),
    optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true 
  },
  { 
    id: 8, 
    content: (
      <>
        <p><strong>HMMSTR</strong>: A tool commonly used for finding tandem repeats in DNA sequences.</p>
        <p><strong>Straglr</strong>: A tool commonly used for finding tandem repeats in DNA sequences.</p>
        <p><strong>tandem-genotypes</strong>: A tool for detecting tandem repeats.</p>
        <p><strong>NanoRepeat</strong>: Another tool for tandem repeat analysis.</p>
      </>
    ),
    optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true 
  },
  { 
    id: 9, 
    content: (
      <>
        <p><strong>Straglr</strong>: A tool commonly used for finding tandem repeats in DNA sequences.</p>
        <p><strong>LongTR</strong>: Another tool for tandem repeat analysis.</p>
      </>
    ),
    optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true 
  },
  { 
    id: 10, 
    content: (
      <>
        <p><strong>NanoRepeat</strong>: A tool commonly used for finding tandem repeats in DNA sequences.</p>
        <p><strong>HMMSTR</strong>: Another tool for tandem repeat analysis.</p>
      </>
    ),
    optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true 
  },
  { 
    id: 11, 
    content: (
      <>
        <p><strong>tandem-genotypes</strong>: A tool commonly used for finding tandem repeats in DNA sequences.</p>
        <p><strong>HMMSTR</strong>: Another tool for tandem repeat analysis.</p>
      </>
    ),
    optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true 
  }
];

interface QuestionProps {
  question: QuestionData;
  onOptionOne: () => void;
  onOptionTwo: () => void;
  onOptionThree: () => void;
}

const Question: React.FC<QuestionProps> = ({ question, onOptionOne, onOptionTwo, onOptionThree }) => {
  return (
    <div className="QuestionContainer">
      <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
        {question.content}
      </div>
      <div className="ButtonsContainer">
        { !question.finalState && question.optionOneText && <button onClick={onOptionOne}> {question.optionOneText} </button> }
        { !question.finalState && question.optionTwoText && <button onClick={onOptionTwo}> {question.optionTwoText} </button> }
        { !question.finalState && question.optionThreeText && <button onClick={onOptionThree}> {question.optionThreeText} </button> }
      </div>
    </div>
  );
};


const App: React.FC = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);

  const currentQuestion = questions.find(q => q.id === currentQuestionId);

  const handleOptionOne = () => {
    if (currentQuestion) {
      setCurrentQuestionId(currentQuestion.optionOneNextId);
    }
  };

  const handleOptionTwo = () => {
    if (currentQuestion) {
      setCurrentQuestionId(currentQuestion.optionTwoNextId);
    }
  };

  const handleOptionThree = () => {
    if (currentQuestion) {
      setCurrentQuestionId(currentQuestion.optionThreeNextId);
    }
  };

  if (!currentQuestion) {
    return <p>You've reached the end of the application!</p>;
  }

  return (
    <div className="App">
      <Question question={currentQuestion} onOptionOne={handleOptionOne} onOptionTwo={handleOptionTwo} onOptionThree={handleOptionThree} />
    </div>
  );
};

export default App;
