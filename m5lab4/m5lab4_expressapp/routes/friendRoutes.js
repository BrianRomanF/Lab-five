const express = require("express");
const router = express.Router();
const friendsController = require('../controllers/friendsController');

router.get('/filter', (req, res) => {
    const { gender, letter } = req.query;
    const matchingFriends = friendsController.filterFriendsByGenderAndLetter(gender, letter);

    if (matchingFriends.length > 0) {
        res.status(200).json(matchingFriends);
    } else {
        res.status(404).json({ error: "No friends matching the specified criteria" });
    }
});

router.get('/info', (req, res) => {
    const headersInfo = friendsController.getInfoFromHeaders(req.headers);
    res.json(headersInfo);
});

router.get('/:id', (req, res) => {
    const friendId = req.params.id;
    const foundFriend = friendsController.getFriendById(friendId);

    if (foundFriend) {
        res.json(foundFriend);
    } else {
        res.status(404).json({ error: 'Friend not found' });
    }
});

router.put('/:id', (req, res) => {
    const friendId = req.params.id;
    const updatedFriend = req.body;

    const updatedFriendData = friendsController.updateFriendById(friendId, updatedFriend);

    if (updatedFriendData) {
        res.json({ result: 'Updated friend with ID ' + friendId, data: updatedFriendData });
    } else {
        res.status(404).json({ error: 'Friend not found' });
    }
});

module.exports = router;









/* const express = require("express");
const router = express.Router();
const friends = require('../models/friends')

// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter
//http://localhost:3000/friends/filter?letter=j
router.get('/filter', (req, res) => {
    console.log(req.query);
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter;
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender === filterGender);
    }

    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.charAt(0).toUpperCase() === filterLetter.toUpperCase());
    }

    if (matchingFriends.length > 0) {
        res.status(200).json(matchingFriends);
    } else {
        res.status(404).json({ error: "No friends matching the specified criteria" });
    }
});

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type, and accept header data
router.get('/info', (req, res) => {
    const { headers } = req;
    const { 'user-agent': userAgent, 'content-type': contentType, accept } = headers;
    res.json({ userAgent, contentType, accept });
});

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter
// http://localhost:3000/friends/1
router.get('/:id', (req, res) => {
    console.log(req.params);
    let friendId = req.params.id;
    let foundFriend = friends.find(friend => friend.id === parseInt(friendId));

    if (foundFriend) {
        res.json(foundFriend);
    } else {
        res.status(404).json({ error: 'Friend not found' });
    }
});

// TODO - #4: Complete the PUT route which will update data for an existing friend
/*
PUT request at : http://localhost:3000/friends/1

JSON body: 

{
  "realName": "Lisa"
}

router.put('/:id', (req, res) => {
    let friendId = req.params.id;
    let updatedFriend = req.body;

    let index = friends.findIndex(friend => friend.id === parseInt(friendId));

    if (index !== -1) {
        friends[index] = { ...friends[index], ...updatedFriend };
        res.json({ result: 'Updated friend with ID ' + friendId, data: friends[index] });
    } else {
        res.status(404).json({ error: 'Friend not found' });
    }
});



module.exports = router; */
