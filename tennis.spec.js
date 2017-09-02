function TennisGame(){
  this.reset =()=> {
  }
  this.echo=() => {
    return 'LOVE-LOVE'
  }
}
test('Echo "LOVE-LOVE"when game start',() =>{
  //Arrange
  let app = new TennisGame()
  //Act
  app.reset()
  let result =app.echo()
  //Assert
  expect(result).toBe('LOVE-LOVE')
})
