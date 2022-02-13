
import { Link } from "react-router-dom";
import avatar1 from "../../../assets/1.svg";
import avatar2 from "../../../assets/2.svg";
import avatar3 from "../../../assets/3.svg";
import avatar4 from "../../../assets/4.svg";
import avatar5 from "../../../assets/5.svg";
import avatar6 from "../../../assets/6.svg";

const avatars = [
	{
		name: "Gentleman",
		avatar: avatar1
	},
	{
		name: "warrior",
		avatar: avatar2
	},
	{
		name: "Black Widow",
		avatar: avatar3
	},
	{
		name: "Scarlett Witch",
		avatar: avatar4
	},
	{
		name: "Captian Marvel",
		avatar: avatar5
	},
	{
		name: "Mr. hulk",
		avatar: avatar6
	},
];

export default function chatroomSidebar({ avatarName, avatarUrl }) {
	return (
		<>
			<div className="flex flex-no-wrap">
				{/* Sidebar starts */}
				{/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
				<div className="w-72 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
					<div className="px-4">
						{/* <div className="h-16 w-full flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={144}
								height={30}
								viewBox="0 0 144 30"
							>
								<path fill="#5F7DF2" d="../../../assets/art.jpg" />
							</svg>
						</div> */}
						<h3 className="text-white mx-3 my-9 text-uppercase text-bold">
							Participants
						</h3>
						<div className="p-5">

							{avatars.map((avatar, index) => {
								return (
									<div className="flex text-white py-2 gap-4 items-center">
										<img className="w-10 h-10" src={avatar.avatar} />
										<div className="text-lg">{avatar.name}</div>
									</div>
								);
							})}

						</div>
						{/* <ul className="mt-12">
							<li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-grid"
										width={18}
										height={18}
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" />
										<rect x={4} y={4} width={6} height={6} rx={1} />
										<rect x={14} y={4} width={6} height={6} rx={1} />
										<rect x={4} y={14} width={6} height={6} rx={1} />
										<rect x={14} y={14} width={6} height={6} rx={1} />
									</svg>
									<span className="text-sm  ml-2">Dashboard</span>
								</div>
							</li>
							<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-puzzle"
										width={18}
										height={18}
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" />
										<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
									</svg>
									<span className="text-sm  ml-2">Products</span>
								</div>
							</li>
							<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-compass"
										width={18}
										height={18}
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" />
										<polyline points="8 16 10 10 16 8 14 14 8 16" />
										<circle cx={12} cy={12} r={9} />
									</svg>
									<span className="text-sm  ml-2">Performance</span>
								</div>
							</li>
							<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-code"
										width={20}
										height={20}
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" />
										<polyline points="7 8 3 12 7 16" />
										<polyline points="17 8 21 12 17 16" />
										<line x1={14} y1={4} x2={10} y2={20} />
									</svg>
									<span className="text-sm  ml-2">Deliverables</span>
								</div>
							</li>
							<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-puzzle"
										width={18}
										height={18}
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" />
										<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
									</svg>
									<span className="text-sm  ml-2">Invoices</span>
								</div>
							</li>
							<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-stack"
										width={18}
										height={18}
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" />
										<polyline points="12 4 4 8 12 12 20 8 12 4" />
										<polyline points="4 12 12 16 20 12" />
										<polyline points="4 16 12 20 20 16" />
									</svg>
									<span className="text-sm  ml-2">Inventory</span>
								</div>
							</li>
							<li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
								<div className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-settings"
										width={18}
										height={18}
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" />
										<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
										<circle cx={12} cy={12} r={3} />
									</svg>
									<span className="text-sm  ml-2">Settings</span>
								</div>
							</li>
						</ul> */}
						<Link className="text-white text-lg flex justify-center items-center rounded-lg bg-red-500 tracking-wider p-2" to="/">Leave Room</Link>
						<div className="flex justify-center mt-48 mb-4 w-full">
							<div className="relative ">
								<div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
