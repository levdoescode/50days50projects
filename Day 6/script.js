const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes);
window.onresize = checkBoxes;

checkBoxes();

function checkBoxes()
{
    const trigger = window.innerHeight / 5 * 4;
    const trig = window.innerHeight;
    boxes.forEach(box =>
    {
        const boxTop = box.getBoundingClientRect().top;
        const boxT = window.scrollY + box.getBoundingClientRect().top;
        const asfasdf = trig + document.querySelector('.box').offsetHeight / 5;
        if(boxTop < window.innerHeight - document.querySelector('.box').offsetHeight)
        {
            box.classList.add('show');
        }
        else
        {
            box.classList.remove('show');
        }
    })
}