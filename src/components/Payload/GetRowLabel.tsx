'use client'
import React from 'react'
import { useRowLabel } from '@payloadcms/ui'

const GetRowLabel = () => {
  const path = useRowLabel<any>()
  return <span>{path.data.label}</span>
}

export default GetRowLabel
