---
layout: rule
artifact: json-schema
artifact_label: JSON Schema
slug: property-require-description
title: Property Require Description
severity: info
given: $.properties[*]
message: description should be present
description: The `description` property of each property should be present.
experience:
  - documentation
  - data-modeling
spec:
  - properties
source: []
builtin: false
---
