function bubbleSort(list) {
    for(let i = 0; i < list.length; i++) {
        for(let j = 0; j < (list.length - 1); j++) {
            if (list[j] > list[j + 1]) {
                let aux = list[j]
                list[j] = list[j + 1]
                list[j + 1] = aux
            }
        }
    }
    return list
}

const numbers = [1, 5, 3, 2, 1, 0, 10]
const heights = [1.79, 1.64, 1.45, 1.89, 2.10, 1.20]
const years = [2001, 2000, 1993, 1990, 1964, 2017, 2016]

console.log(bubbleSort(numbers)) // [ 0, 1, 1, 2, 3, 5, 10 ]
console.log(bubbleSort(heights)) // [ 1.2, 1.45, 1.64, 1.79, 1.89, 2.1 ]
console.log(bubbleSort(years)) // [ 1964, 1990, 1993, 2000, 2001, 2016, 2017 ]