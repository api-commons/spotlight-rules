---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: document-require-maintainer
title: Document Require Maintainer
severity: info
given: $
message: Missing `maintainers`.
description: apis-json document should declare a `maintainers` property.
experience:
  - governance
  - discoverability
spec:
  - document
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-maintainer/
prompt: "You are editing an APIs.json document to satisfy the Spotlight API
  governance rule 'document-require-maintainer' (Document Require Maintainer).
  Requirement: apis-json document should declare a `maintainers` property. To
  fix: Ensure `maintainers` is present and non-empty at each matching location.
  Guidance: Missing `maintainers`. Make the smallest change that satisfies the
  rule, leave all unrelated content, key order, comments, and formatting
  unchanged, and keep the document valid APIs.json. Return only the complete
  corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-require-maintainer:
    title: Document Require Maintainer
    reference: https://spotlight-rules.com/spec/rules/apis-json/document-require-maintainer/
    description: apis-json document should declare a `maintainers` property.
    message: Missing `maintainers`.
    given: $
    severity: info
    then:
      field: maintainers
      function: truthy
    tags:
      - format:apis-json
      - spec:document
      - experience:governance
      - experience:discoverability
    prompt: "You are editing an APIs.json document to satisfy the Spotlight API
      governance rule 'document-require-maintainer' (Document Require Maintainer).
      Requirement: apis-json document should declare a `maintainers` property. To
      fix: Ensure `maintainers` is present and non-empty at each matching
      location. Guidance: Missing `maintainers`. Make the smallest change that
      satisfies the rule, leave all unrelated content, key order, comments, and
      formatting unchanged, and keep the document valid APIs.json. Return only the
      complete corrected document, with no commentary."
---
