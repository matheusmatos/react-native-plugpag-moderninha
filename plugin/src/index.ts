import { ConfigPlugin, createRunOncePlugin, withPlugins } from '@expo/config-plugins'
import * as plugins from './plugins'

const pkg = require('react-native-pagseguro-moderninha/package.json')

export type withModerninhaProps = {
  plugPagWrapperVersion?: string;
}

const withModerninhaSDK: ConfigPlugin<withModerninhaProps> = (config, props = {}) => {
  return withPlugins(config, [
    plugins.withKotlinSupport,
    plugins.withPlugPagRepository,
    plugins.withPlugPagPlugins,
    [plugins.withPlugPagDependencies, props.plugPagWrapperVersion],
    plugins.withManagePaymentsPermission,
  ])
}

export default createRunOncePlugin(withModerninhaSDK, pkg.name, pkg.version)
