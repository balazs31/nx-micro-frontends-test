// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'container',
  remotes: ['vision', 'source'],
};

module.exports = moduleFederationConfig;
