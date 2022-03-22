function get(target, key, defaultVal = null) {
    let keys = key.split('.'), last = target;

    for (let i = 0; i <= keys.length - 1; i++) {
        if (typeof last[keys[i]] === 'undefined' ||
            last[keys[i]] === null
        ) {
            return defaultVal;
        }

        if (i === keys.length - 1) {
            return last[keys[i]];
        }
        last = last[keys[i]];
    }
}