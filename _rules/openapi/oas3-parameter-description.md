---
layout: rule
artifact: openapi
artifact_label: OpenAPI
slug: oas3-parameter-description
title: Parameter Description
severity: warn
given: "#PathItem.parameters[?(@ && @.in)] | #OperationObject.parameters[?(@ &&
  @.in)] | $.components.parameters[?(@ && @.in)]"
message: ""
description: Parameter objects must have "description".
experience:
  - documentation
spec:
  - parameters
  - components
source: []
builtin: true
---
