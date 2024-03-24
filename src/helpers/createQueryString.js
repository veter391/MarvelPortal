// creates a query string from query object
function createQueryString(queryObject = {}) {
    let queryString = Object.keys(queryObject)
        .filter((key) => queryObject[key] && !(Array.isArray(queryObject[key]) && !queryObject[key].length))
        .map((key) => {
            return Array.isArray(queryObject[key]) ? queryObject[key].map(item => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`).join('&') : `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`;
        }).join('&');
    return queryString ? `?${queryString}` : "";
};

export default createQueryString;