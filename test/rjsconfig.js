var require = {
    paths: {
        assert: "../bower_components/assert/assert",
        escodegen: "../bower_components/escodegen/escodegen.browser",
        esprima: "../bower_components/esprima/esprima",
        estraverse: "../bower_components/estraverse/estraverse",
        espower: "../bower_components/espower/lib/espower",
        mocha: "../bower_components/mocha/mocha",
        requirejs: "../bower_components/requirejs/require",
        "buster-assertions": "../bower_components/buster.js/buster-test"
    },
    shim: {
        assert: {
            exports: "assert"
        },
        escodegen: {
            exports: "escodegen"
        },
        "buster-assertions": {
            exports: "buster"
        }
    }
};
