---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: property-no-language-keywords
title: Property No Language Keywords
severity: warn
given: $..properties.*~
message: ""
description: "Names that may conflict with keywords in common programming
  languages SHOULD NOT be used. It requires the targeted value not to match
  `^(abstract|for|new|switch|assert|default|goto|package|synchronized|boolean|d\
  o|if|private|this|break|double|implements|throw|byte|else|import|public|throw\
  s|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|fina\
  l|interface|static|void|class|finally|long|volatile|const|float|native|super|\
  while)$` (evaluated at `$..properties.*~`). Severity: warn."
experience:
  - naming
  - consistency
spec:
  - schemas
source:
  - sps-commerce
builtin: false
---
