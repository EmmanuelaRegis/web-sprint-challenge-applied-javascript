import axios from "axios"
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
   const cardS = document.createElement('div')
   const headlineE = document.createElement('div')
   const authorE = document.createElement('div')
   const imageS = document.createElement('div')
   const photo = document.createElement('img')
   const name = document.createElement('span')

   cardS.classList = 'card'
   headlineE.classList = 'headline'
   authorE.classList = 'author'
   imageS.classList = 'img-container'

   headlineE.textContent =  article.headline
   photo.src = article.authorPhoto
   name.textContent = `By ${article.authorName}`

   cardS.appendChild(headlineE)
   cardS.appendChild(authorE)
   authorE.appendChild(imageS)
   imageS.appendChild(photo)
   authorE.appendChild(name)

   cardS.addEventListener('click', foo)

   function foo() {
    console.log (article.headline);
   
   }
   
   return cardS;
}
  (Card({'headline': 'Rihanna' , 'authorPhoto': 'photo', 'authorName' : 'Popo'}))


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
   const life = document.querySelector(selector)
     axios.get(`http://localhost:5001/api/articles`)
     .then((teen)=> {
     console.log(teen.data)
    for(let i = 0; i < teen.data.articles.bootstrap.length; i++){
      life.appendChild(Card(teen.data.articles.bootstrap[i]))
    }
    for (let i = 0;i < teen.data.articles.javascript.length; i++) {
      life.appendChild(Card(teen.data.articles.javascript[i]))
    }
    for (let i = 0;i < teen.data.articles.technology.length; i++) {
      life.appendChild(Card(teen.data.articles.technology[i]))
    }
    for (let i = 0;i < teen.data.articles.jquery.length; i++) {
      life.appendChild(Card(teen.data.articles.jquery[i]))
    }
    for (let i = 0;i < teen.data.articles.node.length; i++) {
      life.appendChild(Card(teen.data.articles.node[i]))
    }
    
   // life.appendChild(Card(teen.data.articles.bootstrap[0]))
   // life.appendChild(Card(teen.data.articles.bootstrap[1]))
 })

}


export { Card, cardAppender }
