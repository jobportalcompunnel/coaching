function findCommonalities(candidates, vacancies) {
  // Use filter() and map() to find matching objects
  return candidates.filter(candidate =>
    vacancies.some(vacancy => candidate.city === vacancy.city && candidate.salary === vacancy.salary)
  ).map(candidate => ({ city: candidate.city, salary: candidate.salary }));
}

const candidate = [
  { name: "rohit", city: "banglore", salary: 42000 },
  { name: "prabhas", city: "noida", salary: 30000 },
  { name: "rajat", city: "agra", salary: 40000 },
  { name: "amit", city: "banglore", salary: 42000 },
  { name: "rahul", city: "agra", salary: 32000 }
];

const vacancy = [
  { city: "agra", salary: 40000, age: 25 },
  { city: "banglore", salary: 42000, age: 25 }
];

const commonElements = findCommonalities(candidate, vacancy);

commonElements;