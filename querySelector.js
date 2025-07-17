// document.querySelector()
// used to find elements in html body

// look for tag
document.querySelector('<tag>')

// look for id
document.querySelector('#<id>')

// look for class
document.querySelector('.<class>')

// Prevent null being returned (script running before html loaded)
// nest inside event listener
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button').onclick = count;
})
                          
