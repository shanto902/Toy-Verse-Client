import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ToyCard from "../../../components/ToyCard/ToyCard";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    const filtered = toys.filter(
      (toy) => toy.subcategory === selectedSubcategory
    );
    setFilteredToys(filtered);
  }, [toys, selectedSubcategory]);

  useEffect(() => {
    setSelectedSubcategory("Marvel"); // Set the initial selected subcategory here
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10 ">
      <Tabs className="mt-10 mb-10" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex flex-row items-center w-full justify-center gap-4 text-2xl">
          <Tab
            onClick={() => setSelectedSubcategory("Marvel")}
            className={`rounded p-3 ${tabIndex === 0 ? ' bg-gray-700 text-white' : ''}`}
          >
            Marvel
          </Tab>
          <Tab
            onClick={() => setSelectedSubcategory("DC")}
            className={`rounded p-3 ${tabIndex === 1 ? ' bg-gray-700 text-white' : ''}`}
          >
            DC
          </Tab>
          <Tab
            onClick={() => setSelectedSubcategory("One Piece")}
            className={`rounded p-3 ${tabIndex === 2 ? ' bg-gray-700 text-white' : ''}`}
          >
            One Piece
          </Tab>
        </TabList>

        <TabPanel className="flex flex-row justify-center items-center">
          {filteredToys.length > 0 ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {filteredToys.map((toy) => (
                <ToyCard key={toy._id} toy={toy}></ToyCard>
              ))}
            </div>
          ) : (
            <h2>No toys found in this category</h2>
          )}
        </TabPanel>
        <TabPanel>
          {filteredToys.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">
              {filteredToys.map((toy) => (
                <ToyCard key={toy._id} toy={toy}></ToyCard>
              ))}
            </div>
          ) : (
            <h2>No toys found in this category</h2>
          )}
        </TabPanel>
        <TabPanel>
          {filteredToys.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">
              {filteredToys.map((toy) => (
                <ToyCard key={toy._id} toy={toy}></ToyCard>
              ))}
            </div>
          ) : (
            <h2>No toys found in this category</h2>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
