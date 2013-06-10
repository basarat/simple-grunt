// Type definitions for Grunt JS
// Project: http://gruntjs.com/
// Definitions by: Basarat Ali Syed <https://github.com/basarat>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


////////////////
/// To add plugins update the IGruntConfig using open ended interface syntax
////////////////
interface IGruntConfig {
    pkg?: any;
}


////////////////
// Main Grunt object 
// http://gruntjs.com/api/grunt
////////////////
interface IGrunt {
    // Config
    config: IGruntConfigObject;
    initConfig(config?: IGruntConfig);


    // Tasks
    task: any;
    // Creating
    registerTask: Function;
    registerMultiTask: Function;
    renameTask: Function;
    // Loading
    loadTasks: Function;
    loadNpmTasks: Function;

    // Errors
    warn: Function;
    fatal: Function;

    // Misc: 
    package: any;
    version: any;

    // File
    file: IGruntFileObject;

    // Event
    event: any;
    // Fail
    fail: any;
    // Log
    log: any;
    // Options
    option: any;
    // Template
    template: any;
    // Util
    util: any;
}

////////////////
/// Grunt Config object
/// http://gruntjs.com/api/grunt.config#accessing-config-data
////////////////
interface IGruntConfigObject {
    (...param: any[]): any;
    init: (config?: IGruntConfig) => void;
    get: Function;
    process: Function;
    getRaw: Function;
    set: Function;
    escape: (propString: string) => void;
    requires: Function;
}

////////////////
// Grunt File object
// http://gruntjs.com/api/grunt.file
////////////////
interface IGruntFileObjectOptionsSimple {
    encoding?: string;
}
interface IGruntFileObjectOptions extends IGruntFileObjectOptionsSimple {
    process?: Function;
    noProcess?: any;
}
interface IGruntFileObject {

    // Character encoding
    defaultEncoding: string;

    // Reading and writing
    read(filepath, options?: IGruntFileObjectOptionsSimple);
    readJSON(filepath, options?: IGruntFileObjectOptionsSimple);
    readYAML(filepath, options?: IGruntFileObjectOptionsSimple);
    write(filepath, contents, options?: IGruntFileObjectOptionsSimple);
    copy(srcpath, destpath, options?: IGruntFileObjectOptions);
    delete(filepath, options?: { force?: bool; });

    // Directories
    mkdir(dirpath, mode?);
    recurse(rootdir, callback);

    // Globbing patterns
    expand(patterns);
    expand(options, patterns);
    expandMapping(patterns, dest, options?);
    match(patterns, filepaths);
    match(options, patterns, filepaths);
    isMatch(patterns, filepaths): bool;
    isMatch(options, patterns, filepaths): bool;

    // file types
    exists(...paths: any[]);
    isLink(...paths: any[]);
    isDir(...paths: any[]);
    isFile(...paths: any[]);

    // paths
    isPathAbsolute(...paths: any[]);
    arePathsEquivalent(...paths: any[]);
    isPathCwd(...paths: any[]);
    setBase(...paths: any[]);

    // External libraries
    glob: any;
    minimatch: any;
    findup: any;
}


////////////////
/// Globally called export function module.exports
////////////////
declare var module: {
    exports(grunt: IGrunt): void;
}

////////////////
/// Sample grunt plugin definition: 
/// uglify : https://github.com/gruntjs/grunt-contrib-uglify
////////////////
interface IGruntUglifyOptions {
    mangle?: any; // bool / object 
    compress?: any; // bool / object
    beautify?: any; // bool / object
    report?: any; // false / 'min' / 'gzip'
    sourceMap?: any; // String / Function 
    sourceMapRoot?: string;
    sourceMapIn?: string;
    sourceMappingURL?: any; // String / Function
    sourceMapPrefix?: number;
    wrap?: string;
    exportAll?: bool;
    preserveComments?: any; // bool / string / function 
    banner?: string;
}
interface IGruntConfig {
    uglify?: {
        options?: IGruntUglifyOptions;
        [target: string]: {
            files?: { [output: string]: string[]; };
        };
    };
}


////////////////
/// Sample grunt plugin definition: 
/// less : https://npmjs.org/package/grunt-contrib-less
////////////////
interface IGruntLessOptions {
    /**
    * Directory of input file.
    */
    paths?: any; // String / Array
    compress?: bool;
    yuicompress?: bool;
    optimization?: number;
    strictImports?: bool;
    dumpLineNumbers?: string;
}

interface IGruntLessConfig {
    options?: IGruntLessOptions;
    files?: { [output: string]: string; };
}

interface IGruntConfig {
    less?: {
        [target: string]: IGruntLessConfig;
    };
}

////////////////
/// Sample grunt plugin definition: 
/// Recess : https://github.com/sindresorhus/grunt-recess
////////////////
interface IGruntRecessConfig {
    compile?: bool;
    compress?: bool;
    noIDS?: bool;
    noJSPrefix?: bool;
    noOverqualifying?: bool;
    noUnderscores?: bool;
    noUniversalSelectors?: bool;
    prefixWhitespace?: bool;
    strictPropertyOrder?: bool;
    stripColors?: bool;
    zeroUnits?: bool;
}

interface IGruntConfig {
    recess?: {
        options?: IGruntRecessConfig;
    };
}


interface IBar{
    bar: string;
}

interface IFoo{
    a?: {
        [key: string]: IBar; // Once you have a string indexer all other properties 
        options?: IBar;        // e.g Options, but have the same type 
    }
}

var x: IFoo = {
    a: {        
        'someKey': {
            bar:'asdf' // put any thing other than a string here and you get an error
        }        
    }
}


// Official code sample from 
// http://gruntjs.com/getting-started#an-example-gruntfile


function setup(grunt:IGrunt) {

    // Project configuration.
    grunt.initConfig({
        less: {
            'dev': {
               
            }
        }
    }
        );


    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['less:dev']);

};

(module).exports = setup;