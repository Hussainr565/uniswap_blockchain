import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'osvxgnn8',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'sk2V4g5HdtPFatdVdeOumCDkWDrIjfKyosOanwuDYHZzyG9f3msaeLAlQfymAgWEMsz1SqqhB2wtCcpuo1MhYAJwSPjQSYafTqVXdpn8eDrA4EZwwYOXNTL5VaJ9fXiiBYv7eTUbubfeVmJaSnlMtYZhyQnVbA10SKjsbhF80R3mWojNyGrz',
  useCdn: false,
})
