import { withProjectBuildGradle } from '@expo/config-plugins';
async function addMavenPlugPag(config, projectBuildGradle) {
    const searchPattern = /(allprojects {\n\s{4}repositories {\n\s{8}mavenLocal\(\)\n)(\s{8}maven {\n\s{12}url 'https:\/\/github\.com\/pagseguro\/PlugPagServiceWrapper\/raw\/master'\n\s{8}}\n)?/gm;
    const replacePattern = `$1        maven {\n            url 'https://github.com/pagseguro/PlugPagServiceWrapper/raw/master'\n        }\n`;
    projectBuildGradle.contents = projectBuildGradle.contents.replace(searchPattern, replacePattern);
    return projectBuildGradle;
}
export const withPlugPagRepository = (config) => {
    return withProjectBuildGradle(config, async (config) => {
        config.modResults = await addMavenPlugPag(config, config.modResults);
        return config;
    });
};
//# sourceMappingURL=withPlugPagRepository.js.map