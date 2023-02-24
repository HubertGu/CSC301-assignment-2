// Adapted from: https://codesandbox.io/s/workflow-cytoscape-chart-zny07?file=/src/workflow-cytoscape-chart.tsx (Retrieved on February 20th, 2023).
import { Stylesheet as CSStylesheet } from 'cytoscape';

export default [
	{
        selector: "node",
        style: {
            "background-color": "#1976d2",
            'text-halign': 'center', // center-align the label text horizontally
            'text-valign': 'center', // center-align the label text vertically
            'text-wrap': 'wrap', // wrap the label text within the node
            'text-max-width': '80px', // set the maximum width of the label text
            'width': 'label', // set the width of the node to fit the label text
            'height': 'label', // set the height of the node to fit the label text
            'padding': '10px', // add padding around the node to create space between 
            // this fixes the text being shifted down on nodes (sadly no fix for edges, but it's not as obvious there without borders)
            shape: "round-rectangle",
        },
      },
      {
        selector: 'node.highlight',
        style: {
          'line-color': 'black',
          'target-arrow-color': 'black',
          'source-arrow-color': 'black',
          'border-color': 'red',
          'border-width': '2px'
        }
    }, 
    {
        selector: "node[label]",
        style: {
            label: "data(label)",
            "font-size": "12",
            color: "white",
            "text-halign": "center",
            "text-valign": "center",
        },
    }, 
    
    {
        selector: "edge",
        style: {
            "curve-style": "bezier",
            "target-arrow-shape": "triangle",
            width: 1.5,
        },
    },
    {
        selector: "edge[label]",
        style: {
            label: "data(label)",
            "font-size": "12",
            "text-background-color": "white",
            "text-background-opacity": 1,
            "text-background-padding": "2px",
            "text-margin-y": -4,
            // so the transition is selected when its label/name is selected
            "text-events": "yes",
        },
    },
    {
        selector: ":selected",
        style: {
          'border-color': 'red',
          'border-width': '2px'
        },
    },
] as CSStylesheet[];