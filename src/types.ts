export interface TimerChallengeProps {
  title: string;
  targetTime: number;
}

export interface ResultModalProps {
  targetTime: number;
  remainingTime: number;
  onReset: () => void;
}

export interface ResultModalRef {
  open: () => void;
}
