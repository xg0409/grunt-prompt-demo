module.exports = function(grunt) {
  grunt.initConfig({
    prompt: {
      bump: {
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
            }, {
              value: 'd',
              name: 'd'
            }, {
              value: 'e',
              name: 'e'
            }]
          }, {
            config: 'list_item_1',
            type: 'list',
            message: 'What specific version would you like',
            when: function(answers) {
              return answers['list_item'] === 'a';
            },
            default: 'a2',
            choices: [{
              value: 'a1',
              name: 'a1',
              checked: grunt.file.isFile('package.json')
            }, {
              value: 'a2',
              name: 'a2',
              checked: grunt.file.isFile('bower.json')
            }, {
              value: 'a3',
              name: 'a3',
              checked: grunt.file.isDir('.git')
            }]
          }, {
            config: 'bump.version',
            type: 'checkbox',
            message: 'What specific version would you like',
            when: function(answers) {
              return answers['list_item_1'] === 'a1';
            },
            then: function(results, done) {
              console.log(results);
              someAsyncFunction(function() {
                done();
              });
              return true;
            },
            default: 'aa2',
            choices: [{
              value: 'aa1',
              name: 'aa1',
              checked: grunt.file.isFile('package.json')
            }, {
              value: 'aa2',
              name: 'aa2',
              checked: grunt.file.isFile('bower.json')
            }, {
              value: 'aa3',
              name: 'aa3',
              checked: grunt.file.isDir('.git')
            }]
          }, {
            config: 'list_item_2',
            type: 'confirm',
            message: 'What should get the new version:',
            when: function(answers) {
              return answers['list_item'] === 'b';
            }
          }, {
            config: 'list_item_3',
            type: 'input',
            message: 'input username:',
            when: function(answers) {
              return answers['list_item'] === 'c';
            }
          }, {
            config: 'list_item_4',
            type: 'password',
            message: 'input password:',
            when: function(answers) {
              return answers['list_item'] === 'd';
            },
            validate: function(value) {
              console.log(value);
            }
          }]
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  // grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('my-prompt', ['prompt:bump']);

};
