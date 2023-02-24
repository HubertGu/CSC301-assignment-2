// Adapted from: https://codesandbox.io/s/workflow-cytoscape-chart-zny07?file=/src/workflow-cytoscape-chart.tsx (Retrieved on February 20th, 2023).
import React, { ReactElement, useEffect, useRef, useState, useCallback} from "react";
import cytoscape from "cytoscape";
import dagre from 'cytoscape-dagre';
import CytoscapeComponent from "react-cytoscapejs";
import ele from "./tests/mock-data";
import layout from "./layout";
import stylesheet from "./stylesheet";
import Searchbar from "../SearchBar";
import NodeSideDrawer from "../NodeSideDrawer";
import { Paper, AppBar, Toolbar, Slider, Box} from "@mui/material"
cytoscape.use(dagre);

const CytoscapeGraph = () => {
  const cyRef = useRef<cytoscape.Core | null>(null);

  // Search highlight function
  const [searchString, setSearchString] = useState('');
  useEffect(() => {
    const elements = cyRef.current.nodes();
    elements.forEach((ele) => {
      if (searchString && ele.isNode() && ele.data('label').toLowerCase().includes(searchString.toLowerCase())) {
        ele.addClass('highlight');
      } else {
        ele.removeClass('highlight');
      }
    });
  }, [searchString]);

  // Node side drawer function
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    cyRef.current.on("click", "node", (event) => {
      const node = event.target;
      console.log( 'clicked ' + node.id() );
      setOpen(true);
    });
  }, [open]);

  // Magnification function
  // need to change the type of zoom
  const [magnificationValue, setMagnificationValue] = useState(1);
  const handleSliderChange = useCallback((event, value) => {
    setMagnificationValue(value);
    if (cyRef) {
      cyRef.current.zoom(value);
    }
  }, [setMagnificationValue, cyRef]);
  

  return (
  <Box>
    <AppBar position="absolute">
      <Toolbar sx={{backgroundColor:"#D9D9D9", justifyContent: "space-between"}}>
      <Slider
        size="small"
        value={magnificationValue}
        onChange={handleSliderChange}
        valueLabelDisplay="off"
        sx={{ width: 150, height: 5 }}
        step={0.1}
        min={1}
        max={7}
      />
      <Searchbar searchString={searchString} setSearchString={setSearchString}/>
      </Toolbar>
    </AppBar>
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Toolbar />
      <Box display="grid" gridTemplateColumns={"repeat(12, 1fr)"} gap={1}>
        <Box gridColumn="span 9"> 
          <Paper sx={{flexDirection: 'column', flexGrow: 1}}>
            <CytoscapeComponent 
              autoungrabify={false}
              minZoom={1}
              maxZoom={7}
              boxSelectionEnabled={false}
              cy={(cy) => cyRef.current = cy}
              elements={ele}
              layout={layout}
              style={{
                position: "sticky",
                width: "100%",
                height: "700px",
              }}
              stylesheet={stylesheet}
            />
          </Paper>
        </Box>
        <Box gridColumn="span 3">
          <Paper sx={{display: 'flex', flexDirection: 'column', height: "100%"}}/>
          <NodeSideDrawer open={open} setOpen={setOpen} />
        </Box>
      </Box>
    </Box>
  </Box>
  );
};

export default CytoscapeGraph;