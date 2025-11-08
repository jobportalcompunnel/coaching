function printPyramid(rows) {
  for (let i = 0; i < rows; i++) {
    // Create a string with spaces for alignment
    let line = " ".repeat(rows - i - 1);

    // Append stars to create the pyramid shape
    line += "*".repeat(2 * i + 1);

    // Print the completed line
    console.log(line);
  }
}

// Example usage:
printPyramid(5);
" m".repeat(8)