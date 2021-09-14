import './App.css';
import Section from './Components/Section';
import Button from './Components/FeedbackCard/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';
import React, { useState, useEffect } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    countTotalFeedback(good, bad, neutral);
    countPositiveFeedbackPercentage(good, total);
  }, [good, bad, neutral, total, percentage]);

  const countTotalFeedback = (good, bad, neutral) => {
    setTotal(good + bad + neutral);
  };
  const countPositiveFeedbackPercentage = (good, total) => {
    setPercentage(Math.round((100 * good) / total));
  };

  const onLeaveFeedback = e => {
    const value = e.target.textContent.toLowerCase();

    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <Button
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

export default App;
