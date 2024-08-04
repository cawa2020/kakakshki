import React, { ChangeEvent, useState } from "react";
import { confirmEmail, createUser, login, toggleUserSubscribe } from "../services/http.service.ts";
import { User } from "../interfaces.ts";

function UserPage() {
	const [userForm, setUserForm] = useState({
		email: "",
		username: "",
		is_subscribed: false,
	});

	function onChange(key: string, e: ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setUserForm((prev) => {
			return { ...prev, [key]: value };
		});
	}

	function confirm(e) {
		e.preventDefault();
		const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		createUser({ ...userForm, user_timezone: timezone }).then((res) => {
			console.log("УСПЕХ! ", res);
		});
	}

	function toggleSubscribe(value: boolean) {
		const user_id = localStorage.getItem("user_id");
		if (!user_id) return;
		toggleUserSubscribe(user_id, value).then((res) => console.log(1));
	}

	return (
		<>
			<form>
				<h2>Введите почту</h2>
				<p>к вам придет письмо на указанную почту</p>
				<input value={userForm.email} onChange={(e) => onChange("email", e)} type="email" placeholder="email" />
				<input value={userForm.username} onChange={(e) => onChange("username", e)} type="text" placeholder="username" />
				<input checked={userForm.is_subscribed} onChange={(e) => onChange("is_subscribed", e)} type="checkbox" /> <p>Хочу получать новости</p>
				<button onClick={(e) => confirm(e)}>Создать пользователя</button>
			</form>
			<button onClick={() => toggleSubscribe(true)}>Подписаться</button>
			<button onClick={() => toggleSubscribe(false)}>Отписаться</button>
		</>
	);
}

export default UserPage;
