'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_awsSdk2.default.config.apiVersions = {
  cloudwatch: '2010-08-01',
  cloudwatchlogs: '2014-03-28'
};

_awsSdk2.default.config.update({
  accessKeyId: _config2.default.AWS_ACCESS_KEY_ID,
  secretAccessKey: _config2.default.AWS_SECRET_ACCESS_KEY,
  region: _config2.default.AWS_REGION
});

const SNS = new _awsSdk2.default.SNS();
const CloudWatchLogs = new _awsSdk2.default.CloudWatchLogs();

const listLogEvents = (() => {
  var _ref = _asyncToGenerator(function* (query = {}) {
    try {
      const {
        logGroupName,
        startTime,
        endTime,
        filterPattern,
        logStreamNames,
        nextToken,
        limit,
        interleaved
      } = query;
      if (!logGroupName) throw _util2.default.createError('logGroupName is required.');
      const params = {};
    } catch (err) {
      throw err;
    }
  });

  return function listLogEvents() {
    return _ref.apply(this, arguments);
  };
})();

exports.default = {
  SNS,
  CloudWatchLogs
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9hd3MuanMiXSwibmFtZXMiOlsiY29uZmlnIiwiYXBpVmVyc2lvbnMiLCJjbG91ZHdhdGNoIiwiY2xvdWR3YXRjaGxvZ3MiLCJ1cGRhdGUiLCJhY2Nlc3NLZXlJZCIsIkFXU19BQ0NFU1NfS0VZX0lEIiwic2VjcmV0QWNjZXNzS2V5IiwiQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZIiwicmVnaW9uIiwiQVdTX1JFR0lPTiIsIlNOUyIsIkNsb3VkV2F0Y2hMb2dzIiwibGlzdExvZ0V2ZW50cyIsInF1ZXJ5IiwibG9nR3JvdXBOYW1lIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsImZpbHRlclBhdHRlcm4iLCJsb2dTdHJlYW1OYW1lcyIsIm5leHRUb2tlbiIsImxpbWl0IiwiaW50ZXJsZWF2ZWQiLCJjcmVhdGVFcnJvciIsInBhcmFtcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLGlCQUFJQSxNQUFKLENBQVdDLFdBQVgsR0FBeUI7QUFDdkJDLGNBQVksWUFEVztBQUV2QkMsa0JBQWdCO0FBRk8sQ0FBekI7O0FBS0EsaUJBQUlILE1BQUosQ0FBV0ksTUFBWCxDQUFrQjtBQUNoQkMsZUFBYSxpQkFBT0MsaUJBREo7QUFFaEJDLG1CQUFpQixpQkFBT0MscUJBRlI7QUFHaEJDLFVBQVEsaUJBQU9DO0FBSEMsQ0FBbEI7O0FBTUEsTUFBTUMsTUFBTSxJQUFJLGlCQUFJQSxHQUFSLEVBQVo7QUFDQSxNQUFNQyxpQkFBaUIsSUFBSSxpQkFBSUEsY0FBUixFQUF2Qjs7QUFFQSxNQUFNQztBQUFBLCtCQUFnQixXQUFPQyxRQUFRLEVBQWYsRUFBc0I7QUFDMUMsUUFBSTtBQUNGLFlBQU07QUFDSkMsb0JBREk7QUFFSkMsaUJBRkk7QUFHSkMsZUFISTtBQUlKQyxxQkFKSTtBQUtKQyxzQkFMSTtBQU1KQyxpQkFOSTtBQU9KQyxhQVBJO0FBUUpDO0FBUkksVUFTRlIsS0FUSjtBQVVBLFVBQUksQ0FBQ0MsWUFBTCxFQUFtQixNQUFNLGVBQUtRLFdBQUwsQ0FBaUIsMkJBQWpCLENBQU47QUFDbkIsWUFBTUMsU0FBUyxFQUFmO0FBQ0QsS0FiRCxDQWFFLE9BQU9DLEdBQVAsRUFBWTtBQUNaLFlBQU1BLEdBQU47QUFDRDtBQUNGLEdBakJLOztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU47O2tCQW1CZTtBQUNiZCxLQURhO0FBRWJDO0FBRmEsQyIsImZpbGUiOiJsaWIvYXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFXUyBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcblxuQVdTLmNvbmZpZy5hcGlWZXJzaW9ucyA9IHtcbiAgY2xvdWR3YXRjaDogJzIwMTAtMDgtMDEnLFxuICBjbG91ZHdhdGNobG9nczogJzIwMTQtMDMtMjgnXG59O1xuXG5BV1MuY29uZmlnLnVwZGF0ZSh7XG4gIGFjY2Vzc0tleUlkOiBjb25maWcuQVdTX0FDQ0VTU19LRVlfSUQsXG4gIHNlY3JldEFjY2Vzc0tleTogY29uZmlnLkFXU19TRUNSRVRfQUNDRVNTX0tFWSxcbiAgcmVnaW9uOiBjb25maWcuQVdTX1JFR0lPTlxufSk7XG5cbmNvbnN0IFNOUyA9IG5ldyBBV1MuU05TKCk7XG5jb25zdCBDbG91ZFdhdGNoTG9ncyA9IG5ldyBBV1MuQ2xvdWRXYXRjaExvZ3MoKTtcblxuY29uc3QgbGlzdExvZ0V2ZW50cyA9IGFzeW5jIChxdWVyeSA9IHt9KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qge1xuICAgICAgbG9nR3JvdXBOYW1lLFxuICAgICAgc3RhcnRUaW1lLFxuICAgICAgZW5kVGltZSxcbiAgICAgIGZpbHRlclBhdHRlcm4sXG4gICAgICBsb2dTdHJlYW1OYW1lcyxcbiAgICAgIG5leHRUb2tlbixcbiAgICAgIGxpbWl0LFxuICAgICAgaW50ZXJsZWF2ZWRcbiAgICB9ID0gcXVlcnk7XG4gICAgaWYgKCFsb2dHcm91cE5hbWUpIHRocm93IHV0aWwuY3JlYXRlRXJyb3IoJ2xvZ0dyb3VwTmFtZSBpcyByZXF1aXJlZC4nKTtcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgZXJyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgU05TLFxuICBDbG91ZFdhdGNoTG9nc1xufSJdfQ==
