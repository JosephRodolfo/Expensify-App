const add = (a, b) => a + b;

test('should add two numbers', ()=>{
    const result = add (3, 4);

    expect(result).toBe(7);
    
})

const generateGreeting = (name) => {
  return `Hello ${name}`;
};
test('should return "Hello Mike"', () => {
  const result = generateGreeting("Mike");

  expect(result).toBe("Hello Mike");
});
