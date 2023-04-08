const tokenKey = 'Bearer';

export function getAuthenticationToken(){
    return localStorage.getItem( tokenKey );
}

export function setAuthenticationToken( token = '' ){
    return localStorage.setItem( tokenKey, token );
}
