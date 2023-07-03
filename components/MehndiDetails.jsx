"use client";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import Image from 'next/image';

const MehndiDetails = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex justify-center items-center">
      {show ? (
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 shadow cursor-pointer" onClick={handleShow}>
              <Image
                src="/image-1.png"
                width={300}
                height={300}
                alt="logo"
              />
            </div>

            {/* Add other cards here */}
             {/* Card 2 */}
                <div className="bg-white p-4 shadow">
                  <Image 
                    src='/image-1.png'
                    width={300}
                    height={300}
                    alt='logo'
                  
                  />
                </div>

                {/* Card 3 */}
                <div className="bg-white p-4 shadow">
                  <Image 
                    src='/image-1.png'
                    width={300}
                    height={300}
                    alt='logo'
                  
                  />
                </div>

                {/* Card 4 */}
                <div className="bg-white p-4 shadow">
                  <Image 
                    src='/image-1.png'
                    width={300}
                    height={300}
                    alt='logo'
                  
                  />
                </div>

                {/* Card 5 */}
                <div className="bg-white p-4 shadow">
                  <Image 
                    src='/image-1.png'
                    width={300}
                    height={300}
                    alt='logo'
                  
                  />
                </div>

                {/* Card 6 */}
                <div className="bg-white p-4 shadow">
                  <Image 
                    src='/image-1.png'
                    width={300}
                    height={300}
                    alt='logo'
                  
                  />
                </div>

          </div>
          <Transition.Root show={show} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-50 overflow-y-auto"
              onClose={handleShow}
            >
              <div className="flex items-center justify-center min-h-screen">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                <div className="bg-white rounded-lg p-6">
                  {/* Card details content */}
                  <p>Card Details</p>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
          <button
            onClick={handleShow}
            className="rounded-full text-black border-2 border-solid border-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 mt-10"
          >
            Show Less
          </button>
        </div>
      ) : (
        <button
          onClick={handleShow}
          className="rounded-full text-black border-2 border-solid border-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 mt-10"
        >
          Show More
        </button>
      )}
    </div>
  );
};


export default MehndiDetails