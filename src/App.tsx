import { useCallback, useState } from "react";
import "./App.css";
import Tab from "./components/Tab";

function App() {
  const [currentTab, setCurrentTab] = useState<number>(1);

  const handleTabChange = useCallback(
    (indexToSet: number) => {
      setCurrentTab((prev) => (prev = indexToSet));
    },
    [currentTab]
  );

  return (
    <Tab currentTab={currentTab} handleTabChange={handleTabChange}>
      <Tab.TabHead>
        <Tab.TabHeadItem tabIndex={1}>Option 1</Tab.TabHeadItem>
        <Tab.TabHeadItem tabIndex={2}>Option 2</Tab.TabHeadItem>
        <Tab.TabHeadItem tabIndex={3}>Option 3</Tab.TabHeadItem>
      </Tab.TabHead>
      <Tab.TabContainer>
        <Tab.TabContent tabIndex={1}>Tab content 1</Tab.TabContent>
        <Tab.TabContent tabIndex={2}>Tab content 2</Tab.TabContent>
        <Tab.TabContent tabIndex={3}>Tab content 3</Tab.TabContent>
      </Tab.TabContainer>
    </Tab>
  );
}

export default App;
