# 大六壬项目连续性协议 R1

## 事实源

**GitHub 远端最新状态为唯一项目进度事实源**，旧聊天和记忆只能作为线索。仓库：`chinaneedM/daliuren-research`，当前默认开发分支 `main`；如之后调整，必须在仓库协议和状态中明确更新。

## 每次对话启动强制步骤

1. 读取远端仓库元数据、当前分支及实时 HEAD SHA、tree SHA。
2. 读取近期提交、未合并 PR、Actions；精确比对 Actions 的 `head_sha` 与实时 HEAD。未运行、无权限、部分检查或失败均不得称“完整验收通过”。
3. 读取本协议及 `docs/PROJECT-CURRENT-STATE-R1.json`。
4. 读取 `docs/PROJECT-CHARTER-R1.md`、`docs/RESEARCH-ROADMAP-R1.md`、`docs/SOFTWARE-ARCHITECTURE-R1.md` 和 `docs/DIGITAL-SOURCE-POLICY-R1.md`。
5. 读取 `docs/SOURCE-REGISTRY-R1.json`、`docs/OPEN-QUESTIONS-R1.json` 以及当前状态指定的工作文件。
6. 与远端最近提交交叉检查未记录的新进展，发现矛盾先核查，之后从最高优先级未完成事项继续；受限事项不应无限期阻塞其他主线。

## 共同研习主线（2026-11-18明确）

用户意图是双方**逐章、逐段完整学完《六壬金针》**：一面让已有大六壬基础的用户深化理解，一面让项目逐步累积完整、可复核的术理知识，为《天问》和未来其他独立术数的研究**方法**积累经验。绝不能将该目的缩减为“只研究足以写排盘软件的核心知识点”。每次先恢复**当前读到的原书页码/段落/未决疑问**；不擅自跳过基础段落；论证深浅视争议而定，不使单点考据无限阻断整书学习。逐段私有笔记与公开研究摘要分开，现代著作全文和用户手写笔记不提交公开仓库。术数之间只复用可检验的通用方法或程序基础，不混用不同传统的术理。

## 按卷循环复读（2026-11-24 读者确认）

每完成一整卷共同研习，须依 `docs/JOINT-STUDY-METHOD-R1.md` 的按卷循环复读规范重新审读原页，结合新学知识审查旧结论、条件、反例、课例计算及跨章关系；整书完成后再作全书综合复审。独立复读与双方共同学习进度分开，记录真实可访问范围，不以旧笔记代替原书，不把未经验证的新假说视为古法。复读不无限阻塞顺序研习。

## 研究边界

- 先学科广度和总体框架，后做个别版本的深度辨字；保留旧深度工作，避免重复采集。
- 所有来源明确区分作品、作者、版本、实物、数字影像、目录、OCR、网络文本和现代解释；目录和 OCR 不得直接裁决原字。
- 文本不同不必等于术理不同；术语相同也不必为同一算法。断法候选按书和流派独立记录。
- 不拿计算结果反推残缺古籍原字；不以相关性推断历史继承关系。
- 软件起课核心、断课解释层、历史考据层、经验验证层分开；跨项目代码复用必须另行测试。
- 网络可下载 ≠ 有权在公开仓库再发布；未经许可的现代书籍不存全文，保存合法链接、书目与独立整理的研究成果。
- 无用户明确批准，不付款、不使用付费云计算、不改安全凭证和账号管理设置。

## 正向记录与纠错

重大研究批次应登记来源和访问限制、已核实事实、候选与未决、测试、下一步，并同步状态 JSON、来源和问题台账；旧错误用带理由的追加勘误，不静默消除历史。CI 仅能证明其覆盖范围内的检查通过，不能代替原典核验或断课验证。

`docs/PROJECT-CURRENT-STATE-R1.json` **不得存储声称为当前 HEAD 的固定 SHA**，因为任何状态提交都会改变 HEAD；动态 SHA 必须在每次会话开始时现场读取。

## 中断恢复

以远端提交、状态、来源登记、问题台账和确切工作文件重建项目。未提交的聊天推理不算完成。禁止根据旧对话的 SHA 直接在远端写入。

## 固定新对话语句

```text
继续《大六壬》项目。仓库 chinaneedM/daliuren-research。
按 docs/PROJECT-CONTINUITY-PROTOCOL-R1.md 启动，以 GitHub 远端最新状态为唯一事实源。
重新读取远端 HEAD、tree、最新提交、Actions、docs/PROJECT-CURRENT-STATE-R1.json
及协议指定的工作文件，然后从最高优先级未完成事项继续推进。
```

