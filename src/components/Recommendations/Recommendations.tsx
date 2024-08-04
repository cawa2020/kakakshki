import React from "react";
import './style.css'

interface Day {
	title: string;
	content: string;
	number: number;
}

export default function Recommendations() {
	const days: Day[] = new Array(31).fill({
		number: Math.round(Math.random() * 10),
		title: "posfkpdosfk",
		content: "sdoihodfig",
		isOpen: false
	});

	// [
	// {
	// 	number: 1,
	// 	title: "",
	// 	content: "",
	// },
	// ];

	function showContent() {}

	return (
		<div className="days-house">
			{days.map((day) => (
				<div onClick={showContent} className="day">
					<img className="w-60" src="window.png" alt="window" />
					<img className="left-plank" src="plank.jpeg" alt="" />
					<img className="right-plank" src="plank.jpeg" alt="" />
					<h4 className="day-number">{day.number}</h4>
					<div className="prev-content">
						<h6>{day.title}</h6>
					</div>
				</div>
			))}
		</div>
	);
}
