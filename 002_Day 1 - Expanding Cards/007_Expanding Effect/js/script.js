const panels = doucment.querySelectorAll('.panel');

// console.log(panels);
// console.log(panels[1]);
// panels.forEach(function);

/* panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        console.log(123);
    });
});
 */

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
};