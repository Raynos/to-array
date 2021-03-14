module.exports = toArray

function toArray(list, index = 0) {
    let array = [];

    for (let i = index; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array;
}
