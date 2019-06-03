var budgetController = (function(){
    var x = 23;
    var add = function(a){
        return x + a;
    }

    return {
        publicTest : function (b){
            return add(b);
        }
    }
})(); 

var uiController = (function(){

    // TOY0003 (cont) - your code goes here below
    var DOMstrings = {
        inputType : ".add__type",
        inputDes : ".add__description",
        inputVal : ".add__value",
        addButton : ".add__btn"
    }
    return {
        getInput : function(){
            return {
                type : document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDes).value,
                value : document.querySelector(DOMstrings.inputVal).value
            }
        },
        // TOY0004 (cont) - your code to make the DOMstrings publicly available goes here
        getDOMStrings : function(){
            return DOMstrings
        }
    }
    
})();

var appController = (function(budgetCtrl,UIctrl){
        
        // TOY0004 - the DOMstrings object declared in uiController is a private object, make it a public object so it can be used by the appController
        var ctrlAddItem = function(){
            // 1. Get the field input data
                // TOY0003 - store the DOM strings in uiCtrl module
                var input = UIctrl.getInput();
                console.log(input);

            // 2. Add the item to the budget controller


            // 3. Add the item to the UI
            // 4. Calculate the budget
            // 5. Display the budget on the UI
        }

    // app controller has an initialisation function
        var setupEventListeners = function (){
            var DOMstrings = UIctrl.getDOMStrings();
            // Fetching add button from the DOM and attaching an event listener to it

            document.querySelector(DOMstrings.addButton).addEventListener("click",ctrlAddItem) 

            // adding event listener to the keypress event => resource(https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)
            document.addEventListener('keypress',function(e){
                if(e.keyCode === 13 || event.which === 13){
                    ctrlAddItem();
                }
            })
        }

        return {
            init : setupEventListeners
        }

})(budgetController,uiController)

// TOY0005 - explain the initialization function and its purpose and importance.
// also explain what will happen if we remove the "appController.init()" function
appController.init();