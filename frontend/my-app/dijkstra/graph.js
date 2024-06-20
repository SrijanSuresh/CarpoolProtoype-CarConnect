class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(v) {
        if (!this.adjList.has(v)) {
            this.adjList.set(v, new Map());
            return true;
        }
        return false;
    }

    addEdge(from, to, weight) {
        if (!this.adjList.has(from) || !this.adjList.has(to)) {
            return false;
        }
        this.adjList.get(from).set(to, weight);
        return true;
    }

    getWeight(from, to) {
        if (this.adjList.has(from) && this.adjList.get(from).has(to)) {
            return this.adjList.get(from).get(to);
        }
        return null;
    }

    neighbors(v) {
        if (this.adjList.has(v)) {
            return Array.from(this.adjList.get(v).keys());
        }
        return [];
    }

    getVertices() {
        return Array.from(this.adjList.keys());
    }

    numVertices() {
        return this.adjList.size;
    }

    numEdges() {
        let count = 0;
        this.adjList.forEach(neighbors => {
            count += neighbors.size;
        });
        return count;
    }
}
