module.exports = toArray

function toArray(list) {
    var array = []

    for (var i = 0; i < list.length; i++) {
        array[i] = list[i]
    }

    return array
}
