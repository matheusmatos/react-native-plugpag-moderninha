import { ExpoConfig } from '@expo/config-types'
import { AndroidConfig, withAndroidManifest } from '@expo/config-plugins'

async function addCustomPermission(config: ExpoConfig, androidManifest: AndroidConfig.Manifest.AndroidManifest) {
  AndroidConfig.Permissions.addPermission(androidManifest, 'br.com.uol.pagseguro.permission.MANAGE_PAYMENTS')
  return androidManifest
}

export const withManagePaymentsPermission = (config: ExpoConfig) => {
  return withAndroidManifest(config, async config => {
    config.modResults = await addCustomPermission(config, config.modResults)
    return config
  })
}
