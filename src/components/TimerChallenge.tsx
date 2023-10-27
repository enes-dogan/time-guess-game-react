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

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current!.open();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }
  console.log(timerExpired);
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
