document.addEventListener('DOMContentLoaded', () => {
  const title = document.createElement('h1');
  title.innerText = 'A Friendly Reminder~';
  title.setAttribute('style', 'text-align: center');
  document.querySelector('body').appendChild(title);

  const navi = document.createElement('div');
  navi.setAttribute('id', 'message')
  navi.setAttribute('class', 'pics')
  // navi.innerText = 'HEY LISTEN!';
  navi.setAttribute('style', 'border: 3px solid black; margin: auto; height: 200px; width: 400px; text-align: center; padding: 80px; background-image: url("navi.png")');
  document.querySelector('body').appendChild(navi);
  
  // const image = document.createElement('img');
  // image.setAttribute('src', 'zelda.png');
  // document.querySelector('navi').appendChild(image);

  //button
  const button = document.createElement('button');
  button.innerHTML = 'No.';
  document.body.appendChild(button);
  button.onclick = function() {
    alert('HEY LISTEN!');
  }
  button.setAttribute('style', 'padding: 10px 15px; display: inline-block; margin: auto; border: none; background-color: white)');
    
  navi.addEventListener('mouseover', mOver);
  navi.addEventListener('mouseout', mOut);
  // const hover = document.createElement('div');
  
  function mOver (){
      document.getElementById('message').innerHTML = "Hey Hydrate";
  }
  function mOut (){
    document.getElementById('message').innerHTML = "Hey Listen";
  }
});
