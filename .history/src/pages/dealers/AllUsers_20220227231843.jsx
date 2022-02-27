import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import ModalBasic from "../../components/ModalBasic";

function AllUsers() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);

	return (
		<div className="flex h-screen overflow-hidden">
			{/* Sidebar */}
			<Sidebar
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
			/>

			{/* Content area */}
			<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
				{/*  Site header */}
				<Header
					sidebarOpen={sidebarOpen}
					setSidebarOpen={setSidebarOpen}
				/>

				<main>
					<div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
						<div className="border-t border-slate-200">
							{/* Components */}
							<div className="space-y-8 mt-8">
								{/* Product */}
								<div>
									<div className="flex flex-wrap items-center -m-1.5">
										{/* Send Feedback */}
										<div className="m-1.5">
											{/* Start */}
											<button
												className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
												aria-controls="feedback-modal"
												onClick={(e) => {
													e.stopPropagation();
													setFeedbackModalOpen(true);
												}}
											>
												Send Feedback
											</button>
										
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
