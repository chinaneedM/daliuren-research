#!/usr/bin/env python3
"""Check state consistency. Limited chart-math tests run as a separate CI step."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REQUIRED = [
    "README.md", "docs/PROJECT-CHARTER-R1.md",
    "docs/PROJECT-CONTINUITY-PROTOCOL-R1.md",
    "docs/RESEARCH-ROADMAP-R1.md", "docs/SOFTWARE-ARCHITECTURE-R1.md",
    "docs/DIGITAL-SOURCE-POLICY-R1.md",
    "docs/PROJECT-CURRENT-STATE-R1.json",
    "docs/SOURCE-REGISTRY-R1.json", "docs/OPEN-QUESTIONS-R1.json",
    "study/SESSION-TEMPLATE-R1.md"
]

def load(path):
    with (ROOT / path).open(encoding="utf-8") as stream:
        return json.load(stream)

def verify():
    missing = [name for name in REQUIRED if not (ROOT / name).is_file()]
    assert not missing, "Missing files: " + repr(missing)
    state = load("docs/PROJECT-CURRENT-STATE-R1.json")
    sources = load("docs/SOURCE-REGISTRY-R1.json")
    issues = load("docs/OPEN-QUESTIONS-R1.json")
    assert state["repository"] == "chinaneedM/daliuren-research"
    assert state["default_branch"] == "main"
    assert "head_sha" not in state and "tree_sha" not in state
    for item in state["current_work_files"]:
        assert (ROOT / item).is_file(), "Missing work file: " + item
    ids = [item["id"] for item in issues["entries"]]
    assert len(ids) == len(set(ids)), "Duplicate issue identifiers"
    assert sorted(state["pending_issue_ids"]) == sorted(
        item["id"] for item in issues["entries"] if item["status"] == "OPEN"
    ), "Pending issue list is inconsistent"
    sids = [item["id"] for item in sources["entries"]]
    assert len(sids) == len(set(sids)), "Duplicate source identifiers"
    assert all(not item["full_text_stored"] for item in sources["entries"]), (
        "Unexpected modern full text status; review rights and update this gate first"
    )
    print("PASS: foundational records and semantic handoff are internally consistent.")
    print("NOTE: Only limited plate/four-lesson tests run separately; no full chart or divination validation.")

if __name__ == "__main__":
    verify()
