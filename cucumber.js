module.exports = {
    default: {
        require :[
            // Add paths to step-definition files and world here
            './world.js',
            './tests/step-definitions.js'
        ],
        paths: [
            // Add paths to feature files here
            './tests/*/features/*.feature'
        ],
        format: ['html:reports/report.html'],    // Report-type
        parallel: 1,                // Number of scenarios to run in parallel
        tags: 'not @ignore'         // Example: skip scenarios tagged @ignore
    }
}