import { AndroidConfig, withAndroidManifest } from '@expo/config-plugins';
async function addCustomPermission(config, androidManifest) {
    AndroidConfig.Permissions.addPermission(androidManifest, 'br.com.uol.pagseguro.permission.MANAGE_PAYMENTS');
    return androidManifest;
}
export const withManagePaymentsPermission = (config) => {
    return withAndroidManifest(config, async (config) => {
        config.modResults = await addCustomPermission(config, config.modResults);
        return config;
    });
};
//# sourceMappingURL=withManagePaymentsPermission.js.map