---
layout: rule
artifact: apis-json
artifact_label: APIs.json
slug: api-require-aid
title: API Require Aid
severity: error
given: $.apis.*
message: APIs MUST have an aid property.
description: Every API should have a unique identifier, known as an AID (API
  Identifier). The APIs.json file, contract, or collection contains its own AID,
  which the API uses as part of its reference. Additionally, the API applies a
  slugified version of its name, resulting in a unique, human-readable
  identifier for the API.
experience:
  - discoverability
  - governance
spec:
  - apis
source: []
builtin: false
---
