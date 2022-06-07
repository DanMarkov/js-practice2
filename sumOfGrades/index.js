let grades = [10, 5, 15, 20]

const sum = grades => {
	return grades.reduce((total, current) => {
        return total + current;
    }, 0);

}

console.log(sum(grades));