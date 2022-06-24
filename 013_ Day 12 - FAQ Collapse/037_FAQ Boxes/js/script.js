const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    // console.log(e)
    insert.innerHTML = `
    <div class="key">
      ${event.key === ' '? 'Space' : event.key}
      <small>event.key</small>
    </div>

    <div class="key">
      ${event.keyCode}
      <small>Event.keyCode</small>
    </div>

    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>
    `
})