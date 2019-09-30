export function collectOptions(options) {
  const groups = []
  options.map(option => {
    const group_name = option.group.machine_name
    if (!groups[group_name]) {
      groups[group_name] = []
    }
    groups[group_name].push({
      id: option.id,
      name: option.name,
      value: option.value
    })
  })
  return groups
}