## 2026-11-24 — Compact restart and layered recovery (R1 compatible, user-authorized)

The repository remains the sole authoritative project state; a new chat, model upgrade or context cutoff does not alter it. The canonical short restart is sufficient. This section supersedes earlier startup wording **only for loading/presentation of context and redundant retrieval**, not project goals, evidence standards, verification gates, source access/copyright rules, scope, approval requirements or publication safety.

1. Resolve the named repository and its configured work branch from fresh remote metadata; pin reads to the newly discovered HEAD/tree. Inspect recent commits and relevant open PRs (including their base/head and unresolved status), exact-HEAD Actions with pagination when needed, and changes since the recorded substantive milestone. Do not confuse another branch's CI, queued checks, or chat recollection with accepted work. Recover failed/incomplete publication before proceeding where material. A stale or contradictory state is a reason to reconcile, not guess.
2. Read this protocol, the designated authoritative state and current governing policies. Recover objectives, invariants, active work, next deliverable, unresolved blockers and required source/acceptance gates. Large JSON/MD and archives may be read, parsed, searched and cross-checked **in the tool layer**, exposing only the exact fields/sections material to the current decision; a path listing, a truncated response, or an empty file read is not evidence that file content was read. Retrieve exact Git blobs or a clean exact-HEAD checkout when ordinary reads fail. Preserve provenance and verify completeness of any claim that requires exhaustive coverage. Never assume an omitted detail is absent.
3. Resolve all required current paths against the live tree; load the relevant current evidence, latest handoff, tests and dependencies. Historical completed files remain available and are opened on demand, not all injected into model context each restart. Expand to the full source or broader archive when a conflict, change, omission risk, unknown dependency or user request makes it necessary. Required risk/CI/evidence audits still apply; optimize execution and output, not truth criteria.
4. Execute the highest material unfinished task directly; don't spend the session re-summarizing history or creating duplicate handoff documents. Use compact status reporting. Respect current user priority and project scope. Reuse existing indices/tools and avoid speculative complexity.
5. At each meaningful work-unit boundary, preserve the actual result, source/evidence references, correction history, remaining gaps and concrete NEXT in existing canonical state/batch files, commit safely and verify remote publication/CI as required. A long task may use an early durable checkpoint; unfinished work must be explicitly marked. Keep summaries distinct from source evidence. Do not depend on a final chat summary being possible near the context limit. On interruption, reconstruct from the remote rather than asserting uncommitted chat work. Any optimization or model upgrade is permission to improve analysis, not to bypass rules or change previously accepted project scope.

Do not add a second competing state database or cache a claimed live HEAD in a committed state file. If access or verification is incomplete, state the precise boundary and continue only safe, non-conflicting work. Recheck the branch before writing; use non-destructive updates.

### 大六壬 adaptation
Always recover `docs/PROJECT-CURRENT-STATE-R1.json` (including distinct joint-reading and assistant-review frontiers), `docs/JOINT-STUDY-METHOD-R1.md`, `docs/LONG-TERM-RESEARCH-VISION-R1.md`, charter, roadmap, architecture, digital-source policy, source registry and open-questions ledger. Resolve every `current_work_files` entry against the pinned tree. That growing list includes historical sessions and code; it is an inventory, not an instruction to emit all prior sessions in each conversation. Read the current page/section's sessions, recent follow-ups, applicable open issues and original private printed pages for new reading; retrieve older notes/code when relevant. Continue full-page/condition coverage, end-of-volume spiral review, independent correction and evidence separation. Do not infer private original-page access from a repository summary. No change to book frontier or software scope.

Canonical restart:
```text
继续《大六壬》项目：chinaneedM/daliuren-research，main。按 docs/PROJECT-CONTINUITY-PROTOCOL-R1.md 的远端最新规范恢复并继续推进。
```


## 2026-11-26 三层循环研习细化（读者确认）

依 `docs/JOINT-STUDY-METHOD-R1.md` 的“三层循环研习与掌握门槛”执行：小节完整初读与即时复核（通常1—2轮）；整卷共同学习完成后系统复读（累计4—5轮为参考）；整书完成后综合复审；重大问题随时专项研究。次数不是硬性验收或预测准确率指标。真实原页覆盖、双方讨论、课例复算、术理掌握、文献与效验分别记录；保留未决问题，不阻塞不依赖该问题的顺序学习。此补充不改变精简启动语、研究范围、来源约束及软件边界。
