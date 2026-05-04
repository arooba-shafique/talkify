let globalData = {
    currentUserId: null,
    csrfToken: null,
    isGroup: false,
    groupId: null,
    receiverId: null,
    checkNewMessagesUrl: null,
    toggleStarUrl: null,
    toggleStarGroupUrl: null
};

const globalDataScript = document.getElementById('global-data');
if (globalDataScript) {
    try {
        const data = JSON.parse(globalDataScript.textContent);
        globalData.currentUserId         = data.currentUserId;
        globalData.csrfToken             = data.csrfToken;
        globalData.isGroup               = data.isGroup;
        globalData.groupId               = data.groupId            || null;
        globalData.receiverId            = data.receiverId         || null;
        globalData.checkNewMessagesUrl   = data.checkNewMessagesUrl;
        globalData.toggleStarUrl         = data.toggleStarUrl;
        globalData.toggleStarGroupUrl    = data.toggleStarGroupUrl;
    } catch (e) {
        console.error("globals.js: Failed to parse global-data:", e);
    }
}

export { globalData };
