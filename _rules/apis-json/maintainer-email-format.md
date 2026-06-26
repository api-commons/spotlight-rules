---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: maintainer-email-format
title: Maintainer Email Format
severity: info
given: $.maintainers[*].email
message: Maintainer email should be a valid email.
description: A maintainer email should be a valid email address.
experience:
  - consistency
spec:
  - maintainers
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/maintainer-email-format/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'maintainer-email-format' (Maintainer Email Format).
  Requirement: A maintainer email should be a valid email address. To fix:
  Ensure the targeted value matches the regular expression
  `^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$`; rewrite any value that does not. This rule
  is evaluated at the JSONPath `$.maintainers[*].email` — inspect every location
  it matches and correct only what violates the rule. Make the smallest change
  that satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid APIs.json. Return only the
  complete corrected document, with no commentary."
builtin: false
---
