import { globalData } from './globals.js';

document.addEventListener("click", function (event) {
    const starIcon = event.target.closest(".toggle-star");
    if (!starIcon) return;

    const messageId = starIcon.getAttribute("data-msg-id");
    const isGroup   = starIcon.getAttribute("data-is-group") === "true";
    if (!messageId) return;

    const url = isGroup ? globalData.toggleStarGroupUrl : globalData.toggleStarUrl;
    if (!url) {
        console.error("Star URL not found. globalData:", globalData);
        return;
    }

    const formData = new FormData();
    formData.append("message_id", messageId);
    formData.append("csrfmiddlewaretoken", globalData.csrfToken);

    fetch(url, {
        method: "POST",
        headers: { "X-CSRFToken": globalData.csrfToken },
        body: formData,
    })
    .then(r => r.json())
    .then(data => {
        const isStarred = (data.is_starred === true) || (data.status === "starred");
        if (isStarred) {
            starIcon.classList.remove("unstarred-icon");
            starIcon.classList.add("starred-icon");
        } else {
            starIcon.classList.remove("starred-icon");
            starIcon.classList.add("unstarred-icon");
        }
    })
    .catch(err => console.error("Star toggle error:", err));
});
