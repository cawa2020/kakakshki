import { HTTP_URL } from "../App.contants.ts";
import { Auth, User } from "../interfaces.ts";

export async function login(email: string) {
    return _request('auth/login/', "POST", { email: email })
}

export async function confirmEmail(email: string, code: string): Promise<Auth> {
    return _request('auth/confirm/', "POST", { email: email, otp: code });
}

export async function createUser(body: User): Promise<User> {
    return _request('users/', "POST", body);
}

export async function toggleUserSubscribe(user_id: string, value: boolean): Promise<User> {
    const path = `users/${user_id}/` + (value ? "subscribe/": "unsubscribe/");
    return _request(path, "PATCH");
}

async function _request(path: string, method: string, body?: any) {
    const url = HTTP_URL + path;
    const options = { method: method };

    if (body) {
        options["body"] = JSON.stringify(body);
        options["headers"] = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }

    return await fetch(url, options)
        .then((response) => response.json())
        .then((res) => res)
        .catch((error) => {
            console.error(error);
        });
}