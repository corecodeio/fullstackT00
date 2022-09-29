import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getList, getListAsync } from './../store/listSlice';

const NotFound = () => {
  const dispatch = useDispatch();
  const { listUser, num } = useSelector(state => state.list);
  const { login } = useSelector(state => state.auth);
  return (
    <>
      <p> {`${login} `}</p>
      <p>{num}</p>
      {listUser.map((user, index) => {
        return <p key={index}>{user.email}</p>
      })}
      <button onClick={() => {
        dispatch(getList())
      }}>get list</button>
      <button onClick={() => {
        dispatch(getListAsync(2))
      }}>get list async</button>
    </>
  )
}

export default NotFound