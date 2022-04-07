const Messages = [
  'Deleted code is debugged code. (Jeff Sickel)',
  'This is the way!',
  'It’s not a bug – it’s an undocumented feature. (Anonymous)'
]


const randomMsg = () => {
  const message = Messages[Math.floor(Math.random() * Messages.length)]; 
    console.log(message);
}

module.exports = { randomMsg };