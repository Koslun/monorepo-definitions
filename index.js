const monorepoDefinitions = {
  'angular': [
    '@angular/core',
    '@angular/router',
    '@angular/common',
    '@angular/compiler',
    '@angular/cli',
    '@angular/platform-server',
    '@angular/upgrade',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/service-worker',
    '@angular/http',
    '@angular/platform-browser-dynamic',
    '@angular/animations',
    '@angular/elements',
    '@angular/platform-webworker',
    '@angular/platform-webworker-dynamic',
    '@angular/bazel',
    '@angular/language-service'
  ],
  'angular2': [
    '@angular/material',
    '@angular/cdk',
    '@angular/material-experimental',
    '@angular/cdk-experimental',
    '@angular/material-moment-adapter'
  ],
  'angular1': [
    'angular',
    'angular-animate',
    'angular-aria',
    'angular-cookies',
    'angular-i18n',
    'angular-loader',
    'angular-mocks',
    'angular-parse-ext',
    'angular-route',
    'angular-resource',
    'angular-sanitize',
    'angular-scenario',
    'angular-touch',
    'angular-messages',
    'angular-messages-format'
  ],
  'babel': [
    'babel-plugin-transform-es2015-spread',
    'babel-plugin-syntax-trailing-function-commas',
    'babel-plugin-check-es2015-constants',
    'babel-plugin-transform-function-bind',
    'babel-plugin-transform-react-jsx-source',
    'babel-plugin-transform-es2015-template-literals',
    'babel-plugin-transform-react-inline-elements',
    'babel-plugin-transform-object-set-prototype-of-to-assign',
    'babel-plugin-transform-flow-comments',
    'babel-plugin-transform-flow-strip-types',
    'babel-plugin-transform-es2015-arrow-functions',
    'babel-plugin-transform-eval',
    'babel-plugin-transform-jscript',
    'babel-plugin-transform-es2015-literals',
    'babel-plugin-transform-es2015-block-scoped-functions',
    'babel-plugin-transform-es2015-instanceof',
    'babel-plugin-transform-export-extensions',
    'babel-plugin-transform-react-jsx-self',
    'babel-plugin-transform-do-expressions',
    'babel-plugin-transform-object-assign',
    'babel-plugin-external-helpers',
    'babel-plugin-transform-async-functions',
    'babel-plugin-transform-es3-property-literals',
    'babel-plugin-transform-es3-member-expression-literals',
    'babel-messages',
    'babel-preset-flow',
    'babel-plugin-transform-es2015-destructuring',
    'babel-plugin-transform-es2015-for-of',
    'babel-plugin-transform-es2015-typeof-symbol',
    'babel-plugin-transform-react-constant-elements',
    'babel-plugin-transform-runtime',
    'babel-helpers',
    'babel-helper-plugin-test-runner',
    'babel-helper-function-name',
    'babel-helper-get-function-arity',
    'babel-preset-react',
    'babel-plugin-transform-react-jsx-compat',
    'babel-helper-explode-class',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-es2015-function-name',
    'babel-plugin-transform-react-jsx',
    'babel-plugin-transform-async-to-generator',
    'babel-plugin-transform-es2015-classes',
    'babel-plugin-transform-es2015-parameters',
    'babel-plugin-transform-async-generator-functions',
    'babel-plugin-transform-es2015-sticky-regex',
    'babel-plugin-transform-es2015-object-super',
    'babel-plugin-transform-es2015-unicode-regex',
    'babel-plugin-transform-es5-property-mutators',
    'babel-plugin-transform-async-to-module-method',
    'babel-plugin-transform-exponentiation-operator',
    'babel-plugin-transform-es2015-computed-properties',
    'babel-plugin-transform-es2015-shorthand-properties',
    'babel-plugin-transform-strict-mode',
    'babel-plugin-transform-es2015-modules-umd',
    'babel-plugin-transform-es2015-modules-amd',
    'babel-plugin-transform-es2015-duplicate-keys',
    'babel-plugin-transform-es2015-modules-systemjs',
    'babel-plugin-transform-decorators',
    'babel-helper-builder-binary-assignment-operator-visitor',
    'babel-helper-bindify-decorators',
    'babel-helper-replace-supers',
    'babel-helper-hoist-variables',
    'babel-helper-call-delegate',
    'babel-helper-explode-assignable-expression',
    'babel-helper-remap-async-to-generator',
    'babel-helper-optimise-call-expression',
    'babel-preset-stage-0',
    'babel-preset-stage-1',
    'babel-preset-stage-2',
    'babel-preset-stage-3',
    'babel-plugin-transform-react-display-name',
    'babel-polyfill',
    'babel-runtime',
    'babel-template',
    'babel-types',
    'babel-traverse',
    'babel-cli',
    'babel-register',
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-transform-regenerator',
    'babel-plugin-transform-es2015-block-scoping',
    'babel-plugin-transform-regenerator',
    'babel-helper-builder-react-jsx',
    'babel-plugin-transform-proto-to-assign',
    'babel-helper-regex',
    'babel-helper-define-map',
    'babel-standalone',
    'babel-code-frame',
    'babel-plugin-transform-es2015-modules-commonjs',
    'babel-helper-fixtures',
    'babel-helper-transform-fixture-test-runner',
    'babel-plugin-syntax-numeric-separator',
    'babel-plugin-syntax-optional-catch-binding',
    'babel-plugin-syntax-optional-chaining',
    'babel-plugin-syntax-typescript',
    // 'babel-plugin-transform-classes',
    'babel-plugin-transform-function-sent2',
    'babel-plugin-transform-new-target',
    'babel-plugin-transform-numeric-separator',
    'babel-plugin-transform-optional-catch-binding',
    'babel-plugin-transform-optional-chaining'
  ],
  'babel7': [
    '@babel/cli',
    '@babel/code-frame',
    '@babel/core',
    '@babel/generator',
    '@babel/helper-annotate-as-pure',
    '@babel/helper-bindify-decorators',
    '@babel/helper-builder-binary-assignment-operator-visitor',
    '@babel/helper-builder-react-jsx',
    '@babel/helper-call-delegate',
    '@babel/helper-define-map',
    '@babel/helper-explode-assignable-expression',
    '@babel/helper-explode-class',
    '@babel/helper-fixtures',
    '@babel/helper-fixtures module',
    '@babel/helper-function-name',
    '@babel/helper-get-function-arity',
    '@babel/helper-hoist-variables',
    '@babel/helper-member-expression-to-functions',
    '@babel/helper-module-imports',
    '@babel/helper-module-transforms',
    '@babel/helper-optimise-call-expression',
    '@babel/helper-plugin-test-runner',
    '@babel/helper-plugin-utils',
    '@babel/helper-regex',
    '@babel/helper-remap-async-to-generator',
    '@babel/helper-replace-supers',
    '@babel/helper-simple-access',
    '@babel/helper-split-export-declaration',
    '@babel/helper-transform-fixture-test-runner',
    '@babel/helper-wrap-function',
    '@babel/helpers',
    '@babel/highlight',
    '@babel/node',
    '@babel/parser',
    '@babel/plugin-check-constants',
    '@babel/plugin-codemod-object-assign-to-object-spread',
    '@babel/plugin-codemod-optional-catch-binding',
    '@babel/plugin-external-helpers',
    '@babel/plugin-proposal-async-generator-functions',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-decorators',
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-export-default',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-proposal-logical-assignment-operators',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-catch-binding',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-pipeline-operator',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-proposal-unicode-property-regex',
    '@babel/plugin-syntax-async-generators',
    '@babel/plugin-syntax-bigint',
    '@babel/plugin-syntax-class-properties',
    '@babel/plugin-syntax-decorators',
    '@babel/plugin-syntax-do-expressions',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-export-default-from',
    '@babel/plugin-syntax-export-extensions',
    '@babel/plugin-syntax-export-namespace-from',
    '@babel/plugin-syntax-flow',
    '@babel/plugin-syntax-function-bind',
    '@babel/plugin-syntax-function-sent',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-syntax-json-strings',
    '@babel/plugin-syntax-jsx',
    '@babel/plugin-syntax-logical-assignment-operators',
    '@babel/plugin-syntax-nullish-coalescing-operator',
    '@babel/plugin-syntax-numeric-separator',
    '@babel/plugin-syntax-object-rest-spread',
    '@babel/plugin-syntax-optional-catch-binding',
    '@babel/plugin-syntax-optional-chaining',
    '@babel/plugin-syntax-pipeline-operator',
    '@babel/plugin-syntax-throw-expressions',
    '@babel/plugin-syntax-typescript',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-block-scoped-functions',
    '@babel/plugin-transform-block-scoping',
    '@babel/plugin-transform-classes',
    '@babel/plugin-transform-computed-properties',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-dotall-regex',
    '@babel/plugin-transform-duplicate-keys',
    '@babel/plugin-transform-eval',
    '@babel/plugin-transform-exponentiation-operator',
    '@babel/plugin-transform-flow-comments',
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-transform-for-of',
    '@babel/plugin-transform-function-name',
    '@babel/plugin-transform-instanceof',
    '@babel/plugin-transform-jscript',
    '@babel/plugin-transform-literals',
    '@babel/plugin-transform-member-expression-literals',
    '@babel/plugin-transform-modules-amd',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-modules-systemjs',
    '@babel/plugin-transform-modules-umd',
    '@babel/plugin-transform-new-target',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-object-set-prototype-of-to-assign',
    '@babel/plugin-transform-object-super',
    '@babel/plugin-transform-parameters',
    '@babel/plugin-transform-property-literals',
    '@babel/plugin-transform-property-mutators',
    '@babel/plugin-transform-proto-to-assign',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-react-display-name',
    '@babel/plugin-transform-react-inline-elements',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-react-jsx-compat',
    '@babel/plugin-transform-react-jsx-self',
    '@babel/plugin-transform-react-jsx-source',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-reserved-words',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-shorthand-properties',
    '@babel/plugin-transform-spread',
    '@babel/plugin-transform-sticky-regex',
    '@babel/plugin-transform-strict-mode',
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-transform-typeof-symbol',
    '@babel/plugin-transform-typescript',
    '@babel/plugin-transform-unicode-regex',
    '@babel/polyfill',
    '@babel/preset-env',
    '@babel/preset-env-standalone',
    '@babel/preset-es2015',
    '@babel/preset-es2016',
    '@babel/preset-es2017',
    '@babel/preset-flow',
    '@babel/preset-react',
    '@babel/preset-stage-0',
    '@babel/preset-stage-1',
    '@babel/preset-stage-2',
    '@babel/preset-stage-3',
    '@babel/preset-typescript',
    '@babel/register',
    '@babel/runtime',
    '@babel/standalone',
    '@babel/template',
    '@babel/traverse',
    '@babel/types'
  ],
  'baset': [
    'baset',
    'baset-core',
    'baset-cli',
    'baset-vm',
    'baset-reader-md',
    'baset-reader-ts',
    'baset-reader-babel',
    'baset-baseliner-md',
    'baset-baseliner-json',
    'baset-resolver-react',
    'baset-resolver-pixi',
    'baset-env-browser'
  ],
  'enzyme': [
    'enzyme',
    'enzyme-adapter-react-13',
    'enzyme-adapter-react-14',
    'enzyme-adapter-react-15.4',
    'enzyme-adapter-react-15',
    'enzyme-adapter-react-16.1',
    'enzyme-adapter-react-16.2',
    'enzyme-adapter-react-16.3',
    'enzyme-adapter-react-16',
    'enzyme-adapter-utils',
    'enzyme-adapter-react-helper'
  ],
  'fortawesome': [
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-regular-svg-icons',
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/react-fontawesome'
  ],
  'jest': [
    'jest',
    'babel-jest',
    'jest-cli',
    'babel-preset-jest',
    'babel-plugin-jest-hoist',
    'jest-jasmine2',
    'jest-repl',
    'jest-runtime',
    'jest-validate',
    'jest-circus',
    'jest-runner',
    'jest-config'
  ],
  'jest2': [
    'expect',
    'pretty-format',
    'jest-util',
    'jest-mock',
    'jest-environment-node',
    'jest-environment-jsdom',
    'jest-haste-map',
    'jest-snapshot',
    'jest-resolve',
    'jest-changed-files',
    'jest-diff',
    'jest-matcher-utils',
    'jest-resolve-dependencies',
    'eslint-config-fb-strict',
    'jest-phabricator',
    'jest-editor-support',
    'jest-message-util',
    'jest-regex-util',
    'jest-test-typescript-parser',
    'jest-docblock',
    'jest-get-type',
    'jest-worker',
    'jest-leak-detector',
    'diff-sequences',
    'jest-serializer'
  ],
  'material-ui': [
    '@material-ui/codemod',
    '@material-ui/core',
    '@material-ui/icons',
    '@material-ui/lab'
  ],
  'polyfill-io-aot': [
    '@polyfill-io-aot/builder',
    '@polyfill-io-aot/builder-cli',
    '@polyfill-io-aot/common',
    '@polyfill-io-aot/core',
    '@polyfill-io-aot/express'
  ],
  'pouchdb': [
    'pouchdb',
    'pouchdb-abstract-mapreduce',
    'pouchdb-adapter-fruitdown',
    'pouchdb-adapter-http',
    'pouchdb-adapter-idb',
    'pouchdb-adapter-indexeddb',
    'pouchdb-adapter-leveldb',
    'pouchdb-adapter-leveldb-core',
    'pouchdb-adapter-localstorage',
    'pouchdb-adapter-memory',
    'pouchdb-adapter-node-websql',
    'pouchdb-adapter-utils',
    'pouchdb-adapter-websql',
    'pouchdb-adapter-websql-core',
    'pouchdb-binary-utils',
    'pouchdb-browser',
    'pouchdb-changes-filter',
    'pouchdb-checkpointer',
    'pouchdb-collate',
    'pouchdb-collections',
    'pouchdb-core',
    'pouchdb-debug',
    'pouchdb-errors',
    'pouchdb-promise',
    'pouchdb-find',
    'pouchdb-for-coverage',
    'pouchdb-generate-replication-id',
    'pouchdb-json',
    'pouchdb-mapreduce',
    'pouchdb-mapreduce-utils',
    'pouchdb-md5',
    'pouchdb-merge',
    'pouchdb-node',
    'pouchdb-replication',
    'pouchdb-selector-core',
    'pouchdb-utils',
    'sublevel-pouchdb'
  ],
  'react': [
    'react',
    'react-dom',
    'react-art',
    'react-is',
    'react-test-renderer',
    'create-subscription'
  ],
  'react-dnd': [
    'dnd-core',
    'react-dnd',
    'react-dnd-html5-backend',
    'react-dnd-test-backend'
  ],
  'storybook': [
    '@storybook/codemod',
    '@storybook/cli',
    '@storybook/addons',
    '@storybook/channels',
    '@storybook/addon-centered',
    '@storybook/ui',
    '@storybook/addon-actions',
    '@storybook/addon-graphql',
    '@storybook/addon-info',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-storyshots',
    '@storybook/react',
    '@storybook/react-native',
    '@storybook/channel-postmessage',
    '@storybook/channel-websocket',
    '@storybook/addon-options',
    '@storybook/vue',
    '@storybook/components',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/angular',
    '@storybook/addon-a11y',
    '@storybook/polymer',
    '@storybook/addon-jest',
    '@storybook/client-logger',
    '@storybook/node-logger',
    '@storybook/core',
    '@storybook/addon-storysource'
  ],
  'react-cosmos': [
    'react-cosmos',
    'react-cosmos-apollo-proxy',
    'react-cosmos-config',
    'react-cosmos-context-proxy',
    'react-cosmos-fetch-proxy',
    'react-cosmos-flow',
    'react-cosmos-loader',
    'react-cosmos-localstorage-proxy',
    'react-cosmos-normalize-props-proxy',
    'react-cosmos-playground',
    'react-cosmos-redux-proxy',
    'react-cosmos-router-proxy',
    'react-cosmos-scripts',
    'react-cosmos-shared',
    'react-cosmos-state-proxy',
    'react-cosmos-telescope',
    'react-cosmos-test',
    'react-cosmos-voyager',
    'react-cosmos-voyager2',
    'react-cosmos-xhr-proxy',
    'react-querystring-router'
  ],
  'uppy': [
    'uppy',
    '@uppy/aws-s3',
    '@uppy/aws-s3-multipart',
    '@uppy/companion',
    '@uppy/companion-client',
    '@uppy/core',
    '@uppy/dashboard',
    '@uppy/drag-drop',
    '@uppy/dropbox',
    '@uppy/file-input',
    '@uppy/form',
    '@uppy/golden-retriever',
    '@uppy/google-drive',
    '@uppy/informer',
    '@uppy/instagram',
    '@uppy/progress-bar',
    '@uppy/provider-views',
    '@uppy/react',
    '@uppy/redux-dev-tools',
    '@uppy/status-bar',
    '@uppy/store-default',
    '@uppy/store-redux',
    '@uppy/thumbnail-generator',
    '@uppy/transloadit',
    '@uppy/transloadit-preset',
    '@uppy/tus',
    '@uppy/url',
    '@uppy/utils',
    '@uppy/webcam',
    '@uppy/xhr-upload'
  ],
  'gk-test': [
    'gk-test-a',
    'gk-test-b',
    'gk-test-c'
  ],
  'appcenter': [
    'appcenter',
    'appcenter-analytics',
    'appcenter-crashes'
  ]
}

module.exports = monorepoDefinitions
