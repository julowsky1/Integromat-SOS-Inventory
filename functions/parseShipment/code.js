function parseShipment(itemObj) {

    itemObj.date = itemObj.date ? iml.parseDate(itemObj.date) : null;
    itemObj.shipBy = itemObj.shipBy ? iml.parseDate(itemObj.shipBy) : null;
    return itemObj;

}

