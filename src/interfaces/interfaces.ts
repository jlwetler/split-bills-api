export interface UserObject {
    name: string, 
    email: string, 
    password: string
};

export interface UserObjectHash {
    name: string, 
    email: string, 
    hashPassword: string
};

export interface Session {
    id: number,
    name: string, 
    email: string,
    token: string

}