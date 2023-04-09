const tokenKey = 'token';
const bearerKey = 'bearer';
const usernameKey = 'username';
const nameKey = 'name';

export function getAuthenticationToken(){
    return localStorage.getItem(bearerKey) + ' ' + localStorage.getItem(tokenKey);
}

export function setAuthenticationToken(token = ''){
    return localStorage.setItem(tokenKey, token);
}

export function setAuthenticationBearer(bearer = ''){
    return localStorage.setItem(bearerKey, bearer);
}

export function getAuthenticatedUsername(){
    return localStorage.getItem(usernameKey);
}

export function setAuthenticatedUsername(username = ''){
    return localStorage.setItem(usernameKey, username);
}

export function getAuthenticatedName(){
    return localStorage.getItem(nameKey);
}

export function setAuthenticatedName(name = ''){
    return localStorage.setItem(nameKey, name);
}

export function logout(){
    return localStorage.clear();
}
