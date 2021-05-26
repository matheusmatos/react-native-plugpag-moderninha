import { createRunOncePlugin, withPlugins } from '@expo/config-plugins';
import * as plugins from './plugins';
const pkg = require('react-native-pagseguro-moderninha/package.json');
const withModerninhaSDK = (config, props = {}) => {
    return withPlugins(config, [
        plugins.withKotlinSupport,
        plugins.withPlugPagRepository,
        plugins.withPlugPagPlugins,
        [plugins.withPlugPagDependencies, props.plugPagWrapperVersion],
        plugins.withManagePaymentsPermission,
    ]);
};
export default createRunOncePlugin(withModerninhaSDK, pkg.name, pkg.version);
//# sourceMappingURL=index.js.map