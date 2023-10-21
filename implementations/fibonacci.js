const fibonacci = (number) => {
    if (number <= 0) {
        return 0;
    } else if (number <= 1) {
        return 1;
    } else if (number <= 2) {
        return 2;
    }

    return fibonacci(number-1) + fibonacci(number-2);
};

console.log(fibonacci(45));