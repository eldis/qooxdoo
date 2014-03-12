/*
 * grunt-qx-source
 */

'use strict';

var common = {
  "APPLICATION" : "myapp",
  "QOOXDOO_PATH": "../../../..",
  "LOCALES": ["en", "de"],
  "QXTHEME": "<%= common.APPLICATION %>.theme.Theme",
  "ROOT": ".",
  "APPLICATION_MAIN_CLASS" : "<%= common.APPLICATION %>.Application",
  "SOURCE_PATH": "<%= common.ROOT %>/test/data/myapp/source",
  "ENVIRONMENT": {
    "qx.application": "<%= common.APPLICATION %>.Application",
    "qx.revision":"",
    "qx.theme": "<%= common.APPLICATION %>.theme.Theme",
    "qx.version":"3.6"
  }
};

module.exports = function(grunt) {

  grunt.initConfig({

    common: common,

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    clean: {
      tests: ['tmp'],
    },

    source: {
      options: {
        appName: "<%= common.APPLICATION %>",
        qxPath: "<%= common.QOOXDOO_PATH %>",
        sourcePath: "<%= common.SOURCE_PATH %>/script",
        locales:  "<%= common.LOCALES %>",
        includes: ["<%= common.APPLICATION_MAIN_CLASS %>", "<%= common.QXTHEME %>"],
        excludes: [],
        environment: common.ENVIRONMENT,
        libraries: [
          "<%= common.QOOXDOO_PATH %>/framework/Manifest.json",
          "<%= common.ROOT %>/test/data/myapp/Manifest.json"
        ]
      },
    },

    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'source', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
