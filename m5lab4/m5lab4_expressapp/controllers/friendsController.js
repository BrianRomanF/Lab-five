const friends = require('../models/friends');

function filterFriendsByGenderAndLetter(filterGender, filterLetter) {
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender === filterGender);
    }

    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.charAt(0).toUpperCase() === filterLetter.toUpperCase());
    }

    return matchingFriends;
}

function getInfoFromHeaders(headers) {
    const { 'user-agent': userAgent, 'content-type': contentType, accept } = headers;
    return { userAgent, contentType, accept };
}

function getFriendById(friendId) {
    return friends.find(friend => friend.id === parseInt(friendId));
}

function updateFriendById(friendId, updatedFriend) {
    const index = friends.findIndex(friend => friend.id === parseInt(friendId));

    if (index !== -1) {
        friends[index] = { ...friends[index], ...updatedFriend };
        return friends[index];
    }

    return null;
}

module.exports = {
    filterFriendsByGenderAndLetter,
    getInfoFromHeaders,
    getFriendById,
    updateFriendById
};
