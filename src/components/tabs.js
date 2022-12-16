import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

   const classT = document.createElement('div')
   classT.classList.add('topics')
   const tab =  document.createElement('div')
   tab.classList = 'tab'
   tab.textContent = topics[0]
   classT.appendChild(tab)  
  


 // console.log(topics)
   const boo = document.createElement('div')
   boo.classList = 'tab'
   boo.textContent = topics[1]
   classT.appendChild(boo)

   const tech = document.createElement('div')
   tech.classList = 'tab'
   tech.textContent = topics[2]
   classT.appendChild(tech)

   const sam = document.createElement('div')
   sam.classList = 'tab'
   sam.textContent = topics[3]
   classT.appendChild(sam)

   const derek = document.createElement('div')
   derek.classList = 'tab'
   derek.textContent = topics[4]
   classT.appendChild(derek)

  

   
   return classT;

}
 (Tabs(['javascript', 'bootstrap', 'technology', 'bubbles', 'poo','yurrrr']))


const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const selections = document.querySelector(selector)
    axios.get(`http://localhost:5001/api/topics`)
      .then((love)=> {
     // console.log(love.data.topics)
          selections.appendChild(Tabs(love.data.topics))
     })

    
      
}

export { Tabs, tabsAppender }
