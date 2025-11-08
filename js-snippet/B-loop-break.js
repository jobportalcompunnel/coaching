let text = "";

// The first for loop is labeled Loop1:
Loop1:
for (let i = 0; i < 3; i++) {
  text += i + "<br>";

// The second for loop is labeled Loop2:  
  Loop2:
  for (let i = 10; i < 15; i++) {
    text += i + "<br>";
    if (i === 12){ break Loop1;}
  }
}
text;
let text2="";
for (let j = 10; j < 15; j++) {
    text2 += j + "<br>";
    if (j === 12){ break }
  }
text2;