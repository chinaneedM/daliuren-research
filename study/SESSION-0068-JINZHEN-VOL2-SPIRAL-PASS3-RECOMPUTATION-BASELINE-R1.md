# SESSION-0068｜卷二第三轮独立复算基线 R1
2026-11-26。以卷一既有原页研究档案及远端 foundation.py / tests/test_foundation.py、SESSION-0051、卷二第二轮总结为依赖；本轮没有重新打开私人原页，第三轮实际原页覆盖仍0/59，双方讨论仍p105框架。研究脚本非生产代码、非历史版本裁决、非断课效验。运行同一函数在JS工具内完成；可用 Node 执行 `node study/research/vol2-pass3-baseline-r1.js` 重现。生产Python八项测试未在本轮本地执行；启动HEAD对应Actions成功，不能替代新提交CI。
 
## 分流与证据边界
60合法干支日×12相对位移=720；普通非0/6共600。四课第一下位五行取日干而非寄宫，空间判重用寄宫来源。先伏吟特例；其余先课内贼克、比用、孟仲季；返吟无克先于遥克；两课无克八专排除遥克；其余遥克、四课全昴星、三课别责。柔日别责日支+4、四组驿马、贵人古歌全表均是按既有记录与通行补足的研究候选；不声称全部原页逐项重见，尤其其余贵人起点只检查一致性非独立文献验证。遇全不比/同层并列不强定初传。遥克多候选先比用，不预设额外涉害；实际11例均比用唯一。p43课序补充适用于戊辰D7的候选路径，仍与严格核心分开。伏吟自刑先换中传来源，再看中传自刑取冲。 
- 普通课内克494，其中单候选337、比用81、孟仲季70、全不比5、同层并列1；严格唯一488。返吟有克54，其中全不比2；另返吟无克6。伏吟60、蒿矢40、弹射25、昴星16、别责9、八专无克16。共712/720得到研究候选三传，8个留空（不是全部书内法已无歧义）。
- 旧 SESSION-0064 的493个普通唯一发用范围可由全不比时回退全候选孟仲季、且排除仍并列者得到：493；严格不采用未裁定回退仅488。旧批未显式声明回退，故不能将其493误当严格已裁定范围；暂保留旧统计并标为候选口径，后续重算鬼脱生等相关派生统计。返吟两全不比即使回退仍需核实同层取法。
- 16八专无克中7有遥克候选，错误地先遥克会改初传。归一课数/上神去重/书面组合三种统计分列：50个归一三课却书面四课，不能用裸文字判重。详运行输出。
- 三传普通递取相邻旬空/落空依赖无反例；不推广到特殊非连续传。8640个合法干支日×将时组合为抽象输入，贵人按占时昼夜与其所在固定地盘宫决定顺逆，检查全盘双射、贵人天空对冲；p34丁亥及p47甲午两已登记例校核。12个三传向量及3个四课向量通过（己丑D4为旧疑例的候选复算，不是作者原印正确）。不视为真实历法时刻或占验样本。
 
