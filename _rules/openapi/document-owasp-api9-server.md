---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: document-owasp-api9-server
title: Document OWASP API9 Server
severity: info
given: $
message: API should declare its servers (host/environment inventory).
description: The API should declare its servers so all hosts and environments
  are inventoried — undocumented or stray non-production hosts are a common
  inventory-management risk (OWASP API9).
experience:
  - security
  - governance
spec:
  - servers
topic: []
owasp:
  - api9
reference: https://spotlight-rules.com/spec/rules/openapi/document-owasp-api9-server/
prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
  governance rule 'document-owasp-api9-server' (Document OWASP API9 Server).
  Requirement: The API should declare its servers so all hosts and environments
  are inventoried — undocumented or stray non-production hosts are a common
  inventory-management risk (OWASP API9). To fix: Ensure `servers` is present
  and non-empty at each matching location. Make the smallest change that
  satisfies the rule, leave all unrelated content, key order, comments, and
  formatting unchanged, and keep the document valid OpenAPI. Return only the
  complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  document-owasp-api9-server:
    title: Document OWASP API9 Server
    reference: https://spotlight-rules.com/spec/rules/openapi/document-owasp-api9-server/
    description: The API should declare its servers so all hosts and environments
      are inventoried — undocumented or stray non-production hosts are a common
      inventory-management risk (OWASP API9).
    message: API should declare its servers (host/environment inventory).
    given: $
    severity: info
    then:
      field: servers
      function: truthy
    tags:
      - format:openapi
      - spec:servers
      - experience:security
      - experience:governance
      - owasp:api9
    prompt: "You are editing an OpenAPI document to satisfy the Spotlight API
      governance rule 'document-owasp-api9-server' (Document OWASP API9 Server).
      Requirement: The API should declare its servers so all hosts and
      environments are inventoried — undocumented or stray non-production hosts
      are a common inventory-management risk (OWASP API9). To fix: Ensure
      `servers` is present and non-empty at each matching location. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid
      OpenAPI. Return only the complete corrected document, with no commentary."
---
