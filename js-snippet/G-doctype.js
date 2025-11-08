// <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
//  DTD stands for Document Type Definition.
// W3C stands for World Wide Web Consortium.


// // Get a reference to the document object
// const doc = document;

// // Access the doctype property
// const doctype = doc.doctype;

// // Check if doctype exists
// if (doctype) {
//   // Get the doctype name
//   const name = doctype.name;

//   // Option 1: Get only the name (e.g., "html")
//   console.log("DocType name:", name);

//   // Option 2: Construct the full DOCTYPE string (if applicable)
//   let doctypeString = "<!DOCTYPE " + name;
//   if (doctype.publicId) {
//     doctypeString += ' PUBLIC "' + doctype.publicId + '"';
//   }
//   if (!doctype.publicId && doctype.systemId) {
//     doctypeString += ' SYSTEM';
//   }
//   if (doctype.systemId) {
//     doctypeString += ' "' + doctype.systemId + '"';
//   }
//   doctypeString += '>';

//   console.log("Full DOCTYPE:", doctypeString);
// } else {
//   console.log("No DOCTYPE declaration found");
// }