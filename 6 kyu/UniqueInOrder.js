// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

var uniqueInOrder = function (iterable) {
    if (iterable.length === 1)
        return [iterable];

    let newArr = [];

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] != iterable[i + 1])
            newArr.push(iterable[i]);
    }
    return newArr;

}