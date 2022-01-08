function parseLastSync(itemObj) {

    itemObj.lastSync = itemObj.lastSync ? iml.parseDate(itemObj.lastSync) : null;
    return itemObj;

    // itemObj.lastSync = iml.parseDate(itemObj.lastSync);
    /*  return {
         itemObj
     } */
}