## 可复现运行结果
```json
{
  "counts": {
    "fuyin": 60,
    "direct": 494,
    "fanyin_direct": 54,
    "yaoke_haoshi": 40,
    "bieze": 9,
    "yaoke_danshe": 25,
    "maoxing": 16,
    "fanyin_no_direct": 6,
    "bazhuan": 16
  },
  "sizes": {
    "2/2/3": 115,
    "4/4/4": 500,
    "3/3/4": 50,
    "3/3/3": 50,
    "1/1/2": 5
  },
  "direct": {
    "single": 337,
    "parity": 81,
    "no_parity": 5,
    "mengzhongji": 70,
    "rank_tie": 1
  },
  "amb": [
    {
      "date": "丁卯",
      "d": 1,
      "branch": "direct",
      "stage": "no_parity",
      "lessons": "申酉辰巳",
      "trans": null,
      "voids": "戌亥",
      "norm": 4,
      "upper": 4,
      "written": 4,
      "candidates": [
        "申",
        "辰"
      ]
    },
    {
      "date": "戊辰",
      "d": 6,
      "branch": "fanyin_direct",
      "stage": "no_parity",
      "lessons": "亥巳戌辰",
      "trans": null,
      "voids": "戌亥",
      "norm": 4,
      "upper": 4,
      "written": 4,
      "candidates": [
        "亥",
        "巳"
      ]
    },
    {
      "date": "戊辰",
      "d": 7,
      "branch": "direct",
      "stage": "rank_tie",
      "lessons": "子未亥午",
      "trans": null,
      "voids": "戌亥",
      "norm": 4,
      "upper": 4,
      "written": 4,
      "candidates": [
        "子",
        "午"
      ]
    },
    {
      "date": "癸酉",
      "d": 9,
      "branch": "direct",
      "stage": "no_parity",
      "lessons": "戌未午卯",
      "trans": null,
      "voids": "戌亥",
      "norm": 4,
      "upper": 4,
      "written": 4,
      "candidates": [
        "戌",
        "午"
      ]
    },
    {
      "date": "戊戌",
      "d": 6,
      "branch": "fanyin_direct",
      "stage": "no_parity",
      "lessons": "亥巳辰戌",
      "trans": null,
      "voids": "辰巳",
      "norm": 4,
      "upper": 4,
      "written": 4,
      "candidates": [
        "亥",
        "巳"
      ]
    },
    {
      "date": "壬子",
      "d": 8,
      "branch": "direct",
      "stage": "no_parity",
      "lessons": "未卯申辰",
      "trans": null,
      "voids": "寅卯",
      "norm": 4,
      "upper": 4,
      "written": 4,
      "candidates": [
        "未",
        "卯"
      ]
    },
    {
      "date": "乙卯",
      "d": 7,
      "branch": "direct",
      "stage": "no_parity",
      "lessons": "亥午戌巳",
      "trans": null,
      "voids": "子丑",
      "norm": 4,
      "upper": 4,
      "written": 4,
      "candidates": [
        "午",
        "戌"
      ]
    },
    {
      "date": "壬戌",
      "d": 8,
      "branch": "direct",
      "stage": "no_parity",
      "lessons": "未卯午寅",
      "trans": null,
      "voids": "子丑",
      "norm": 4,
      "upper": 4,
      "written": 4,
      "candidates": [
        "未",
        "卯"
      ]
    }
  ],
  "fallback": [
    {
      "date": "丁卯",
      "d": 1,
      "candidates": [
        "辰"
      ]
    },
    {
      "date": "戊辰",
      "d": 6,
      "candidates": [
        "亥",
        "巳"
      ]
    },
    {
      "date": "癸酉",
      "d": 9,
      "candidates": [
        "午"
      ]
    },
    {
      "date": "戊戌",
      "d": 6,
      "candidates": [
        "亥",
        "巳"
      ]
    },
    {
      "date": "壬子",
      "d": 8,
      "candidates": [
        "未"
      ]
    },
    {
      "date": "乙卯",
      "d": 7,
      "candidates": [
        "午"
      ]
    },
    {
      "date": "壬戌",
      "d": 8,
      "candidates": [
        "未"
      ]
    }
  ],
  "remoteMulti": [
    {
      "date": "庚午",
      "d": 11,
      "stage": "parity"
    },
    {
      "date": "辛未",
      "d": 11,
      "stage": "parity"
    },
    {
      "date": "丙子",
      "d": 8,
      "stage": "parity"
    },
    {
      "date": "庚辰",
      "d": 1,
      "stage": "parity"
    },
    {
      "date": "癸未",
      "d": 11,
      "stage": "parity"
    },
    {
      "date": "壬辰",
      "d": 3,
      "stage": "parity"
    },
    {
      "date": "乙未",
      "d": 1,
      "stage": "parity"
    },
    {
      "date": "乙巳",
      "d": 8,
      "stage": "parity"
    },
    {
      "date": "丙午",
      "d": 9,
      "stage": "parity"
    },
    {
      "date": "壬子",
      "d": 3,
      "stage": "parity"
    },
    {
      "date": "壬戌",
      "d": 3,
      "stage": "parity"
    }
  ],
  "eightExcluded": [
    {
      "date": "甲寅",
      "d": 4,
      "ys": [],
      "ds": [
        "戌"
      ]
    },
    {
      "date": "甲寅",
      "d": 9,
      "ys": [
        "申"
      ],
      "ds": []
    },
    {
      "date": "己未",
      "d": 2,
      "ys": [],
      "ds": [
        "亥"
      ]
    },
    {
      "date": "己未",
      "d": 10,
      "ys": [
        "卯"
      ],
      "ds": []
    },
    {
      "date": "庚申",
      "d": 3,
      "ys": [],
      "ds": [
        "寅"
      ]
    },
    {
      "date": "庚申",
      "d": 5,
      "ys": [
        "午"
      ],
      "ds": []
    },
    {
      "date": "庚申",
      "d": 11,
      "ys": [
        "午"
      ],
      "ds": []
    }
  ],
  "cases": {
    "戊申/1": "戌酉午",
    "丁丑/9": "子辰戌",
    "辛丑/3": "巳丑丑",
    "庚申/3": "丑亥亥",
    "己未/10": "丑巳巳",
    "乙未/0": "辰未丑",
    "乙酉/0": "辰酉卯",
    "壬辰/0": "亥辰戌",
    "辛未/6": "巳丑辰",
    "己丑/4": "酉丑巳",
    "甲午/3": "申亥寅",
    "戊午/1": "寅午午"
  },
  "resolved": 712,
  "generalInputs": 8640,
  "voidChainFailures": 0,
  "ordinaryStrict": 488,
  "ordinaryWithFallback": 493
}
```
 
## NEXT
优先回看私人原页p48–59的条件与课例，第三轮逐页覆盖从0开始；核对每例原给输入和书图，记录缺失，重点检验全不比回退及p43同层优先证据，必要时复核卷一原页，不凭摘要宣称新页覆盖。原书p107以后待提供。无生产代码改动、无原书照片、无效验结论。
