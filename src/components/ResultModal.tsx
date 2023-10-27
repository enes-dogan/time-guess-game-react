import { LegacyRef, forwardRef } from 'react';

interface ResultModalProps {
  result: string;
  targetTime: number;
  ref?: LegacyRef<HTMLDialogElement>;
}

const ResultModal = forwardRef<HTMLDialogElement, ResultModalProps>(function ResultModal(
  { result, targetTime }: ResultModalProps,
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <h1>You {result}</h1>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
