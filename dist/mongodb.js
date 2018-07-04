'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const { MongoClient } = _mongodb2.default;

const Config = {
  url: 'mongodb://localhost:27017',
  dbName: 'aws'
};

let MONGO = {
  connection: null,
  connect: (() => {
    var _ref = _asyncToGenerator(function* () {
      const res = yield MongoClient.connect(`${Config.url}/${Config.dbName}`);
      this.connection = res.db(Config.dbName);
    });

    return function connect() {
      return _ref.apply(this, arguments);
    };
  })()
};

MONGO.connect();

// MongoClient.connect(`${Config.url}/${Config.dbName}`, (err, db) => {
//   if (err) console.log(err);

//   db = db;
// });

exports.default = MONGO;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbmdvZGIuanMiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJDb25maWciLCJ1cmwiLCJkYk5hbWUiLCJNT05HTyIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwicmVzIiwiZGIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7OztBQUVBLE1BQU0sRUFBRUEsV0FBRixzQkFBTjs7QUFFQSxNQUFNQyxTQUFTO0FBQ2JDLE9BQUssMkJBRFE7QUFFYkMsVUFBUTtBQUZLLENBQWY7O0FBT0EsSUFBSUMsUUFBUTtBQUNWQyxjQUFZLElBREY7QUFFVkM7QUFBQSxpQ0FBUyxhQUFpQjtBQUN4QixZQUFNQyxNQUFNLE1BQU1QLFlBQVlNLE9BQVosQ0FBcUIsR0FBRUwsT0FBT0MsR0FBSSxJQUFHRCxPQUFPRSxNQUFPLEVBQW5ELENBQWxCO0FBQ0EsV0FBS0UsVUFBTCxHQUFrQkUsSUFBSUMsRUFBSixDQUFPUCxPQUFPRSxNQUFkLENBQWxCO0FBQ0QsS0FIRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZVLENBQVo7O0FBUUFDLE1BQU1FLE9BQU47O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztrQkFFZUYsSyIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvZGIgZnJvbSAnbW9uZ29kYic7XG5cbmNvbnN0IHsgTW9uZ29DbGllbnQgfSA9IG1vbmdvZGI7XG5cbmNvbnN0IENvbmZpZyA9IHtcbiAgdXJsOiAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNycsXG4gIGRiTmFtZTogJ2F3cydcbn07XG5cblxuXG5sZXQgTU9OR08gPSB7XG4gIGNvbm5lY3Rpb246IG51bGwsXG4gIGNvbm5lY3Q6IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoYCR7Q29uZmlnLnVybH0vJHtDb25maWcuZGJOYW1lfWApO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IHJlcy5kYihDb25maWcuZGJOYW1lKTtcbiAgfSxcbn07XG5cbk1PTkdPLmNvbm5lY3QoKTtcblxuLy8gTW9uZ29DbGllbnQuY29ubmVjdChgJHtDb25maWcudXJsfS8ke0NvbmZpZy5kYk5hbWV9YCwgKGVyciwgZGIpID0+IHtcbi8vICAgaWYgKGVycikgY29uc29sZS5sb2coZXJyKTtcblxuLy8gICBkYiA9IGRiO1xuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1PTkdPOyJdfQ==
