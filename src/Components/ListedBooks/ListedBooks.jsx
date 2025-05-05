import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ListedBooks = () => {
    return (
        <div className='lg:w-[1200px] mx-auto'>
            <button className="btn btn-block h-20 text-2xl rounded-2xl my-6">Books</button>

            {/* Tabs */}
            <Tabs>
                <TabList>
                    <Tab>
                        Read Books
                    </Tab>
                    <Tab>
                        Wishlist Books
                    </Tab>

                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;