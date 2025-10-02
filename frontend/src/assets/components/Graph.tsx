import { useCallback, useState } from "react";
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, type NodeChange, type Node, type Edge, type EdgeChange, type Connection } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const rootNodes: Node[] = [
  { id: 'r1', position: { x: 0, y: 0 }, data: { label: 'Root Node' }, type: 'default' },
  { id: 'c1', position: { x: -150, y: 100 }, data: { label: 'Child Node 1' }, type: 'default' },
  { id: 'c2', position: { x: 150, y: 100 }, data: { label: 'Child Node 2' }, type: 'default' }];
  
const initialEdges: Edge[] = [
  { id: 'r1-c1', source: 'r1', target: 'c1' },
  { id: 'r1-c2', source: 'r1', target: 'c2' }
];

export default function Graph(){
  const [nodes, setNodes] = useState<Node[]>(rootNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
 
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange<Edge>[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </div>
  );
}