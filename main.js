 const str = `
 010-8909-8471
 dothsldk@naver.com
 https://www.omdbapi.com/?
 The quick fox jumps over the lazy dog.
 abbcccdddd
 http://localhost:12334
 `



//  const regexp = /fox/gi
//  console.log(regexp.test(str));

//  const regexp2 = /jumps/gi
//  console.log(str.replace(regexp2, 'AAA'));

console.log(
  str.match(/[fox]/g)
);
