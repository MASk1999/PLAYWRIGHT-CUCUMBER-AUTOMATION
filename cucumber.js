module.exports = {
    default: {
        require :[
            // Add paths to step-definition files here
        ],
        paths: [
            // Add paths to feature files here
        ],
        format: ['html:reports/report.html'],    // Report-type
        parallel: 1,                // Number of scenarios to run in parallel
        tags: 'not @ignore'         // Example: skip scenarios tagged @ignore
    }
}