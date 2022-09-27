import React from 'react';
import ListUsers from '../../components/ListUsers';
import Pagination from '../../components/Pagination';
import Profile from '../../components/Profile';

const Home = () => {

  return (
    <>
      <Profile />
      <ListUsers />
      <Pagination />
    </>
  )
}

export default Home