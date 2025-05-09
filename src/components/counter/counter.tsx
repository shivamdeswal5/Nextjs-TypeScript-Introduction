'use client';
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '@/store/slice'

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
        <button onClick={() => {
            dispatch(decrement())}}>
            Decrement
        </button>
      {count}
      <button onClick={() => {
            dispatch(increment())}}>
            Increment
        </button>
    </div>
  )
}
