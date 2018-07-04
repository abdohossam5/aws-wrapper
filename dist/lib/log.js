'use strict';

var colors = require('colors');
require('console.json');

module.exports = function (env, type, mesg) {
    if (env == 'd') {
        env = 'DB';
    } else if (env == 'w') {
        env = 'WEB';
    } else if (env == 'io') {
        env = 'SOCKET';
    } else if (env == 'sch') {
        env = 'SCHEDULER';
    } else {
        env = 'SERVER';
    }

    if (type == 's') {
        type = colors.green('success:');
    } else if (type == 'i') {
        type = colors.cyan('info:');
    } else if (type == 'w') {
        type = colors.yellow('warning:');
    } else if (type == 'e') {
        type = colors.red('error:');
    } else if (type == 'd') {
        type = colors.grey('debug:');
    }

    if (typeof mesg == 'object') {
        //mesg = colors.italic(colors.grey(JSON.stringify(mesg)));
        console.log('  ' + '[' + colors.bold(colors.white(env)) + '] ' + colors.bold(type));
        console.json('Object', mesg);
        return;
    }

    console.log('  ' + '[' + colors.bold(colors.white(env)) + '] ' + colors.bold(type) + ' ' + mesg);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9sb2cuanMiXSwibmFtZXMiOlsiY29sb3JzIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbnYiLCJ0eXBlIiwibWVzZyIsImdyZWVuIiwiY3lhbiIsInllbGxvdyIsInJlZCIsImdyZXkiLCJjb25zb2xlIiwibG9nIiwiYm9sZCIsIndoaXRlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUNBQSxRQUFRLGNBQVI7O0FBR0FDLE9BQU9DLE9BQVAsR0FBaUIsVUFBVUMsR0FBVixFQUFlQyxJQUFmLEVBQXFCQyxJQUFyQixFQUEyQjtBQUN4QyxRQUFJRixPQUFPLEdBQVgsRUFBZ0I7QUFDWkEsY0FBTSxJQUFOO0FBQ0gsS0FGRCxNQUVPLElBQUlBLE9BQU8sR0FBWCxFQUFnQjtBQUNuQkEsY0FBTSxLQUFOO0FBQ0gsS0FGTSxNQUVBLElBQUlBLE9BQU8sSUFBWCxFQUFpQjtBQUNwQkEsY0FBTSxRQUFOO0FBQ0gsS0FGTSxNQUVBLElBQUlBLE9BQU8sS0FBWCxFQUFpQjtBQUNwQkEsY0FBTSxXQUFOO0FBQ0gsS0FGTSxNQUVBO0FBQ0hBLGNBQU0sUUFBTjtBQUNIOztBQUVELFFBQUlDLFFBQVEsR0FBWixFQUFpQjtBQUNiQSxlQUFPTCxPQUFPTyxLQUFQLENBQWEsVUFBYixDQUFQO0FBQ0gsS0FGRCxNQUVPLElBQUlGLFFBQVEsR0FBWixFQUFpQjtBQUNwQkEsZUFBT0wsT0FBT1EsSUFBUCxDQUFZLE9BQVosQ0FBUDtBQUNILEtBRk0sTUFFQSxJQUFJSCxRQUFRLEdBQVosRUFBaUI7QUFDcEJBLGVBQU9MLE9BQU9TLE1BQVAsQ0FBYyxVQUFkLENBQVA7QUFDSCxLQUZNLE1BRUEsSUFBSUosUUFBUSxHQUFaLEVBQWlCO0FBQ3BCQSxlQUFPTCxPQUFPVSxHQUFQLENBQVcsUUFBWCxDQUFQO0FBQ0gsS0FGTSxNQUVBLElBQUlMLFFBQVEsR0FBWixFQUFpQjtBQUNwQkEsZUFBT0wsT0FBT1csSUFBUCxDQUFZLFFBQVosQ0FBUDtBQUNIOztBQUVELFFBQUksT0FBT0wsSUFBUCxJQUFlLFFBQW5CLEVBQTZCO0FBQ3pCO0FBQ0FNLGdCQUFRQyxHQUFSLENBQVksT0FBSyxHQUFMLEdBQVNiLE9BQU9jLElBQVAsQ0FBWWQsT0FBT2UsS0FBUCxDQUFhWCxHQUFiLENBQVosQ0FBVCxHQUF3QyxJQUF4QyxHQUE2Q0osT0FBT2MsSUFBUCxDQUFZVCxJQUFaLENBQXpEO0FBQ0FPLGdCQUFRSSxJQUFSLENBQWEsUUFBYixFQUF1QlYsSUFBdkI7QUFDQTtBQUNIOztBQUVETSxZQUFRQyxHQUFSLENBQVksT0FBSyxHQUFMLEdBQVNiLE9BQU9jLElBQVAsQ0FBWWQsT0FBT2UsS0FBUCxDQUFhWCxHQUFiLENBQVosQ0FBVCxHQUF3QyxJQUF4QyxHQUE2Q0osT0FBT2MsSUFBUCxDQUFZVCxJQUFaLENBQTdDLEdBQStELEdBQS9ELEdBQW1FQyxJQUEvRTtBQUNILENBakNEIiwiZmlsZSI6ImxpYi9sb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29sb3JzID0gcmVxdWlyZSgnY29sb3JzJyk7XG5yZXF1aXJlKCdjb25zb2xlLmpzb24nKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbnYsIHR5cGUsIG1lc2cpIHtcbiAgICBpZiAoZW52ID09ICdkJykge1xuICAgICAgICBlbnYgPSAnREInO1xuICAgIH0gZWxzZSBpZiAoZW52ID09ICd3Jykge1xuICAgICAgICBlbnYgPSAnV0VCJztcbiAgICB9IGVsc2UgaWYgKGVudiA9PSAnaW8nKSB7XG4gICAgICAgIGVudiA9ICdTT0NLRVQnO1xuICAgIH0gZWxzZSBpZiAoZW52ID09ICdzY2gnKXtcbiAgICAgICAgZW52ID0gJ1NDSEVEVUxFUic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW52ID0gJ1NFUlZFUic7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT0gJ3MnKSB7XG4gICAgICAgIHR5cGUgPSBjb2xvcnMuZ3JlZW4oJ3N1Y2Nlc3M6Jyk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09ICdpJykge1xuICAgICAgICB0eXBlID0gY29sb3JzLmN5YW4oJ2luZm86Jyk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09ICd3Jykge1xuICAgICAgICB0eXBlID0gY29sb3JzLnllbGxvdygnd2FybmluZzonKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ2UnKSB7XG4gICAgICAgIHR5cGUgPSBjb2xvcnMucmVkKCdlcnJvcjonKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ2QnKSB7XG4gICAgICAgIHR5cGUgPSBjb2xvcnMuZ3JleSgnZGVidWc6Jyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBtZXNnID09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vbWVzZyA9IGNvbG9ycy5pdGFsaWMoY29sb3JzLmdyZXkoSlNPTi5zdHJpbmdpZnkobWVzZykpKTtcbiAgICAgICAgY29uc29sZS5sb2coJyAgJysnWycrY29sb3JzLmJvbGQoY29sb3JzLndoaXRlKGVudikpKyddICcrY29sb3JzLmJvbGQodHlwZSkpO1xuICAgICAgICBjb25zb2xlLmpzb24oJ09iamVjdCcsIG1lc2cpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJyAgJysnWycrY29sb3JzLmJvbGQoY29sb3JzLndoaXRlKGVudikpKyddICcrY29sb3JzLmJvbGQodHlwZSkrJyAnK21lc2cpO1xufTtcbiJdfQ==
