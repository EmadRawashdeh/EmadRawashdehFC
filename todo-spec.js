describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost/node-todo/public/index.html');
	
	//Make sure that the most important elements are present on the page
	element(by.model('formData.text')).isDisplayed();
	Test that removing one or more items work.isDisplayed();
	
	//Test that adding one or more to-do-list-items work
	element(by.model('formData.text')).sendKeys('Item#1');
	element(by.buttonText('Add')).click();
	var todoList = element.all(by.repeater('todo in todos'));
    expect(todoList.count()).toEqual(1);
	
	element(by.model('formData.text')).sendKeys('Item#2');
	element(by.buttonText('Add')).click();
	var todoList = element.all(by.repeater('todo in todos'));
    expect(todoList.count()).toEqual(2);
	
	element(by.model('formData.text')).sendKeys('Item#3');
	element(by.buttonText('Add')).click();
	var todoList = element.all(by.repeater('todo in todos'));
    expect(todoList.count()).toEqual(3);
	
	//Test that removing one or more items work
	var todoList = element.all(by.repeater('todo in todoList.todos'));
	todoList.get(0).element(by.css('input')).click();
	todoList.get(1).element(by.css('input')).click();
	todoList.get(1).element(by.css('input')).click();
	
  });
});