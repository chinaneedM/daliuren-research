# 大六壬 · 共同研习、历史考据与软件构建

本仓库为**独立的长期大六壬工程**：由已学过大六壬的用户与助手共同重读、互相质疑和核验典籍与术理，把确认的起课规则逐步实现为可测试的软件，随后建立断课辅助、案例与历史传承研究。

## 已确认的工作方式

- 每门术数独立建库，不因未来融合而更改其他项目的规则。与[《天问》](https://github.com/chinaneedM/ziwei-bazi-model)可互相借鉴经过验证的通用代码，但当前不改其核心。
- 先整体框架、后深入细节；学术考据、现代解释、可重复的排盘规则、经验断课及案例反馈分开。
- 公开 GitHub、零付费优先；不向仓库公开上传无授权的现代书籍全文、校注、扫描件或个人占问信息。
- 用户现有实体书：北海闲人《六壬金针》、陈公献《大六壬指南》（华龄出版社版）。先寻找并核验合法在线文本和版本，尽量避免反复拍照。
- 历史研究覆盖典籍、版本、传承和规则变迁；相学、风水及其他术数均非当前开发范围。

## 工作入口

- [章程](docs/PROJECT-CHARTER-R1.md)
- [连续性协议](docs/PROJECT-CONTINUITY-PROTOCOL-R1.md)
- [当前状态](docs/PROJECT-CURRENT-STATE-R1.json)
- [研究路线](docs/RESEARCH-ROADMAP-R1.md)
- [架构约束](docs/SOFTWARE-ARCHITECTURE-R1.md)
- [来源登记](docs/SOURCE-REGISTRY-R1.json)
- [未决问题](docs/OPEN-QUESTIONS-R1.json)
- [版权与资料入库规范](docs/DIGITAL-SOURCE-POLICY-R1.md)
- [共同研习记录模板](study/SESSION-TEMPLATE-R1.md)

## 新对话续接

```text
继续《大六壬》项目。仓库 chinaneedM/daliuren-research。
按 docs/PROJECT-CONTINUITY-PROTOCOL-R1.md 启动，
以 GitHub 远端最新状态为唯一事实源，重新核验分支、HEAD/tree、最新提交、
Actions、当前状态和协议指定的工作文件，再推进最高优先级未决事项。
```

**当前仅有有限的确定性基础模块**：地盘/天盘位置和四课生成（非完整起课算法），测试见 [基础测试](tests/test_foundation.py)、[实现与证据边界](docs/SOFTWARE-IMPLEMENTATION-0001-PLATE-FOUR-LESSONS-R1.md)。三传、九宗门、天将、历法自动换算及断课等均未实现。共同研习下一个正文断点为《六壬金针》卷二p48，尚未取得原页。
