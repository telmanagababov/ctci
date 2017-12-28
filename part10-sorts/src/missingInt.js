function getMissingInt(array) {
    const BUCKET_SIZE = 5;

    let bucketI = 0,
        bucket = getBucket(array, bucketI, BUCKET_SIZE);

    while (bucket.size === BUCKET_SIZE) {
        bucketI += BUCKET_SIZE;
        bucket = getBucket(array, bucketI, BUCKET_SIZE);
    }

    return getMissingFromBucket(bucket, bucketI, BUCKET_SIZE);
}

function getBucket(array, bucketIndex, bucketSize) {
    let bucket = new Set(),
        bucketMin = bucketIndex,
        bucketMax = bucketIndex + bucketSize - 1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= bucketMin && array[i] <= bucketMax) {
            bucket.add(array[i]);
            if (bucket.size === bucketSize) return bucket;
        }
    }

    return bucket;
}

function getMissingFromBucket(bucket, bucketIndex, bucketSize) {
    let bucketMin = bucketIndex,
        bucketMax = bucketIndex + bucketSize - 1;

    for (let i = bucketMin; i <= bucketMax; i++) {
        if (!bucket.has(i)) return i;
    }
}

module.exports = getMissingInt;