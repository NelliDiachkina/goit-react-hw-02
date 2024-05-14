import { useEffect, useState } from 'react';

import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const App = () => {
  const initialData = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackCount, setFeedbackCount] = useState(() => {
    const savedData = window.localStorage.getItem('data');
    return savedData ? JSON.parse(savedData) : initialData;
  });

  useEffect(() => {
    window.localStorage.setItem('data', JSON.stringify(feedbackCount));
  }, [feedbackCount]);

  const updateFeedback = feedbackType => {
    setFeedbackCount({
      ...feedbackCount,
      [feedbackType]: feedbackCount[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedbackCount(initialData);
  };

  const totalFeedback =
    feedbackCount.good + feedbackCount.neutral + feedbackCount.bad;

  const positiveFeedback = Math.round(
    (feedbackCount.good / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          value={feedbackCount}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
