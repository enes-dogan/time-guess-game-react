import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

import { TimerChallengeProps } from '../types';
import { ResultModalRef } from '../types';

export default function TimerChallenge({
  title,
  targetTime,
}: TimerChallengeProps) {
  const timer: React.MutableRefObject<undefined | number> = useRef();
  const dialog = useRef<ResultModalRef>(null);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    handleStop();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevtimeRemaining => prevtimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current?.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
