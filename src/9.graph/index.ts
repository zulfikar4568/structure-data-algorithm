export class Graph {
  public numberOfNode: number;
  public adjacentList: Record<string, string[]>;
  constructor() {
    this.numberOfNode = 0;
    this.adjacentList = {};
  }

  adVertex(node: string) {
    this.adjacentList[node] = [];
    this.numberOfNode++;
  }

  addEdge(node1: string, node2: string) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnection() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + "  ";
      }
      console.log(node + "-->" + connections);
    }
  }
}
