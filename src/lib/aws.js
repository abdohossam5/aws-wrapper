import AWS from 'aws-sdk';
import config from '../config';
import util from './util'

AWS.config.apiVersions = {
  cloudwatch: '2010-08-01',
  cloudwatchlogs: '2014-03-28'
};

AWS.config.update({
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  region: config.AWS_REGION
});

const SNS = new AWS.SNS();
const CloudWatchLogs = new AWS.CloudWatchLogs();

const listLogEvents = async (query = {}) => {
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
    if (!logGroupName) throw util.createError('logGroupName is required.');
    const params = {};
  } catch (err) {
    throw err;
  }
}

export default {
  SNS,
  CloudWatchLogs
}