// question1.  Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed to it.

// let input_1 = +prompt("enter no 1");
// let input_2 = +prompt("enter no 2");

// function parent_function(value_1){
//     return function child_functon(value_2){
//         console.log(value_1 + value_2);
//     }
// }
// let function_1 = parent_function(input_1);
// let function_2 = function_1(input_2);


// question2. Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

// let arr = [4,5,8,19,28,64,83];
// let no_to_search = 29;
// let i = 0;

// function recursion(array){
//     if (no_to_search === array[i]){
//        console.log("true");
//     }
//     else if(i < array.length-1){ 
//         i = i+1; 
//         recursion(array);
//     }
//     else {
//        console.log("false");
//     }
// }
// recursion(arr);


// question3.  Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

// let input_text = prompt("enter content:")
// let para = document.createElement("p");
// let parent = document.getElementsByTagName("html")[0];
// para.innerHTML = input_text;
// console.log(para.innerHTML);


// question4.   Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as
// the text content of the new list item.

// let list_content = prompt("enter list content:");
// let first_parent = document.getElementsByTagName("body")[0];
// console.log(first_parent);
// let new_unorderd_list = document.createElement("ul");
// first_parent.appendChild(new_unorderd_list);
// first_parent.insertAdjacentElement("afterbegin",new_unorderd_list);
// let creting_list = document.createElement("li");

// function adding_content_in_list(string){
//     new_unorderd_list.appendChild(creting_list);
//     creting_list.innerHTML = string
// }
// adding_content_in_list(list_content);

// question5.  Write a function that changes the background color of an HTML element.The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing the new background color.

// let heading_1 = document.querySelector("#heading1");
// let heading_2 = document.querySelector("#heading2");

// function changes(id ,color){
//     id.style.backgroundColor = color;
// }
// changes(heading_2,'blue');


// question6.  Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

// localStorage.clear()

// let object_1 = {
//     name:"amna",
//     age: 18,
//     phone_no:"23215689059",
//     height:"5'2",
//     cnic: "18639657390249",
//     eng_marks:85,
//     urdu_marks:79,
//     maths_marks:92
// }


// let object_2 = {
//     name:"aqsa",
//     age: 25,
//     phone_no:"43298799047",
//     height:"5'3",
//     cnic: "55788768798340",
//     eng_marks:70,
//     urdu_marks:80,
//     maths_marks:79
// }


// let object_3 = {
//     name:"hina",
//     age: 22,
//     phone_no:"34679753803",
//     height:"5'4",
//     cnic: "24689941690943",
//     eng_marks:87,
//     urdu_marks:69,
//     maths_marks:78
// }

// function object_saving(key , value){
//     let new_object = JSON.stringify(value);
//     localStorage.setItem(key, new_object);
// }


// object_saving("data of amna" , object_1);
// object_saving("data of aqsa", object_2 );
// object_saving("data of hina", object_3 );
// object_saving("data of amna" , object_1);
// object_saving("data of aqsa", object_2 );
// object_saving("data of hina", object_3 );


// question7.  Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


// question8.  Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage and return it as a new object.










