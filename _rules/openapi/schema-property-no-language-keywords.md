---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: schema-property-no-language-keywords
title: Schema Property No Language Keywords
severity: info
given: $..properties.*~
message: Names that may conflict with keywords in common programming languages
  SHOULD NOT be used.
description: Names that may conflict with keywords in common programming
  languages SHOULD NOT be used.
experience:
  - naming
  - consistency
spec:
  - schemas
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-no-language-keywords/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'schema-property-no-language-keywords' (Schema Property No
  Language Keywords). Requirement: Names that may conflict with keywords in
  common programming languages SHOULD NOT be used. To fix: Ensure the targeted
  value does NOT match the regular expression
  `^(abstract|for|new|switch|assert|default|goto|package|synchronized|boolean|d\
  o|if|private|this|break|double|implements|throw|byte|else|import|public|throw\
  s|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|fina\
  l|interface|static|void|class|finally|long|volatile|const|float|native|super|\
  while)$`; rename or rewrite any value that does. This rule is evaluated at the
  JSONPath `$..properties.*~` — inspect every location it matches and correct
  only what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid OpenAPI. Return only the complete corrected
  document, with no commentary."
builtin: false
ruleyaml: >
  schema-property-no-language-keywords:
    title: Schema Property No Language Keywords
    reference: https://spotlight-rules.com/spec/rules/openapi/schema-property-no-language-keywords/
    description: Names that may conflict with keywords in common programming
      languages SHOULD NOT be used.
    message: Names that may conflict with keywords in common programming languages
      SHOULD NOT be used.
    severity: info
    given: $..properties.*~
    then:
      function: pattern
      functionOptions:
        notMatch: ^(abstract|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|volatile|const|float|native|super|while)$
    tags:
      - format:openapi
      - spec:schemas
      - experience:naming
      - experience:consistency
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'schema-property-no-language-keywords' (Schema Property No
      Language Keywords). Requirement: Names that may conflict with keywords in
      common programming languages SHOULD NOT be used. To fix: Ensure the targeted
      value does NOT match the regular expression
      `^(abstract|for|new|switch|assert|default|goto|package|synchronized|boolean\
      |do|if|private|this|break|double|implements|throw|byte|else|import|public|t\
      hrows|case|enum|instanceof|return|transient|catch|extends|int|short|try|cha\
      r|final|interface|static|void|class|finally|long|volatile|const|float|nativ\
      e|super|while)$`; rename or rewrite any value that does. This rule is
      evaluated at the JSONPath `$..properties.*~` — inspect every location it
      matches and correct only what violates the rule. Make the smallest change
      that satisfies the rule, leave all unrelated content, key order, comments,
      and formatting unchanged, and keep the document valid OpenAPI. Return only
      the complete corrected document, with no commentary."
---
