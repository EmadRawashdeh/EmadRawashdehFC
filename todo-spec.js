describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost/node-todo/public/index.html');
	
	//Make sure that the most important elements are present on the page
	element(by.model('formData.text')).isDisplayed();
	element(by.buttonText('Add')).isDisplayed();
	
	
  });
});