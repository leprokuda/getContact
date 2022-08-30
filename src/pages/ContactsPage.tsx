import React from 'react'

import { useGetUsersQuery } from '../api/github.api'

const ContactsPage = () => {
  const {isLoading, isError, data} = useGetUsersQuery('aboba')


  return (
    <div>
      <input/>
      <input/>
    </div>
  )
}

export default ContactsPage