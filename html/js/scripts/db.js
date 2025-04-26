const apiUrl = 'https://nettuts.hu/jms/nemethildiko/';


export const getAll = (entity='users')=>{
    return fetch(apiUrl+entity).then(res=>res.json());

};
