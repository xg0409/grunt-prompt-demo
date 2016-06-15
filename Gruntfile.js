module.exports = function(grunt) {

  var devBuild = {
    options: {
      questions: [{
        config: 'list_item',
        type: 'list',
        message: 'Bump version from to:',
        choices: [{
          value: 'a',
          name: 'a'
        }, {
          value: 'b',
          name: 'b'
        }, {
          value: 'c',
          name: 'c'
        }]
      }, {
        config: 'list_item_1',
        type: 'list',
        message: 'What specific version would you like',
        when: function(answers) {
          var answer = answers['list_item'];
          if (answer === "a") {} else {}
          return true;
        },

        default: 'a2',
        choices: [{
          value: 'a1',
          name: 'a1'
        }, {
          value: 'a2',
          name: 'a2'
        }, {
          value: 'a3',
          name: 'a3'
        }]
      }],
      then: function(results, done) {
        console.log('prompt then().', results);
      },
    }
  }

  grunt.initConfig({});

  require('load-grunt-tasks')(grunt);
  // grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('my-prompt', '', function() {

    grunt.config.set('prompt', {
      devBuild: devBuild
    });
    grunt.task.run("prompt:devBuild");
  });



};
