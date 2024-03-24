// turns query string back into an object
function queryStringToObject(queryString = "", options = {}) {
    let queryObject = {};
    queryString && decodeURIComponent(queryString.replace('?', '')).split('&').map((itemString) => {
        let [itemKey, itemValue] = itemString.split("=");
        if (options.hasOwnProperty(itemKey)) {
            if (!queryObject[itemKey] && Array.isArray(options[itemKey])) {
                queryObject[itemKey] = [];
            }
            Array.isArray(options[itemKey]) ? queryObject[itemKey].push(itemValue) : queryObject[itemKey] = typeof options[itemKey] === "number" ? parseInt(itemValue) : itemValue;
        }
    });
    return queryObject;
};

export default queryStringToObject;