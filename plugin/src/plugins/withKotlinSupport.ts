import { ExpoConfig } from '@expo/config-types'
import { AndroidConfig, withProjectBuildGradle } from '@expo/config-plugins'

async function addKotlinSupport(config: ExpoConfig, projectBuildGradle: AndroidConfig.Paths.GradleProjectFile) {
  const searchPattern = /(buildscript {\n)(\s{4}ext..*?\n)?(\s{4}ext {\n)/gm
  const replacePattern = `$1    ext.kotlin_version = "1.3.61"\n$3`
  projectBuildGradle.contents = projectBuildGradle.contents.replace(searchPattern, replacePattern)

  const searchPattern2 = /(buildscript {\n)((.|\n)*\s{4}dependencies {\n)(\s{8}classpath\("org\.jetbrains.kotlin:kotlin-gradle-plugin:\$kotlin_version"\)\n)?/gm
  const replacePattern2 = `$1$2        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version")\n`
  projectBuildGradle.contents = projectBuildGradle.contents.replace(searchPattern2, replacePattern2)

  return projectBuildGradle
}

export const withKotlinSupport = (config: ExpoConfig) => {
  return withProjectBuildGradle(config, async config => {
    config.modResults = await addKotlinSupport(config, config.modResults)
    return config
  })
}
