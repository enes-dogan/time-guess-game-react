export interface TimerChallengeProps {
  title: string;
  targetTime: number;
}

export interface ResultModalProps {
  result: string;
  targetTime: number;
}

export interface ResultModalRef {
  open: () => void;
}
