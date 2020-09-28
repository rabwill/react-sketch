'use strict';

const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);
build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
      generatedConfiguration = {
        ...generatedConfiguration,
        node: { fs: "empty" , net: 'empty',    tls: 'empty',
        dns: 'empty',child_process:"empty"},
      };
      return generatedConfiguration;
    },
  });
  
  build.initialize(require("gulp"));