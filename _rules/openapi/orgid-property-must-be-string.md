---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: orgid-property-must-be-string
title: Orgid Property Must Be String
severity: error
given: $..[?(@property === "orgId")].type
message: ""
description: "orgId MUST use a data type of 'string'. It requires the targeted
  value to match the pattern `^string$` (evaluated at `$..[?(@property ===
  \"orgId\")].type`). Severity: error."
experience:
  - data-modeling
  - consistency
spec:
  - document
source:
  - sps-commerce
builtin: false
---
