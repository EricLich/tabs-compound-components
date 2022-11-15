import { createContext, useContext } from "react";

const TabContext = createContext<{ currentTab: number; handleTabChange: any }>({
  currentTab: 1,
  handleTabChange: null,
});

const Tab = ({ children, currentTab, handleTabChange }: any) => {
  return (
    <TabContext.Provider value={{ currentTab, handleTabChange }}>
      {children}
    </TabContext.Provider>
  );
};

export default Tab;

Tab.TabHead = ({ children }: any) => {
  return <div>{children}</div>;
};

Tab.TabHeadItem = ({ children, tabIndex }: any): any => {
  const { currentTab } = useContext(TabContext);
  return tabIndex === currentTab && <div>{children}</div>;
};

Tab.TabContainer = ({ children }: any) => {
  return <div>{children}</div>;
};

Tab.TabContent = ({ children, tabIndex }: any): any => {
  const { currentTab } = useContext(TabContext);
  return tabIndex === currentTab && <div>{children}</div>;
};
