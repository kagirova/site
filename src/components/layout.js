import React from "react"
import {Helmet} from "react-helmet";

export default ({ children }) => (
  <div className="container">
    <Helmet>
      <title>
        Мария Кагирова
      </title>
      <meta name="description" content="Рисую, гончарю, создаю дизайн полиграфии" />
      <meta name="keywords" content="handmade ceramics,watercolor,design,акварель,керамика,дизайн,полиграфия" />
    </Helmet>
    {children}
  </div>
)
