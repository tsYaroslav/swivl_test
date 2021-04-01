/* dropdown */
const userActionBtn  = document.querySelector(".user-actions__trigger"),
      userActionDropdown  = document.querySelector(".user-dropdown");

document.addEventListener('click', (e) => {
    const target = e.target;

    if(target && target.classList.contains("user-actions__trigger")){
        userActionDropdown.classList.add("opened");
    } else {
        userActionDropdown.classList.remove("opened");
    }
});

/* mobile menu */
const burger = document.querySelector(".burger"),
      header = document.querySelector(".header"),
      headerNav = document.querySelector(".header__nav");
  

burger.addEventListener("click", function () {
    header.classList.toggle("header--nav-opened");
});


/* privat/public filter */
const filterCheckbox = document.querySelector(".switch__checkbox"),
      publicCardsdArr = document.querySelectorAll(".synth-card--public"),
      privatCardsdArr = document.querySelectorAll(".synth-card--privat");

privatCardsdArr.forEach(e => {
    e.classList.add("_hidden");
});

filterCheckbox.addEventListener("click", function () {
    if(filterCheckbox.checked) {
        publicCardsdArr.forEach(e => {
            e.classList.add("_hidden")
        });
        privatCardsdArr.forEach(e => {
            e.classList.remove("_hidden");
        });
    } else {
        publicCardsdArr.forEach(e => {
            e.classList.remove("_hidden")
        });
        privatCardsdArr.forEach(e => {
            e.classList.add("_hidden");
        });
    }
});