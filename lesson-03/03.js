// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(sum1, sum2, sum3) {
    if(sum1 > sum2 && sum1 > sum3){
        return sum1
    } if (sum2 > sum1 && sum2 > sum3){
        return sum2
    } else {
        return sum3
    }    
}

