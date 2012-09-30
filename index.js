module.exports = toArray

function toArray(list, index) {
    var array = []

    for (var i = index || 0; i < list.length; i++) {
        array[i] = list[i]
    }

    return array
}
