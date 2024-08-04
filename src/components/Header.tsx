import React from "react";

export default function Header() {
	return (
		<header className="flex justify-between">
            <div className="logo">
                
            </div>
			<div className="flex gap-2">
				<button>Подписаться</button>
				<button>Авторизоваться</button>
			</div>
		</header>
	);
}
