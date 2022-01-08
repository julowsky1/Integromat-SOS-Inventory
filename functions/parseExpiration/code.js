function parseExpiration(itemObj) {

    itemObj.expiration = itemObj.expiration ? iml.parseDate(itemObj.expiration) : null;
    return itemObj;
}

