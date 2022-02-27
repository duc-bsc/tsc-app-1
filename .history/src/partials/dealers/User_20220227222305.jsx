import React from "react";
import { Link } from "react-router-dom";
import EditMenu from "../../components/DropdownEditMenu";

function Users(props) {
	return (
		<div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200">
			<div className="flex flex-col h-full">
				{/* Card top */}
				<div className="grow p-5">
					{/* Menu button */}
					<div className="relative">
						<EditMenu
							align="right"
							className="absolute top-0 right-0 inline-flex"
						>
							<li>
								<Link
									className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
									to="#0"
								>
									Option 1
								</Link>
							</li>
							<li>
								<Link
									className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
									to="#0"
								>
									Option 2
								</Link>
							</li>
							<li>
								<Link
									className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
									to="#0"
								>
									Remove
								</Link>
							</li>
						</EditMenu>
					</div>
					{/* Image + name */}
					<header>
						<div className="text-center">
							<Link
								className="inline-flex text-slate-800 hover:text-slate-900"
								to={props.link}
							>
								<h2 className="text-xl leading-snug justify-center font-semibold">
									{props.name}
								</h2>
							</Link>
						</div>
						<div className="flex justify-start items-center">
							<a href={`mailto:${props.email}`}>{props.email}</a>
						</div>
					</header>
					{/* Bio */}
					<div className=" mt-2">
						<div className="text-sm">{props.content}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Users;
