export class Graph {
  public numberOfNode: number;
  public adjacentList: any;
  constructor() {
    this.numberOfNode = 0;
    this.adjacentList = {};
  }

  adVertex(node: any) {
    this.adjacentList[node] = [];
    this.numberOfNode++;
  }

  addEdge(node1: any, node2: any) {
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