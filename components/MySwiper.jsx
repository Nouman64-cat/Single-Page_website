"use client";
import { Tab, Tabs, TabList, TabPanel } from '@headlessui/react';


const MySwiper = () => {
  return (
      <Tabs>
      <TabList className="flex space-x-4">
        <Tab
          className={({ selected }) =>
            `px-4 py-2 bg-gray-200 ${selected ? 'bg-blue-500 text-white' : ''}`
          }
        >
          Tab 1
        </Tab>
        <Tab
          className={({ selected }) =>
            `px-4 py-2 bg-gray-200 ${selected ? 'bg-blue-500 text-white' : ''}`
          }
        >
          Tab 2
        </Tab>
        <Tab
          className={({ selected }) =>
            `px-4 py-2 bg-gray-200 ${selected ? 'bg-blue-500 text-white' : ''}`
          }
        >
          Tab 3
        </Tab>
      </TabList>

      <TabPanel>
        <p>Content for Tab 1</p>
      </TabPanel>
      <TabPanel>
        <p>Content for Tab 2</p>
      </TabPanel>
      <TabPanel>
        <p>Content for Tab 3</p>
      </TabPanel>
    </Tabs>
  )
}

export default MySwiper