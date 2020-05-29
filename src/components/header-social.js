import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { social } = useSiteMetadata()

  return (
    <ul className="header-social">
      { social.map((mySocial) =>
        <li><a href={ mySocial.url }>
          <i className={ 'fa ' + mySocial.fa }></i>
        </a></li>
      )}
    </ul>
   )
}
