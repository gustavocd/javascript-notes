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

console.log(bubbleSort(numbers))
console.log(bubbleSort(years))
console.log(bubbleSort(heights))