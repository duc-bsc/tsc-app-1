import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import SearchForm from "../../partials/actions/SearchForm";
import Users from "../../partials/dealers/User";
import ModalBasic from "../../components/ModalBasic";
function AllDealerships() {
	const its = [
		{
			id: 0,
			name: "Duc",
			link: "#0",
			email: "123abc@gmail.com",
			content: "Admin",
			password: "123456",
		},
	];
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [items, setItems] = useState(its);
	const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
	const [modalData, setModalData] = useState({});
	const onChange = (e) => {
		setModalData({
			...modalData,
			[e.target.name]: e.target.value,
		});
	};
	const handleModal = (e) => {
		if(modalData.email&&modalData.password){
			let i = {
				id: items.length,
				name: "",
				link: "",
				email: modalData.email,
				content: "",
				password: modalData.password,
			};
			setItems([...items, i]);
			setModalData({});
			e.stopPropagation();
			setFeedbackModalOpen(false);
		}
		
	};

	return (
		<div className="flex h-screen overflow-hidden">
			{/* Sidebar */}
			<Sidebar
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
			/>

			{/* Content area */}
			<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
				{/*  Site header */}
				<Header
					sidebarOpen={sidebarOpen}
					setSidebarOpen={setSidebarOpen}
				/>

				<main>
					<div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
						{/* Page header */}
						<div className="sm:flex sm:justify-between sm:items-center mb-8">
							{/* Left: Title */}
							<div className="mb-4 sm:mb-0">
								<h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                                Dealerships. ✨
								</h1>
							</div>

							{/* Right: Actions */}
							<div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
								{/* Search form */}
								<SearchForm />
								{/* Add member button */}
								<button
									className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
									onClick={(e) => {
										e.stopPropagation();
										setFeedbackModalOpen(true);
									}}
								>
									<svg
										className="w-4 h-4 fill-current opacity-50 shrink-0"
										viewBox="0 0 16 16"
									>
										<path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
									</svg>
									<span className="hidden xs:block ml-2">
										Create Dealerships
									</span>
								</button>
							</div>
						</div>

						{/* Cards */}
						<div className="grid grid-cols-12 gap-6">
							{items.map((item) => {
								return (
									<Users
										key={item.id}
										id={item.id}
										name={item.name}
										link={item.link}
										email={item.email}
										content={item.content}
									/>
								);
							})}
						</div>
					</div>
				</main>
			</div>
			{/* modal */}
			<ModalBasic
				id="feedback-modal"
				modalOpen={feedbackModalOpen}
				setModalOpen={setFeedbackModalOpen}
				title="Create New Dealership"
			>
				{/* Modal content */}
				<div className="px-5 py-4">
					<div className="text-sm">
						<div className="font-medium text-slate-800 mb-3">
							Complete the form and hit submit 🙌
						</div>
					</div>
					<div className="space-y-3">
						<div>
							<label
								className="block text-sm font-medium mb-1"
								htmlFor="name"
							>
								Name{" "}
								<span className="text-rose-500">*</span>
							</label>
							<input
								id="name"
								className="form-input w-full px-2 py-1"
								type="name"
								name="name"
								value={modalData.name ?? ""}
								onChange={onChange}
								required
							/>
						</div>
						<div>
							<label
								className="block text-sm font-medium mb-1"
								htmlFor="description"
							>
								Description{" "}
							</label>
							<input
								id="description"
								className="form-input w-full px-2 py-1"
								type="description"
								name="description"
								value={modalData.description ?? ""}
								onChange={onChange}
							/>
						</div>
						<div></div>
					</div>
				</div>
				{/* Modal footer */}
				<div className="px-5 py-4 border-t border-slate-200">
					<div className="flex flex-wrap justify-end space-x-2">
						<button
							className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600"
							onClick={(e) => {
								e.stopPropagation();
								setModalData({});
								setFeedbackModalOpen(false);
							}}
						>
							Cancel
						</button>
						<button
							className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
							onClick={handleModal}
						>
							Create Dealerships
						</button>
					</div>
				</div>
			</ModalBasic>
		</div>
	);
}

export default AllDealerships;
