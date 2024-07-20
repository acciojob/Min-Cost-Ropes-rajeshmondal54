function mincost(arr) {
    const heap = [...arr];
    let cost = 0;
    heap.sort((a, b) => a - b);

    while (heap.length > 1) {

        const first = heap.shift();
        const second = heap.shift();

        const currentCost = first + second;
        cost += currentCost;

        heap.push(currentCost);

        heap.sort((a, b) => a - b);
    }
    
    return cost;
}

module.exports = mincost;