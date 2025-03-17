import Link from 'next/link'
import React from 'react'

const ListItem = ({href,title}:{href:string,title:string}) => {
  return (
    <Link href={href} >
    {title}
    </Link>
  )
}

export default ListItem