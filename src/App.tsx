import "./App.css";
import Tab from "./components/Tab";

function App() {
  return (
    <div className="App">
      <Tab>
        <Tab.TabHead>
          <Tab.TabHeadItem tabIndex={1}>Tab 1</Tab.TabHeadItem>
          <Tab.TabHeadItem tabIndex={2}>Tab 2</Tab.TabHeadItem>
          <Tab.TabHeadItem tabIndex={3}>Tab 3</Tab.TabHeadItem>
        </Tab.TabHead>
        <Tab.TabContainer>
          <Tab.TabContent tabIndex={1}>Tab content 1</Tab.TabContent>
          <Tab.TabContent tabIndex={2}>Tab content 2</Tab.TabContent>
          <Tab.TabContent tabIndex={3}>Tab content 3</Tab.TabContent>
        </Tab.TabContainer>
      </Tab>
    </div>
  );
}

export default App;
