const candidate= [{name: "rohit", city:"banglore", salary: 40000, },
             {name: "prabhas", city:"noida", salary: 30000},
            {name: "rajat", city:"agra", salary: 40000},
            {name: "amit", city:"banglore", salary: 42000},
            {name: "rahul", city:"agra", salary: 32000}];
const vacancy =[{city: "agra", salary: 40000, age:25},
                {city: "banglore", salary: 40000, age:25}];

function foundKey(...rest){ 
const vacancyCity =  vacancy.map(function(item) {
       for(let kitem in item){
         if(rest.indexOf(kitem)===-1){
             delete item[kitem]
          }
        }
 return item;
  });
  const candidateList = candidate.filter(candi => {
      for(let item2 of vacancyCity) {
            if(Object.keys(item2).every(key => candi.hasOwnProperty(key))){
              return Object.values(item2).every(key => Object.values(candi).indexOf(key) !==-1)
            }
      }
  });
 console.log(candidateList)
}
foundKey('city', 'salary');