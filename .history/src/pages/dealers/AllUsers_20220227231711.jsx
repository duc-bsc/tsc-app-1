import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import ModalBasic from '../../components/ModalBasic';
import ModalCookies from '../../components/ModalCookies';
import ModalBlank from '../../components/ModalBlank';
import ModalAction from '../../components/ModalAction';
import ModalSearch from '../../components/ModalSearch';

import AnnouncementIcon from '../../images/announcement-icon.svg';
import ModalImage from '../../images/modal-image.jpg';

function AllUsers() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [scrollbarModalOpen, setScrollbarModalOpen] = useState(false)
  const [cookiesModalOpen, setCookiesModalOpen] = useState(false)
  const [successModalOpen, setSuccessModalOpen] = useState(false)
  const [dangerModalOpen, setDangerModalOpen] = useState(false)
  const [infoModalOpen, setInfoModalOpen] = useState(false)
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false)
  const [announcementModalOpen, setAnnouncementModalOpen] = useState(false)
  const [integrationModalOpen, setIntegrationModalOpen] = useState(false)
  const [newsModalOpen, setNewsModalOpen] = useState(false)
  const [planModalOpen, setPlanModalOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Modal ✨</h1>
            </div>

            <div className="border-t border-slate-200">

              {/* Components */}
              <div className="space-y-8 mt-8">
              
               

              
                
                {/* Product */}
                <div>
                  <h2 className="text-2xl text-slate-800 font-bold mb-6">Product</h2>
                  <div className="flex flex-wrap items-center -m-1.5">

                    {/* Send Feedback */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="feedback-modal" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}>Send Feedback</button>
                      <ModalBasic id="feedback-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen} title="Send Feedback">
                        {/* Modal content */}
                        <div className="px-5 py-4">
                          <div className="text-sm">
                            <div className="font-medium text-slate-800 mb-3">Let us know what you think 🙌</div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="name">Name <span className="text-rose-500">*</span></label>
                              <input id="name" className="form-input w-full px-2 py-1" type="text" required />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="email">Email <span className="text-rose-500">*</span></label>
                              <input id="email" className="form-input w-full px-2 py-1" type="email" required />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="feedback">Message <span className="text-rose-500">*</span></label>
                              <textarea id="feedback" className="form-textarea w-full px-2 py-1" rows="4" required></textarea>
                            </div>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="px-5 py-4 border-t border-slate-200">
                          <div className="flex flex-wrap justify-end space-x-2">
                            <button className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(false); }}>Cancel</button>
                            <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Send</button>
                          </div>
                        </div>
                      </ModalBasic>
                      {/* End */}
                    </div>

        

                    {/* Quick Find */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="quick-find-modal" onClick={(e) => { e.stopPropagation(); setSearchModalOpen(true); }}>Quick Find</button>
                      <ModalSearch id="quick-find-modal" searchId="quick-find" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} />
                      {/* End */}
                    </div>                  
                    
                  </div>
                </div>

              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default AllUsers;