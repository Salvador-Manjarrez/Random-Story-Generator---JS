const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy', 'Goblin', 'Big Daddy', 'Father Christmas', 'Rico McPato', 'Yoda', 'Chewbacca', 'Terminator'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House', 'the airport', 'the drugstore', 'the unknown planet', 'the last tunnel' ];
const insertZ = ['spontaneously combusted',  'melted into a puddle on the sidewalk', 'turned into a slug and crawled away', 'died instantly and faced destiny', 'started driking tamarindo spiced vodka','rolled a packed blunt and got high'];


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

      newStory = newStory.replace(':insertx:', xItem );
      newStory = newStory.replace(':inserty:', yItem );
      newStory = newStory.replace(':insertz:', zItem );
      newStory = newStory.replace(':insertx:', xItem );

          if(customName.value !== '') {
          const name = customName.value;
         newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("mx").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}