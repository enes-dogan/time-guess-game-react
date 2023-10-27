import { forwardRef, useImperativeHandle, useRef } from 'react';

import { ResultModalProps } from '../types';
import { ResultModalRef } from '../types';

const ResultModal = forwardRef<ResultModalRef, ResultModalProps>(
  function ResultModal({ result, targetTime }: ResultModalProps, ref) {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current!.showModal();
        },
      };
    });

    return (
      <dialog ref={dialog} className="result-modal">
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
  }
);

export default ResultModal;
