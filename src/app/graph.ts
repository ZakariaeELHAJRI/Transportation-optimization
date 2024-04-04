// graph.ts
export class Graph {
    private readonly vertices: number;
    private readonly adjacencyMatrix: number[][];
  
    constructor(vertices: number, adjacencyMatrix: number[][]) {
      this.vertices = vertices;
      this.adjacencyMatrix = adjacencyMatrix;
    }
  
    private minDistance(distances: number[], visited: boolean[]): number {
      let min = Infinity;
      let minIndex = -1;
  
      for (let v = 0; v < this.vertices; v++) {
        if (!visited[v] && distances[v] <= min) {
          min = distances[v];
          minIndex = v;
        }
      }
  
      return minIndex;
    }
  
    private calculateRoute(prev: number[], endVertex: number): number[] {
      const route: number[] = [];
      let current = endVertex;
      while (current !== -1) {
        route.unshift(current);
        current = prev[current];
      }
      return route;
    }
  
    dijkstra(startVertex: number, endVertex: number): number[] {
      const distances: number[] = new Array(this.vertices).fill(Infinity);
      const visited: boolean[] = new Array(this.vertices).fill(false);
      const prev: number[] = new Array(this.vertices).fill(-1);
  
      distances[startVertex] = 0;
  
      for (let count = 0; count < this.vertices - 1; count++) {
        const u = this.minDistance(distances, visited);
        visited[u] = true;
  
        for (let v = 0; v < this.vertices; v++) {
          if (!visited[v] && this.adjacencyMatrix[u][v] && distances[u] !== Infinity && distances[u] + this.adjacencyMatrix[u][v] < distances[v]) {
            distances[v] = distances[u] + this.adjacencyMatrix[u][v];
            prev[v] = u;
          }
        }
      }
  
      return this.calculateRoute(prev, endVertex);
    }
  }
