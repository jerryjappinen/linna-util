import {
  isArray,
  isNumber,
  isString,
  kebabCase,
  keyBy,
  mapKeys,
  mapValues
} from 'lodash'

export const isRoot = (vnode) => {
  return !!(
    vnode.parent &&
    vnode.parent.tag &&
    vnode.parent.tag === vnode.context.$vnode.tag
  )
}

export const getStaticPrefix = (vnode) => {
  return vnode.context.$vnode.componentInstance.classDirectivePrefix
}

export const getComponentNamePrefix = (vnode) => {

  // In case component has a name
  const componentName = vnode.context.$vnode.tag.replace('vue-component-', '')
  const dashIndex = componentName.indexOf('-')

  if (dashIndex > 0 && componentName.length > dashIndex + 1) {
    return componentName.substr(dashIndex + 1)
  }

  return null
}

export const joinPrefixes = (...args) => {
  const prefixes = [...args]
  return kebabCase(prefixes.filter((prefix) => {
    return !!prefix
  }).join('-'))
}

export const normalizeBindingValue = (value, prefix) => {
  let normalizedValue = value

  // Normalize strings to an array
  if (isString(normalizedValue)) {
    normalizedValue = normalizedValue.split(' ')
  }

  // Normalize array of class names
  if (isArray(normalizedValue)) {
    normalizedValue = mapValues(keyBy(normalizedValue, (value) => {
      return value
    }), () => {
      return true
    })
  }

  // Normalize keys
  normalizedValue = mapKeys(normalizedValue, (value, key) => {
    return kebabCase((prefix ? (prefix + '-') : '') + key)
  })

  return normalizedValue
}

// Compose final classname
export const composeClassname = (key, value) => {

  if (value) {
    if (isString(value) || isNumber(value)) {
      return kebabCase(key + '-' + value)

    } else if (value) {
      return key
    }
  }

  return null
}

export const composeClassnames = (classnamesMap) => {
  const classnames = []

  // Go through each class name, and add it to the list if it comes out as truthy
  for (const key in classnamesMap) {
    const classname = composeClassname(key, classnamesMap[key])
    if (classname) {
      classnames.push(classname)
    }
  }

  return classnames
}
