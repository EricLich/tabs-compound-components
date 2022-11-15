import { createContext, ReactNode, useContext } from "react";

type TabContextValues = { currentTab: number; handleTabChange: any };

const TabContext = createContext<TabContextValues>({
  currentTab: 1,
  handleTabChange: undefined,
});

const Tab = ({ children, currentTab, handleTabChange }: any) => {
  return (
    <TabContext.Provider value={{ currentTab, handleTabChange }}>
      <div style={{ border: "1px solid white", width: "100%" }}>{children}</div>
    </TabContext.Provider>
  );
};

export default Tab;

Tab.TabHead = ({ children }: any) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid white",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};

Tab.TabHeadItem = ({
  children,
  tabIndex,
}: {
  children: ReactNode;
  tabIndex: number;
}): any => {
  const { currentTab, handleTabChange } = useContext(TabContext);
  return (
    <div
      style={{
        cursor: "pointer",
        color: currentTab === tabIndex ? "lightslategrey" : "",
      }}
      onClick={() => handleTabChange(tabIndex)}
    >
      {children}
    </div>
  );
};

Tab.TabContainer = ({ children }: any) => {
  return <div>{children}</div>;
};

Tab.TabContent = ({ children, tabIndex }: any): any => {
  const { currentTab } = useContext(TabContext);
  return (
    tabIndex === currentTab && <div style={{ padding: "20px" }}>{children}</div>
  );
};
