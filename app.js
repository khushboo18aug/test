var x = {
  1: 'three',
  2: 'one',
  3: 'two',
};

var y = [ 'one', 'two', 'three' ];

// console.log(x.key1);
// console.log(y[0]);

var z = [{
  key1: 'one',
  key2: 'two',
}, {
  key1: 'five',
  key2: 'six',
}];

var a = ['key1', 'key2', 'key3'];

// Sol 1
// for (var i = 0, l = a.length; i < l; i += 1) {
//   var key = a[i];

//   for (var j = 0, l = z.length; j < l; j += 1) {
//     console.log(key, z[j][key]);
//   }
// }

var users = [{
  email: 'a@b.com',
  name: 'A',
}, {
  email: 'b@c.com',
  name: 'B',
}, {
  email: 'c@d.com',
  name: 'C',
}];

var email = ['b@c.com', 'c@d.com'];

// Sol 1
for (var j = 0; j < email.length; j += 1) {
  for (var i = 0, l = users.length; i < l; i += 1) {
    if (users[i].email === email[j]) {
      console.log('Sol 1', users[i].name);
    }
  }
}

// Sol 2
/*
usersMap = {
  'a@b.com': {
    email: 'a@b.com',
    name: 'A',
  },
  'b@c.com': {
    email: 'b@c.com',
    name: 'B',
  },
};
*/
const usersMap = {};
for (let i = 0, l = users.length; i < l; i += 1) {
  usersMap[users[i].email] = users[i];
}

for (let j = 0; j < email.length; j += 1) {
  console.log('Sol 2', usersMap[email[j]].name);
}

// Map
// for (let j = 0; j < email.length; j += 1) {
//   callback(email[j], j);
// }

var callback = function (value, index) {
  console.log(value + '@gmail.com', index);
};

email.map(callback);
