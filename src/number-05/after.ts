// Code Smell: Long Parameter List | After

export function generateReport(
  math: Course,
  science: Course,
  gym: Course,
): void {
  // ...
}

interface Course {
  professor: string;
  sessions: number;
  grade: number;
}
