const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', () => {
   console.log('Служит для вывода информации в консоль');
})

const addalert = document.querySelector('#addalert');

addalert.addEventListener('click', () => {
  alert('Пример использования команды alert');
  console.log('Пример использования команды alert в консоли')
})

const addprompt = document.querySelector('#addprompt');

addprompt.addEventListener('click', () => {
  prompt('Пример использования команды prompt');
  console.log('Пример использования команды prompt в консоли')
})


 