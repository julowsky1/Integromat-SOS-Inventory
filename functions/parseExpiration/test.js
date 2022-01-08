it('First test', () => {
   var input = { expiration: '2021-12-21T090034' };
   assert.ok(parseExpiration(input) === Date("2021-12-21T090034"))
})
