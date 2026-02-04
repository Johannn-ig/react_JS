import React from 'react'
import Section1 from './components/Page1/Section1'
import Section2 from './components/Page2/Section2'

const App = () => {
  const data = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Prime customers, that have access to bank credit and are satisfied with he current product',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1581668181500-08c6a6e006f7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Prime customer, that have access to bank credit and are not satisfied with the current service',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1545184180-25d471fe75eb?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Customer from near -prime and sub-prime segments with no access to bank credit',
      tag: 'Underbanked'
    }
  ]

  return (
    <>
      <Section1 data={data}/>
      <Section2 />
    </>
  )
}

export default App