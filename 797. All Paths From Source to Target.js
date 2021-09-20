/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    let res = [];
    const helper = (path) => {
        let ind = path[path.length - 1];
        if (ind == graph.length - 1) res.push([...path]);
        let node = graph[ind];
        for (let i = 0; i < node.length; i++) {
            path.push(node[i]);
            helper(path);
            path.pop();
        }
    }
    helper([0]);
    return res;
};