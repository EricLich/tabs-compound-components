import { createContext, ReactNode, useContext, useState } from "react";

type TabContextValues = {
  currentTab: number;
  handleTabChange: null | ((indexToSet: number) => void);
};

const TabContext = createContext<TabContextValues>({
  currentTab: 1,
  handleTabChange: null,
});

const Tab = ({ children }: any) => {
  const [currentTab, setCurrentTab] = useState<number>(1);

  const handleTabChange = (indexToSet: number): void => {
    setCurrentTab((prev: number) => (prev = indexToSet));
  };

  console.log(handleTabChange);
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
    handleTabChange !== null && (
      <div
        style={{
          cursor: "pointer",
          color: currentTab === tabIndex ? "lightslategrey" : "",
        }}
        onClick={() => handleTabChange(tabIndex)}
      >
        {children}
      </div>
    )
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
