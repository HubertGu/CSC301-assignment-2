const mock_data = [
    // nodes
    { data: { id: "Start", label: "Start"}, selectable: false },
    { data: { id: "Step 1", label: "Step 1" }, selectable: true },
    { data: { id: "Step 2.1", label: "Step 2.1" }, selectable: true },
    { data: { id: "Step 2.2", label: "Step 2.2" }, selectable: true },
    { data: { id: "Step 3.1", label: "Step 3.1" }, selectable: true },
    { data: { id: "Step 3.2", label: "Step 3.2" }, selectable: true },
    { data: { id: "Step 4", label: "Step 4" }, selectable: true },
    { data: { id: "End", label: "End" }, selectable: false },
    // edges
    { data: { id: "estart", source: "Start", target: "Step 1", label: "" } },
    { data: { id: "e1", source: "Step 1", target: "Step 2.1", label: "21 mins" } },
    { data: { id: "e2", source: "Step 1", target: "Step 2.2", label: "1 hr" } },
    { data: { id: "e3", source: "Step 2.1", target: "Step 3.1", label: "4 mins" } },
    { data: { id: "e4", source: "Step 2.1", target: "Step 4", label: "30 mins" } },
    { data: { id: "e5", source: "Step 2.2", target: "Step 3.2", label: "2 hrs" } },
    { data: { id: "e6", source: "Step 3.1", target: "Step 4", label: "1.7 hrs" } },
    { data: { id: "e7", source: "Step 3.2", target: "Step 4", label: "2 hrs" } },
    { data: { id: "eend", source: "Step 4", target: "End", label: "" } },
  ];

export default mock_data;
  