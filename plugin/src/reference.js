const { AndroidConfig, withAndroidManifest, withProjectBuildGradle, withAppBuildGradle, withPlugins } = require('@expo/config-plugins');
const { addMetaDataItemToMainApplication, getMainActivityOrThrow } = AndroidConfig.Manifest;
const { addPermission } = AndroidConfig.Permissions;
const { getIntentFilters } = AndroidConfig.IntentFilters;
const renderIntentFilters = AndroidConfig.IntentFilters.default;

const tab = "    "

/**
 * MODS
 */
async function addKotlinSupport(config, projectBuildGradle) {
  const searchPattern = /(buildscript {\n)(\s{4}ext..*?\n)?(\s{4}ext {\n)/gm
  const replacePattern = `$1    ext.kotlin_version = "1.3.61"\n$3`
  projectBuildGradle.contents = projectBuildGradle.contents.replace(searchPattern, replacePattern)

  const searchPattern2 = /(buildscript {\n)((.|\n)*\s{4}dependencies {\n)(\s{8}classpath\(\"org\.jetbrains.kotlin:kotlin-gradle-plugin\:\$kotlin_version\"\)\n)?/gm
  const replacePattern2 = `$1$2        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:\$kotlin_version")\n`
  projectBuildGradle.contents = projectBuildGradle.contents.replace(searchPattern2, replacePattern2)

  return projectBuildGradle
}

async function addMavenPlugPag(config, projectBuildGradle) {
  const searchPattern = /(allprojects {\n\s{4}repositories {\n\s{8}mavenLocal\(\)\n)(\s{8}maven {\n\s{12}url \'https:\/\/github\.com\/pagseguro\/PlugPagServiceWrapper\/raw\/master\'\n\s{8}}\n)?/gm
  const replacePattern = `$1        maven {\n            url 'https://github.com/pagseguro/PlugPagServiceWrapper/raw/master'\n        }\n`
  projectBuildGradle.contents = projectBuildGradle.contents.replace(searchPattern, replacePattern)
  return projectBuildGradle
}

async function addAppPlugins(config, appBuildGradle) {
  const searchPattern = /(apply plugin: "com\.android\.application"\n)/gm
  const replacePattern = `$1apply plugin: "kotlin-android"\napply plugin: "kotlin-android-extensions"\n`
  appBuildGradle.contents = appBuildGradle.contents.replace(searchPattern, replacePattern)

  const searchPattern2 = /(dependencies {\n)/gm
  const replacePattern2 = `$1    implementation 'org.jetbrains.kotlin:kotlin-stdlib:\$kotlin_version'\n`
  appBuildGradle.contents = appBuildGradle.contents.replace(searchPattern2, replacePattern2)
  return appBuildGradle
}

async function addAppGradleDependencies(config, appBuildGradle) {
  const searchPattern = `dependencies {\n`
  const replacePattern = `${searchPattern}${tab}implementation 'com.android.support:design:28.0.0'\n${tab}implementation 'br.com.uol.pagseguro.plugpagservice.wrapper:wrapper:1.6.0'\n`
  appBuildGradle.contents = appBuildGradle.contents.replace(searchPattern, replacePattern)
  return appBuildGradle
}

async function addCustomPermission(config, androidManifest) {
  addPermission(androidManifest, 'br.com.uol.pagseguro.permission.MANAGE_PAYMENTS')
  return androidManifest
}

async function addCustomIntentFilter(config, androidManifest) {
  const mainActivity = getMainActivityOrThrow(androidManifest)
  mainActivity['intent-filter'].push({
    action: {
      $: {
        'android:name': "br.com.uol.pagseguro.PAYMENT"
      }
    },
    category: {
      $: {
        'android:name': "android.intent.category.DEFAULT"
      }
    }
  })
  return androidManifest
}

/**
 * PLUGINS
 */
const withKotlinSupport = (config) => {
  return withProjectBuildGradle (config, async config => {
    config.modResults = await addKotlinSupport(config, config.modResults);
    return config;
  })
}

const withPlugPagRepository = (config) => {
  return withProjectBuildGradle (config, async config => {
    config.modResults = await addMavenPlugPag(config, config.modResults);
    return config;
  })
}

const withPlugPagPlugins = (config) => {
  return withAppBuildGradle(config, async config => {
    config.modResults = await addAppPlugins(config, config.modResults);
    return config;
  })
}

const withPlugPagDependencies = (config) => {
  return withAppBuildGradle(config, async config => {
    config.modResults = await addAppGradleDependencies(config, config.modResults);
    return config;
  })
}

const withManagePaymentsPermission = (config) => {
  return withAndroidManifest(config, async config => {
    config.modResults = await addCustomPermission(config, config.modResults);
    config.modResults = await addCustomIntentFilter(config, config.modResults);
    return config;
  })
}

module.exports = function withModerninhaSDK (config, customName) {
  return withPlugins(config, [
    withKotlinSupport,
    withPlugPagRepository,
    withPlugPagPlugins,
    withPlugPagDependencies,
    withManagePaymentsPermission,
  ])
}
