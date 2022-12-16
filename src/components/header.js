const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  
  const header = document.createElement('div')
  const titleH1 = document.createElement('h1')
  titleH1.textContent = `My name is ${title}`
  header.appendChild(titleH1)

  const span = document.createElement('span')
  span.textContent = `Today's ${date}`
  header.appendChild(span)

  const spanT = document.createElement('span')
  spanT.textContent = `The temperature outside is ${temp}`
  header.appendChild(spanT)

  header.classList.add('header')
  span.classList.add('date')
  spanT.classList.add('temp')
  return header;


}
Header('Emma World', '06/07/2000', '22F');



const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
  const selected = document.querySelector(selector)
  selected.appendChild(Header('Emma World', '06/07/2000', '22F'));
  
}

export { Header, headerAppender }
