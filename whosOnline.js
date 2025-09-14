I am stuck here. Any hints?

// https://www.codewars.com/kata/5b6375f707a2664ada00002a
//
// You have a group chat application, but who is online!?
//
// You want to show your users which of their friends are online and available to chat!
//
// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
//
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
//
// The input data has the following structure:
//
// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:
//
// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:
//
// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.
//
// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).
//
// const whosOnline = (friends) => {
// // Your code here...
// }

const whosOnline = (friends) => {
  let friendStatus = {};
  const update = (status) => {
    if (friend.status === status) {
      if (Object.hasOwn(friendStatus, status)) friendStatus.status.push(friend.username)
      else friendStatus.status = [friend.username]
    }
  }
  for (let friend of friends) {
    if (friend.status === "offline") {
      if (Object.hasOwn(friendStatus, "offline")) friendStatus.offline.push(friend.username)
      else friendStatus.offline = [friend.username]
    }
    if (friend.status === "online" && friend.lastActivity > 10){
      if (Object.hasOwn(friendStatus, "away")) friendStatus.away.push(friend.username)
      else friendStatus.away = [friend.username]
    }
    if (friend.status === "online" && friend.lastActivity <= 10){
      if (Object.hasOwn(friendStatus, "online")) friendStatus.online.push(friend.username)
      else friendStatus.online = [friend.username]
    }
  }
  return friendStatus;
};

// Helper function:
const whosOnline = (friends) => {
  let friendStatus = {};
  for (let friend of friends) {
      const update = (status) => {
      if (Object.hasOwn(friendStatus, status)) friendStatus[status].push(friend.username)
      else friendStatus[status] = [friend.username]
  }
    if (friend.status === "offline") update("offline")
    if (friend.status === "online" && friend.lastActivity > 10) update("away")
    if (friend.status === "online" && friend.lastActivity <= 10) update("online")
  }
  return friendStatus;
};

// Optional chaining and default assignment:
const whosOnline = (friends) => {
  let friendStatus = {};
  for (let friend of friends) {
      const update = (status) => {
      friendStatus[status] ??= []
      friendStatus[status].push(friend.username)
  }
    if (friend.status === "offline") update("offline")
    if (friend.status === "online" && friend.lastActivity > 10) update("away")
    if (friend.status === "online" && friend.lastActivity <= 10) update("online")
  }
  return friendStatus;
};