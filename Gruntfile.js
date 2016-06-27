module.exports = function(grunt) {

  var devBuild = {
    options: {
      questions: [{
        config: 'project_item',
        type: 'list',
        message: 'select all',
        choices: [{
          value: 'build_all_projects',
          name: 'build_all_projects'
        }, {
          value: 'app',
          name: 'app'
        }]
      }, {
        config: 'projects_app_submodule',
        type: 'list',
        message: 'select app project submodule',
        when: function(answers) {
          var answer = answers['project_item'];
          if (answer === "app") {
            return true;
          }
          return false;
        },
        // default: 'a2',
        choices: [{
          value: 'ms_pull_new',
          name: 'ms_pull_new'
        }, {
          value: 'snap_up_center',
          name: 'snap_up_center'
        }, {
          value: 'get_coupon',
          name: 'get_coupon'
        }]
      }],
      then: function(results, done) {
        console.log('xg:', results);
      }
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
