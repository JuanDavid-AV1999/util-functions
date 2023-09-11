const isObjectValid = (...objects) => {
    return objects.every((item) => {
        return typeof item === 'object' && Object.keys(item).length > 0;
    });
};

export const objectsDiff = (object, compareObject) => {
    if (!isObjectValid(object, compareObject)) return {};

    let objDiff = {};

    for (const key in compareObject) {
        if (!object.hasOwnProperty(key)) objDiff[key] = compareObject[key];
    }

    for (const key in object) {
        if (compareObject[key] !== undefined) {
            if (typeof object[key] === 'object') {
                const diff = objectsDiff(object[key], compareObject[key]);
                if (Object.keys(diff).length > 0) objDiff[key] = diff;
            } else if (compareObject[key] != object[key]) objDiff[key] = compareObject[key];
        } else objDiff[key] = null;
    }

    return objDiff;
};
