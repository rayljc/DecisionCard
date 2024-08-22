import React, { useState } from 'react';
import './App.css';

// Assuming there are at most three options
export interface QuestionData {
  id: number;
  content: string;
  optionOneText: string;
  optionOneNextId: number;
  optionTwoText: string
  optionTwoNextId: number;
  optionThreeText: string
  optionThreeNextId: number;
  finalState: boolean;
}

const questions: QuestionData[] = [
  { id: 1, content: '>= 30x dep', optionOneText: "Yes", optionOneNextId: 2, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: false },
  { id: 2, content: "Sequencing from R10 or R9", optionOneText: "R10", optionOneNextId: 3, optionTwoText: "R9", optionTwoNextId: 4, optionThreeText: "", optionThreeNextId: -1, finalState: false },
  { id: 3, content: 'Know total length of the TR region?', optionOneText: "Yes", optionOneNextId: 5, optionTwoText: "No", optionTwoNextId: 6, optionThreeText: "", optionThreeNextId: -1, finalState: false },
  { id: 4, content: 'Know total length of the TR region?', optionOneText: "Yes", optionOneNextId: 7, optionTwoText: "No", optionTwoNextId: 8, optionThreeText: "", optionThreeNextId: -1, finalState: false },
  { id: 5, content: 'Is the total length < 20000 bp?', optionOneText: "Yes", optionOneNextId: 9, optionTwoText: "No", optionTwoNextId: 10, optionThreeText: "", optionThreeNextId: -1, finalState: false },
  { id: 6, content: 'TR Type?', optionOneText: "Macrosatellite", optionOneNextId: 11, optionTwoText: "STR or VNTR", optionTwoNextId: 12, optionThreeText: "", optionThreeNextId: -1, finalState: false },
  { id: 7, content: 'Is the total length < 20000 bp?', optionOneText: "Yes", optionOneNextId: 13, optionTwoText: "No", optionTwoNextId: 14, optionThreeText: "", optionThreeNextId: -1, finalState: false },
  { id: 8, content: 'TR Type?', optionOneText: "VNTR", optionOneNextId: 15, optionTwoText: "SNTR", optionTwoNextId: 16, optionThreeText: "Macrosatellite", optionThreeNextId: 17, finalState: false },
  { id: 9, content: 'Is TR Type a Macrosatellite?', optionOneText: "Yes", optionOneNextId: 18, optionTwoText: "No", optionTwoNextId: 19, optionThreeText: "Unknown", optionThreeNextId: 20, finalState: false },
  { id: 10, content: 'STRaglr', optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true },
  { id: 11, content: 'STRaglr', optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true },
  { id: 12, content: 'NanoRepeat, STRaglr, Tandem-genotypes', optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true },
  { id: 13, content: 'Is TR Type a Macrosatellite?', optionOneText: "Yes", optionOneNextId: 21, optionTwoText: "No", optionTwoNextId: 22, optionThreeText: "Unknown", optionThreeNextId: 23, finalState: false },
  { id: 14, content: 'STRaglr', optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true },
  { id: 15, content: 'NanoRepeat, STRaglr, Tandem-genotypes', optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true },
  { id: 16, content: 'NanoRepeat, STRaglr', optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true },
  { id: 17, content: 'STRaglr', optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true },
  { id: 18, content: 'STRaglr, Tandem-genotypes', optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true },
  { id: 19, content: 'Tandem-genotypes, NanoRepeat, STRaglr', optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true },
  { id: 20, content: 'STRaglr', optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true },
  { id: 21, content: 'STRaglr', optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true },
  { id: 22, content: 'NanoRepeat, STRaglr', optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true },
  { id: 23, content: 'STRaglr', optionOneText: "", optionOneNextId: -1, optionTwoText: "", optionTwoNextId: -1, optionThreeText: "", optionThreeNextId: -1, finalState: true },
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
      <p>{question.content}</p>
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
