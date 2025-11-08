function findCommonalities(candidates, vacancies) {
  return candidates.filter(candidate =>
    vacancies.filter(vacancy => {
      return Object.keys(vacancy).every(key => candidate[key] === vacancy[key]);
    })
  );
}

const candidate = [
  { name: "rohit", city: "banglore", salary: 42000, age: 22 },
  { name: "prabhas", city: "noida", salary: 30000, age: 25 },
  { name: "rajat", city: "agra", salary: 40000, age: 25 },
  { name: "amit", city: "banglore", salary: 42000, age: 22 },
  { name: "rahul", city: "agra", salary: 32000, age: 20 }
];

const vacancy = [
  { city: "agra", salary: 40000, age: 25 },
  { city: "banglore", salary: 42000, age: 22 }
]; 

const commonElements = findCommonalities(candidate, vacancy);

commonElements;
