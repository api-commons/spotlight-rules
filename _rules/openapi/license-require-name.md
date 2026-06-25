---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: license-require-name
title: License Require Name
severity: error
given: $.info.license
message: Info License MUST Have Name
description: "The license object should include a name property identifying the
  license type, such as Apache 2.0, MIT, or a proprietary license. It requires
  the `name` field to be present and non-empty (evaluated at `$.info.license`).
  Severity: error."
experience:
  - governance
  - documentation
spec:
  - info
source:
  - api-evangelist
builtin: false
---
