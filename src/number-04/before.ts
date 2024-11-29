// Code Smell: Data Clumps | Before

export class Graph {
  public drawPoint(x: number, y: number, z: number): void {
    // ...
  }

  public drawCircle(
    centerX: number,
    centerY: number,
    centerZ: number,
    radius: number,
  ): void {
    // ...
  }

  public drawLine(
    startX: number,
    startY: number,
    startZ: number,
    endX: number,
    endY: number,
    endZ: number,
  ): void {
    // ...
  }
}
