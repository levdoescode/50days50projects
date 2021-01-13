//LEVDOESCODE
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes);
window.onresize = checkBoxes;

checkBoxes();

function checkBoxes()
{
    const trigger = window.innerHeight - document.querySelector('.box').offsetHeight;
    boxes.forEach
    (   
        box =>
        {
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < trigger)
            {
                box.classList.add('show');
            }
            else
            {
                box.classList.remove('show');
            }
        }
    )
}