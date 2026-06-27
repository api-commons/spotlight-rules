---
layout: rule
artifact: agent-skill
artifact_label: Agent Skill
slug: skill-has-examples-section
title: Skill Has Examples Section
severity: info
given: $
message: Skill body should have an "Examples" section.
description: A skill body should show concrete examples under an Examples
  section so agents and humans can see how it is meant to be invoked.
experience:
  - documentation
spec:
  - body
topic: []
owasp: []
reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-has-examples-section/
prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
  governance rule 'skill-has-examples-section' (Skill Has Examples Section).
  Requirement: A skill body should show concrete examples under an Examples
  section so agents and humans can see how it is meant to be invoked. Make the
  smallest change that satisfies the rule, leave all unrelated content, key
  order, comments, and formatting unchanged, and keep the document valid Agent
  Skill. Return only the complete corrected document, with no commentary."
builtin: false
ruleyaml: >
  skill-has-examples-section:
    title: Skill Has Examples Section
    reference: https://spotlight-rules.com/spec/rules/agent-skill/skill-has-examples-section/
    description: A skill body should show concrete examples under an Examples
      section so agents and humans can see how it is meant to be invoked.
    message: Skill body should have an "Examples" section.
    severity: info
    given: $
    then:
      function: headingPresent
      functionOptions:
        name: Examples
    tags:
      - format:agent-skill
      - spec:body
      - experience:documentation
    prompt: "You are editing an Agent Skill document to satisfy the Spotlight API
      governance rule 'skill-has-examples-section' (Skill Has Examples Section).
      Requirement: A skill body should show concrete examples under an Examples
      section so agents and humans can see how it is meant to be invoked. Make the
      smallest change that satisfies the rule, leave all unrelated content, key
      order, comments, and formatting unchanged, and keep the document valid Agent
      Skill. Return only the complete corrected document, with no commentary."
---
