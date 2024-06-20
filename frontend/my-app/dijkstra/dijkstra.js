function dijkstra(graph, start, target, ignoreNodes = new Set()) {
    const distances = new Map();
    const predecessors = new Map();
    const pq = [];

    graph.getVertices().forEach(vertex => {
        distances.set(vertex, Infinity);
        predecessors.set(vertex, null);
    });

    distances.set(start, 0);
    pq.push([start, 0]);

    while (pq.length > 0) {
        pq.sort((a, b) => a[1] - b[1]);
        const [currentVertex, currentDistance] = pq.shift();

        if (currentVertex === target) break;

        if (ignoreNodes.has(currentVertex) && currentVertex !== start && currentVertex !== target) {
            continue;
        }

        graph.neighbors(currentVertex).forEach(neighbor => {
            const weight = graph.getWeight(currentVertex, neighbor);
            const alt = currentDistance + weight;

            if (alt < distances.get(neighbor)) {
                distances.set(neighbor, alt);
                predecessors.set(neighbor, currentVertex);
                pq.push([neighbor, alt]);
            }
        });
    }

    const path = [];
    let u = target;

    while (predecessors.get(u) !== null) {
        path.unshift(u);
        u = predecessors.get(u);
    }
    path.unshift(start);

    return path.length > 1 ? path : [];
}
