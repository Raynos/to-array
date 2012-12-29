module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index, l = list.length; i < l; i++) {
        array[i - index] = list[i]
    }

    return array
}
