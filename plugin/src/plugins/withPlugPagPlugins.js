import { withAppBuildGradle } from '@expo/config-plugins';
async function addAppPlugins(config, appBuildGradle) {
    const searchPattern = /(apply plugin: "com\.android\.application"\n)/gm;
    const replacePattern = `$1apply plugin: "kotlin-android"\napply plugin: "kotlin-android-extensions"\n`;
    appBuildGradle.contents = appBuildGradle.contents.replace(searchPattern, replacePattern);
    const searchPattern2 = /(dependencies {\n)/gm;
    const replacePattern2 = `$1    implementation 'org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version'\n`;
    appBuildGradle.contents = appBuildGradle.contents.replace(searchPattern2, replacePattern2);
    return appBuildGradle;
}
export const withPlugPagPlugins = (config) => {
    return withAppBuildGradle(config, async (config) => {
        config.modResults = await addAppPlugins(config, config.modResults);
        return config;
    });
};
//# sourceMappingURL=withPlugPagPlugins.js.map