

const navItems = document.querySelectorAll('.navitems');
navItems.forEach(navItem => {
    navItem.addEventListener('click', (event)=>{
        event.preventDefault();
        console.log("Nav Item clicked")
        navItems.forEach(item => {
            item.classList.remove('bubble');
    })
    navItem.classList.add('bubble');

    const navItemID = navItem.id;
        document.body.style.backgroundColor = getColor(navItemID);
    })
});

// To change bg

function getColor(navItemID){
    switch (navItemID) {
        case 'navItem1':
            return 'red';
            break;
        case 'navItem2':
            return 'green';
            break;
        case 'navItem3':
            return 'purple';
            break;
        case 'navItem4':
            return 'yellow';
            break;
        case 'navItem5':
            return 'orange';
            break;
        default:
            return 'white';
            break;
    }

}