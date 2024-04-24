function newElement() {
    var inputValue = document.getElementById("task").value.trim();
    if (inputValue === '') {
        showToast('error', 'Listeye boş ekleme yapamazsınız!');
    } else {
        var li = document.createElement("li");
        li.textContent = inputValue;
        li.onclick = function () {
            this.classList.toggle("checked");
        };

        var closeButton = document.createElement("span");
        closeButton.className = "close-button";
        closeButton.innerHTML = "&times;";
        closeButton.onclick = function (event) {
            event.stopPropagation();
            deleteElement(this.parentNode);
        };

        li.appendChild(closeButton);

        document.getElementById("list").appendChild(li);
        showToast('success', 'Listeye eklendi.');
    }
}

function deleteElement(element) {
    element.parentNode.removeChild(element);
}

function showToast(type, message) {
    var toast = document.querySelector('#liveToast');
    toast.className = 'toast ' + type + ' show';
    toast.querySelector('.toast-body').textContent = message;
    setTimeout(function () {
        toast.className = 'toast ' + type + ' hide';
    }, 4000);
}