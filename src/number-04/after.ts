// Code Smell: Data Clumps | After

export class Graph {
  public drawPoint(point: Point): void {
    // ...
  }

  public drawCircle(centerPoint: Point, radius: number): void {
    // ...
  }

  public drawLine(startPoint: Point, endPoint: Point): void {
    // ...
  }
}

interface Point {
  x: number;
  y: number;
  z: number;
}
