const requests = []
export const path = ''
export const isServer = typeof window == 'undefined' 

// Grab all request to preload
export function handleRequest(request) {
  requests.push(request)
}

export async function collectPreloadedState() {
  if (isServer) {
    await Promise.all(requests)
  }
}
