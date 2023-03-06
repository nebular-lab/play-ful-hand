---
to: <%= path %>/index.tsx
---
import { FC } from 'react';
<% if (have_props) { -%>

export type <%= name%>Props = {};
<% } -%>

export const <%= name%>: <%- type_annotate %> = <%= props %> => {
  return (
    <></>
  );
};