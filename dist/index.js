#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _mongodb = require('./mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _aws = require('./lib/aws');

var _aws2 = _interopRequireDefault(_aws);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_commander2.default.version(_config2.default.version).option('-a, --action', 'action').parse(process.argv);

const run = (() => {
  var _ref = _asyncToGenerator(function* () {
    console.log(_commander2.default.action);
    try {
      switch (_commander2.default.action) {
        case 'logEvents':
          yield _aws2.default.listLogEvents();
          break;
        case 'logs':
          console.log('fetching logs ...');
          break;
        default:
          console.log('no valid option ...');
          break;
      }
    } catch (err) {
      console.dir(err, { depth: null, colors: true });
    }
    process.exit();
  });

  return function run() {
    return _ref.apply(this, arguments);
  };
})();

run();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInZlcnNpb24iLCJvcHRpb24iLCJwYXJzZSIsInByb2Nlc3MiLCJhcmd2IiwicnVuIiwiY29uc29sZSIsImxvZyIsImFjdGlvbiIsImxpc3RMb2dFdmVudHMiLCJlcnIiLCJkaXIiLCJkZXB0aCIsImNvbG9ycyIsImV4aXQiXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsb0JBQ0dBLE9BREgsQ0FDVyxpQkFBT0EsT0FEbEIsRUFFR0MsTUFGSCxDQUVVLGNBRlYsRUFFMEIsUUFGMUIsRUFHR0MsS0FISCxDQUdTQyxRQUFRQyxJQUhqQjs7QUFNQSxNQUFNQztBQUFBLCtCQUFNLGFBQVk7QUFDdEJDLFlBQVFDLEdBQVIsQ0FBWSxvQkFBUUMsTUFBcEI7QUFDQSxRQUFJO0FBQ0YsY0FBTyxvQkFBUUEsTUFBZjtBQUNFLGFBQUssV0FBTDtBQUNHLGdCQUFNLGNBQUlDLGFBQUosRUFBTjtBQUNBO0FBQ0gsYUFBSyxNQUFMO0FBQ0VILGtCQUFRQyxHQUFSLENBQVksbUJBQVo7QUFDQTtBQUNGO0FBQ0VELGtCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQTtBQVRKO0FBV0QsS0FaRCxDQVlFLE9BQU9HLEdBQVAsRUFBWTtBQUNaSixjQUFRSyxHQUFSLENBQVlELEdBQVosRUFBaUIsRUFBRUUsT0FBTyxJQUFULEVBQWVDLFFBQVEsSUFBdkIsRUFBakI7QUFDRDtBQUNEVixZQUFRVyxJQUFSO0FBQ0QsR0FsQks7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBTjs7QUFvQkFUIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBwcm9ncmFtIGZyb20gJ2NvbW1hbmRlcic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBEYiBmcm9tICcuL21vbmdvZGInO1xuaW1wb3J0IGF3cyBmcm9tICcuL2xpYi9hd3MnXG5cbnByb2dyYW1cbiAgLnZlcnNpb24oY29uZmlnLnZlcnNpb24pXG4gIC5vcHRpb24oJy1hLCAtLWFjdGlvbicsICdhY3Rpb24nKVxuICAucGFyc2UocHJvY2Vzcy5hcmd2KTtcblxuXG5jb25zdCBydW4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb2dyYW0uYWN0aW9uKTtcbiAgdHJ5IHtcbiAgICBzd2l0Y2gocHJvZ3JhbS5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2xvZ0V2ZW50cyc6XG4gICAgICAgICBhd2FpdCBhd3MubGlzdExvZ0V2ZW50cygpO1xuICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsb2dzJzpcbiAgICAgICAgY29uc29sZS5sb2coJ2ZldGNoaW5nIGxvZ3MgLi4uJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coJ25vIHZhbGlkIG9wdGlvbiAuLi4nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmRpcihlcnIsIHsgZGVwdGg6IG51bGwsIGNvbG9yczogdHJ1ZSB9KTtcbiAgfVxuICBwcm9jZXNzLmV4aXQoKTtcbn07XG5cbnJ1bigpO1xuIl19
