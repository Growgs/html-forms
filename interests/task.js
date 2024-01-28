document.addEventListener('DOMContentLoaded', function () {
    let checkboxes = document.querySelectorAll('.interest__check');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('click', function () {
            let parentLi = checkbox.closest('.interest');
            let childCheckboxes = parentLi.querySelectorAll('.interest__check');

            childCheckboxes.forEach(function (childCheckbox) {
                childCheckbox.checked = checkbox.checked;
            });
        });
    });
});
