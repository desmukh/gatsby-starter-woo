import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { useSiteMetadata } from "../hooks/use-site-metadata"


export default () => {
  const { social } = useSiteMetadata()
  library.add(fab)

  return (
    <ul className="header-social">
      { social.map((mySocial) =>
        <li><a href={ mySocial.url }>
          <FontAwesomeIcon icon={['fab', mySocial.fa ]} />
        </a></li>
      )}
    </ul>
   )
}
