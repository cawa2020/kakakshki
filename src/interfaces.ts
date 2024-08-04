export interface Auth {
    oid: string
}

export interface User {
    email: string,
    username: string,
    user_timezone: string,
    is_subscribed: boolean
}