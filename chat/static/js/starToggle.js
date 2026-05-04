import { globalData } from './globals.js';

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (event) {
        const starIcon = event.target.closest(".toggle-star");
        if (!starIcon) return;

        const messageId = starIcon.getAttribute("data-msg-id");
        if (!messageId) return;

        fetch(globalData.toggleStarUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": globalData.csrfToken,
            },
            body: JSON.stringify({ message_id: messageId }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.is_starred) {
                starIcon.classList.remove("unstarred-icon");
                starIcon.classList.add("starred-icon");
            } else {
                starIcon.classList.remove("starred-icon");
                starIcon.classList.add("unstarred-icon");
            }
        })
        .catch(error => console.error("Star toggle error:", error));
    });
});
