---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-include-contact
title: API Include Contact
severity: info
given: $.apis.*
message: API COULD have a contact.
description: The contact object in an APIs.json file allows for associating a
  vCard that represents an individual or organizational entity. It includes
  common contact information such as a name, email, or other references,
  offering a standardized method for providing support for an API.
experience:
  - discoverability
  - documentation
spec:
  - apis
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/api-include-contact/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'api-include-contact' (API Include Contact). Requirement: The
  contact object in an APIs.json file allows for associating a vCard that
  represents an individual or organizational entity. It includes common contact
  information such as a name, email, or other references, offering a
  standardized method for providing support for an API. To fix: Ensure `contact`
  is present and non-empty at each matching location. This rule is evaluated at
  the JSONPath `$.apis.*` — inspect every location it matches and correct only
  what violates the rule. Make the smallest change that satisfies the rule,
  leave all unrelated content, key order, comments, and formatting unchanged,
  and keep the document valid APIs.json. Return only the complete corrected
  document, with no commentary."
builtin: false
---
