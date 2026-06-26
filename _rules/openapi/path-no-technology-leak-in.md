---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: path-no-technology-leak-in
title: Path No Technology Leak In
severity: info
given: $.paths.*~
message: A resource MUST NOT leak or expose format or technology-specific
  information at any point in the path.
description: A resource MUST NOT leak or expose format or technology-specific
  information at any point in the path.
experience:
  - security
  - naming
spec:
  - paths
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/openapi/path-no-technology-leak-in/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'path-no-technology-leak-in' (Path No Technology Leak In).
  Requirement: A resource MUST NOT leak or expose format or technology-specific
  information at any point in the path. To fix: Ensure the targeted value does
  NOT match the regular expression `(.php|.asp|.jsp|.cgi|.psp|.json|.xml)`;
  rename or rewrite any value that does. This rule is evaluated at the JSONPath
  `$.paths.*~` — inspect every location it matches and correct only what
  violates the rule. Make the smallest change that satisfies the rule, leave all
  unrelated content, key order, comments, and formatting unchanged, and keep the
  document valid OpenAPI. Return only the complete corrected document, with no
  commentary."
builtin: false
---
