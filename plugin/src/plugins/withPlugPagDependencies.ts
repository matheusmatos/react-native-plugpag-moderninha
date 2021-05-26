import { ExpoConfig } from '@expo/config-types'
import { ConfigPlugin, AndroidConfig, withAppBuildGradle } from '@expo/config-plugins'
import { withModerninhaProps } from "../index"

const tab = "    "

async function addAppGradleDependencies(config: ExpoConfig, appBuildGradle: AndroidConfig.Paths.GradleProjectFile) {
  const searchPattern = `dependencies {\n`
  const replacePattern = `${searchPattern}${tab}implementation 'com.android.support:design:28.0.0'\n${tab}implementation 'br.com.uol.pagseguro.plugpagservice.wrapper:wrapper:1.6.0'\n`
  appBuildGradle.contents = appBuildGradle.contents.replace(searchPattern, replacePattern)
  return appBuildGradle
}

export const withPlugPagDependencies: ConfigPlugin<withModerninhaProps> = (config: ExpoConfig, props = {}) => {
  return withAppBuildGradle(config, async config => {
    config.modResults = await addAppGradleDependencies(config, config.modResults)
    return config
  })
}
