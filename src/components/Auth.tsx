import React, { ChangeEvent, useState } from "react";
import { confirmEmail, login } from "../services/http.service.ts";

function Auth() {
	const [form, setForm] = useState({
		email: "sashapranker2@gmail.com",
		code: "",
	});

	function onChange(key: string, e: ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setForm((prev) => {
			return { ...prev, [key]: value };
		});
	}

	function getCode(e) {
		e.preventDefault();
		login(form.email);
	}

	function confirm(e) {
		e.preventDefault();
		confirmEmail(form.email, form.code).then((res) => {
			const code = res.oid;
			localStorage.setItem("user_id", code);
		});
	}

	return (
		<>
			<form>
				<h2>Введите почту</h2>
				<p>к вам придет письмо на указанную почту</p>
				<input value={form.email} onChange={(e) => onChange("email", e)} type="email" />
				<button onClick={(e) => getCode(e)}>Получить код</button>
			</form>
			<form>
				<h2>Введите код</h2>
				<input value={form.code} onChange={(e) => onChange("code", e)} type="text" />
				<button onClick={(e) => confirm(e)}>Подтвердить</button>
			</form>
		</>
	);
}

export default Auth;
