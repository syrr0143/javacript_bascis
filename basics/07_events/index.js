const hello = document.querySelector("#hello");
hello.addEventListener('click', (e) => {
    console.log(e)
    console.log(e.clientX, e.type, e.defaultPrevented, e.timeStamp, e.target, e.altKey)

    hello.innerHTML = 'fuck you'
    hello.
})


// third parameter in the function is used to detect the event bubbling or the event capturing
//default or if set to false is event bubbling , otherwise event capturing

// suppose we have ul and li element inside it and both of them havemsome add event listner then in event bubbling method , then when clicked it will first print the output of the li element then for the ul element 