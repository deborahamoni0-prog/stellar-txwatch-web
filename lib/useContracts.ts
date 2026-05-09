'use client'

import { useEffect, useState, useCallback } from 'react'
import { WatchedContract } from '@/types'
import { getContracts, saveContract, deleteContract } from '@/lib/storage'

export function useContracts() {
  const [contracts, setContracts] = useState<WatchedContract[]>([])

  const refresh = useCallback(() => {
    setContracts(getContracts())
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  function add(contract: WatchedContract) {
    saveContract(contract)
    refresh()
  }

  function remove(id: string) {
    deleteContract(id)
    refresh()
  }

  function update(contract: WatchedContract) {
    saveContract(contract)
    refresh()
  }

  return { contracts, add, remove, update, refresh }
}
