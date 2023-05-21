import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Category = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>
      {toys.map((toy) => (
        <p key={toy._id}></p>
      ))}

      <Tabs>
        <TabList className='flex flex-row items-center w-full justify-center gap-4 text-2xl'>
          <Tab className=' rounded p-3'>Marvel</Tab>
          <Tab>DC</Tab>
          <Tab>One Piece</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
