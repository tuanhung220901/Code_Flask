const flask = new CodeFlask('#code-1', {
    language: 'C++',
    lineNumbers: true,
    // areaId: 'thing1',
    // ariaLabelledby: 'header1',
    //handleTabs: true,
    readonly: true,
  });

  flask.updateCode(`L = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
print(L[2:7])
# Prints ['c', 'd', 'e', 'f', 'g']

  `);
// const code2 = new CodeFlask('.test', {
//     language: 'C++',
//     lineNumbers: true,
//     readonly: true,
//     // areaId: 'thing1',
//     // ariaLabelledby: 'header1',
//     //handleTabs: true,
//   });
// code2.updateCode(`L = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
// print(L[-7:-2])
// # Prints ['c', 'd', 'e', 'f', 'g']
// `);
const flask1 = new CodeFlask('#code-2', {
  language: 'C++',
  lineNumbers: true,
  // areaId: 'thing1',
  // ariaLabelledby: 'header1',
  //handleTabs: true,
  readonly: true,
});

flask1.updateCode(`L = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
print(L[2:7])
# Prints ['c', 'd', 'e', 'f', 'g']
hihi
`);
