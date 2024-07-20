function mincost(arr)
{ 
//write your code here
	if (arr.length <= 1) {
        return 0;
    }
	const heap = new MinHeap(arr);

    let totalCost = 0;
	while (heap.length > 1) {
		const first = heap.pop();
        const second = heap.pop();
		const cost = first + second;
        totalCost += cost;
		heap.push(cost);
    }
	return totalCost;
// return the min cost
  
}

module.exports=mincost;
