import { useState } from "react"
import VisualState from "./VisualState.jsx"
import { dataNotifications } from "../lib/datacomments.js"

function Notifications() {
	const [allRead, setAllRead] = useState("no")
	const [numNotifications, setNumNotifications] = useState(3)

	const handleClick = () => {
		setAllRead("yes")
		setNumNotifications(0)
	}

	return (
		<div className="pt-5 px-2 max-w-[375px]">
			<div className="notification-head pb-4 flex flex-row items-center justify-between">
				<div>
					<label className="text-xl font-bold">Notifications</label>
					<label className="text-md px-3 py-1 ml-2 rounded-md text-white font-bold bg-[#0a317b]">
						{numNotifications}
					</label>
				</div>
				<label
					className="text-[15px] text-[#5e6778] cursor-pointer"
					onClick={handleClick}
				>
					Mark all as read
				</label>
			</div>
			<div>
				{dataNotifications.map((item) => (
					<div key={item.username} className="flex mt-4 mb-7">
						<img
							className="rounded-full h-[40px] min-w-[40px] ml-4 mr-3"
							src={item.avatar}
						/>
						<div className="pr-4">
							<div className="flex">
								<div className="text-sm">
									<label className="font-bold cursor-pointer hover:text-[#0a317b]">
										{item.username}
									</label>{" "}
									<label className="text-[#5e6778]">{item.paragraph}</label>{" "}
									<label className="font-bold cursor-pointer text-[#1c202b] hover:text-[#0a317b]">
										{item.link}{" "}
									</label>{" "}
									{item.isread === "no" && (
										<label className="w-2 ml-1 inline-block">
											{allRead === "no" && <VisualState />}
										</label>
									)}
								</div>
								{item.picture !== "" && (
									<img className="ml-3 h-10" src={item.picture} />
								)}
							</div>
							<div className="text-sm text-[#939dae] mb-3">
								{item.timestamp}
							</div>
							{item.message !== "" && (
								<div className="text-sm pl-4 py-3 pr-6 border rounded-md text-[#5e6778]">
									{item.message}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Notifications
