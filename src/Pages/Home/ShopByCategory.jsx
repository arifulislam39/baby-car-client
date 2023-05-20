import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ShopByCategory = () => {
  return (
    <div className="text-center">
      <h2 className="text-6xl font-bold mt-20">Shop by Category</h2>
      <div className="text-center mt-10">
        <Tabs>
          <TabList>
            <Tab>CAR</Tab>
            <Tab>JEEP</Tab>
            <Tab>TRUCK</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
