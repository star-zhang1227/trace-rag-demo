const CASES=[
  {
    "id": 23,
    "dataset": "MuSiQue",
    "title": "世界杯最佳射手",
    "question": "In 2018, who scored the most goals in the competition that the FIFA Confederations Cups is considered a warm-up for?",
    "zh": "联合会杯所预热的赛事，在2018年的最佳射手是谁？",
    "gold": "Harry Kane",
    "rounds": [
      {
        "n": 1,
        "title": "图检索后仍缺少最佳射手信息",
        "route": "graph",
        "routeSource": "llm",
        "initial": "unknown",
        "judge": "unknown / unknown / unknown",
        "scores": "2.0 / 3.0 / 3.0",
        "votes": "unknown / unknown / unknown",
        "regen": "unknown",
        "normalized": "Insufficient information.",
        "verdict": "retrieve_more",
        "rawVerdict": "",
        "feedback": "现有上下文提到 2018 年世界杯，但没有提供最佳射手信息，需要补齐最后一跳。",
        "outcome": "continue_commendor_more_evidence",
        "evidence": "世界杯及各洲足球赛事的介绍",
        "nextQuery": "Who was the top scorer in the 2018 FIFA World Cup? The retriever is correct, but more specific information about the 2018 FIFA World Cup top scorer is needed. Second-hop anchors from previous evidence: FIFA World Cup, World Cup, FIFA, UEFA. Retrieve facts connected to these anchors that answer the original question.",
        "fields": [
          [
            "检索方式",
            "graph"
          ],
          [
            "路由来源",
            "llm"
          ],
          [
            "证据片段概述",
            "世界杯及各洲足球赛事的介绍"
          ],
          [
            "初始候选",
            "unknown"
          ],
          [
            "Judge 答案",
            "unknown / unknown / unknown"
          ],
          [
            "Judge 评分",
            "2.0 / 3.0 / 3.0"
          ],
          [
            "投票记录",
            "unknown / unknown / unknown"
          ],
          [
            "重生成结果",
            "unknown"
          ],
          [
            "送审规范化答案",
            "Insufficient information."
          ],
          [
            "Critic 判断",
            "retrieve_more"
          ],
          [
            "归因标签",
            "insufficient_evidence"
          ],
          [
            "本轮结束状态",
            "continue_commendor_more_evidence"
          ],
          [
            "下一轮检索方式",
            "hybrid"
          ]
        ],
        "evidenceTitle": "01 当前证据与缺口"
      },
      {
        "n": 2,
        "title": "混合检索后回答正确",
        "route": "hybrid",
        "routeSource": "bridge_override",
        "initial": "Harry Kane",
        "judge": "Harry Kane / Harry Kane / Harry Kane",
        "scores": "8.0 / 8.0 / 8.0",
        "votes": "Harry Kane / Harry Kane / Harry Kane",
        "regen": "Harry Kane",
        "normalized": "Harry Kane",
        "verdict": "pass",
        "rawVerdict": "",
        "feedback": "No action needed",
        "outcome": "stop_critic_pass",
        "evidence": "2018 FIFA World Cup 赛事介绍",
        "nextQuery": "",
        "fields": [
          [
            "检索方式",
            "hybrid"
          ],
          [
            "路由来源",
            "bridge_override"
          ],
          [
            "证据片段概述",
            "2018 FIFA World Cup 赛事介绍"
          ],
          [
            "初始候选",
            "Harry Kane"
          ],
          [
            "Judge 答案",
            "Harry Kane / Harry Kane / Harry Kane"
          ],
          [
            "Judge 评分",
            "8.0 / 8.0 / 8.0"
          ],
          [
            "投票记录",
            "Harry Kane / Harry Kane / Harry Kane"
          ],
          [
            "重生成结果",
            "Harry Kane"
          ],
          [
            "送审规范化答案",
            "Harry Kane"
          ],
          [
            "Critic 判断",
            "pass"
          ],
          [
            "Critic 反馈",
            "No action needed"
          ],
          [
            "本轮结束状态",
            "stop_critic_pass"
          ]
        ],
        "evidenceTitle": "01 当前证据与缺口"
      }
    ],
    "final": "Harry Kane",
    "correct": true
  },
  {
    "id": 139,
    "dataset": "PopQA",
    "title": "出生地纠错",
    "question": "In what city was James M. Bingham born?",
    "zh": "James M. Bingham出生在哪座城市？",
    "gold": "Perry / Town of Perry",
    "rounds": [
      {
        "n": 1,
        "title": "任职地点成为初始候选",
        "route": "graph",
        "routeSource": "llm",
        "initial": "Chippewa Falls, Wisconsin",
        "judge": "Chippewa Falls, Wisconsin / Chippewa Falls, Wisconsin / unknown",
        "scores": "7.0 / 7.0 / 7.0",
        "votes": "unknown / unknown / unknown",
        "regen": "The final answer is $\\boxed{unknown}$",
        "normalized": "Insufficient information.",
        "verdict": "revise",
        "rawVerdict": "",
        "feedback": "证据描述了政治经历和市长任职地点，但没有明确说明出生地，其他上下文也不相关。",
        "outcome": "continue_critic_iterate",
        "evidence": "人物政治经历，包括曾任 Chippewa Falls 市长；片段未说明出生地",
        "nextQuery": "birthplace of James M. Bingham Second-hop anchors from previous evidence: U.S, Arthur, Wisconsin, MD. Retrieve facts connected to these anchors that answer the original question.",
        "fields": [
          [
            "检索方式",
            "graph"
          ],
          [
            "路由来源",
            "llm"
          ],
          [
            "证据片段概述",
            "人物政治经历，包括曾任 Chippewa Falls 市长；片段未说明出生地"
          ],
          [
            "初始候选",
            "Chippewa Falls, Wisconsin"
          ],
          [
            "Judge 答案",
            "Chippewa Falls, Wisconsin / Chippewa Falls, Wisconsin / unknown"
          ],
          [
            "Judge 评分",
            "7.0 / 7.0 / 7.0"
          ],
          [
            "投票记录",
            "unknown / unknown / unknown"
          ],
          [
            "重生成结果",
            "The final answer is $\\boxed{unknown}$"
          ],
          [
            "送审规范化答案",
            "Insufficient information."
          ],
          [
            "Critic 判断",
            "revise"
          ],
          [
            "控制标签",
            "critic_iterate"
          ],
          [
            "本轮结束状态",
            "continue_critic_iterate"
          ],
          [
            "下一轮检索方式",
            "hybrid"
          ]
        ],
        "evidenceTitle": "01 当前证据与缺口"
      },
      {
        "n": 2,
        "title": "仍缺少出生地信息",
        "route": "hybrid",
        "routeSource": "bridge_override",
        "initial": "unknown",
        "judge": "unknown / unknown / unknown",
        "scores": "4.0 / 3.0 / 0.0",
        "votes": "unknown / unknown / unknown",
        "regen": "unknown",
        "normalized": "Insufficient information.",
        "verdict": "retrieve_more",
        "rawVerdict": "",
        "feedback": "上下文多次提到此人，但没有说明出生地，需要继续补充出生地点信息。",
        "outcome": "continue_commendor_more_evidence",
        "evidence": "同时出现 graph 和 text 来源，但可见内容仍主要是人物政治经历",
        "nextQuery": "Where was James M. Bingham born? The provided context mentions James M. Bingham multiple times but does not state his birthplace. More information about James M. Bingham's birth location is needed. Second-hop anchors from previous evidence: Wisconsin, February, Republican, Wisconsin State Assembly. Retrieve facts connected to these anchors that answer the original question.",
        "fields": [
          [
            "检索方式",
            "hybrid"
          ],
          [
            "路由来源",
            "bridge_override"
          ],
          [
            "证据片段概述",
            "同时出现 graph 和 text 来源，但可见内容仍主要是人物政治经历"
          ],
          [
            "初始候选",
            "unknown"
          ],
          [
            "Judge 答案",
            "unknown / unknown / unknown"
          ],
          [
            "Judge 评分",
            "4.0 / 3.0 / 0.0"
          ],
          [
            "投票记录",
            "unknown / unknown / unknown"
          ],
          [
            "重生成结果",
            "unknown"
          ],
          [
            "送审规范化答案",
            "Insufficient information."
          ],
          [
            "Critic 判断",
            "retrieve_more"
          ],
          [
            "归因标签",
            "insufficient_evidence"
          ],
          [
            "本轮结束状态",
            "continue_commendor_more_evidence"
          ]
        ],
        "evidenceTitle": "01 当前证据与缺口"
      },
      {
        "n": 3,
        "title": "得到出生地并规范化",
        "route": "hybrid",
        "routeSource": "bridge_override",
        "initial": "Perry, New York",
        "judge": "Perry, New York / Perry, New York / Perry, New York",
        "scores": "7.0 / 7.0 / 8.0",
        "votes": "Perry, New York / Perry, New York / Perry, New York",
        "regen": "Perry, New York",
        "normalized": "Perry",
        "verdict": "pass",
        "rawVerdict": "",
        "feedback": "No action needed",
        "outcome": "stop_critic_pass",
        "evidence": "得到出生地并规范化",
        "nextQuery": "",
        "fields": [
          [
            "检索方式",
            "hybrid"
          ],
          [
            "路由来源",
            "bridge_override"
          ],
          [
            "初始候选",
            "Perry, New York"
          ],
          [
            "Judge 答案",
            "Perry, New York / Perry, New York / Perry, New York"
          ],
          [
            "Judge 评分",
            "7.0 / 7.0 / 8.0"
          ],
          [
            "投票记录",
            "Perry, New York / Perry, New York / Perry, New York"
          ],
          [
            "重生成结果",
            "Perry, New York"
          ],
          [
            "送审规范化答案",
            "Perry"
          ],
          [
            "Critic 判断",
            "pass"
          ],
          [
            "Critic 反馈",
            "No action needed"
          ],
          [
            "本轮结束状态",
            "stop_critic_pass"
          ]
        ],
        "evidenceTitle": "01 本轮处理重点"
      }
    ],
    "final": "Perry",
    "correct": true
  },
  {
    "id": 137,
    "dataset": "MuSiQue",
    "title": "电视台与中间实体",
    "question": "What network first aired the show presenting Fabian Brandner?",
    "zh": "Fabian Brandner所在的电视剧最初由哪家电视台播出？",
    "gold": "Das Erste",
    "rounds": [
      {
        "n": 1,
        "title": "多个 Judge 一致给出中间实体",
        "route": "graph",
        "routeSource": "llm",
        "initial": "Verbotene Liebe",
        "judge": "三个均为 Verbotene Liebe (Forbidden Love)",
        "scores": "7.0 / 7.0 / 7.0",
        "votes": "三个均为 Verbotene Liebe (Forbidden Love)",
        "regen": "The final answer is $\\boxed{Network not mentioned in evidence}$",
        "normalized": "Insufficient information.",
        "verdict": "retrieve_more",
        "rawVerdict": "pass",
        "feedback": "",
        "outcome": "continue_pass_guard",
        "evidence": "Fabian Brandner 是 Verbotene Liebe 中的虚构角色，以及演员和出演时间",
        "nextQuery": "What network first aired the show presenting Fabian Brandner? Pass guard: answer is still insufficient on a multi-hop question. Second-hop anchors from previous evidence: January, Verbotene Liebe, Forbidden Love, Lahnstein. Retrieve facts connected to these anchors that answer the original question.",
        "fields": [
          [
            "检索方式",
            "graph"
          ],
          [
            "路由来源",
            "llm"
          ],
          [
            "证据片段概述",
            "Fabian Brandner 是 Verbotene Liebe 中的虚构角色，以及演员和出演时间"
          ],
          [
            "初始候选",
            "Verbotene Liebe"
          ],
          [
            "Judge 答案",
            "三个均为 Verbotene Liebe (Forbidden Love)"
          ],
          [
            "Judge 评分",
            "7.0 / 7.0 / 7.0"
          ],
          [
            "投票记录",
            "三个均为 Verbotene Liebe (Forbidden Love)"
          ],
          [
            "重生成结果",
            "The final answer is $\\boxed{Network not mentioned in evidence}$"
          ],
          [
            "送审规范化答案",
            "Insufficient information."
          ],
          [
            "原始 Critic 判断",
            "pass"
          ],
          [
            "保护规则覆盖后的判断",
            "retrieve_more"
          ],
          [
            "本轮结束状态",
            "continue_pass_guard"
          ]
        ],
        "evidenceTitle": "01 当前证据与缺口"
      },
      {
        "n": 2,
        "title": "得到真正需要的电视台名称",
        "route": "hybrid",
        "routeSource": "bridge_override",
        "initial": "Das Erste",
        "judge": "Das Erste / Das Erste / Das Erste",
        "scores": "8.0 / 8.0 / 8.0",
        "votes": "Das Erste / Das Erste / Das Erste",
        "regen": "Das Erste",
        "normalized": "Das Erste",
        "verdict": "pass",
        "rawVerdict": "",
        "feedback": "No action needed",
        "outcome": "stop_critic_pass",
        "evidence": "得到真正需要的电视台名称",
        "nextQuery": "",
        "fields": [
          [
            "检索方式",
            "hybrid"
          ],
          [
            "路由来源",
            "bridge_override"
          ],
          [
            "初始候选",
            "Das Erste"
          ],
          [
            "Judge 答案",
            "Das Erste / Das Erste / Das Erste"
          ],
          [
            "Judge 评分",
            "8.0 / 8.0 / 8.0"
          ],
          [
            "投票记录",
            "Das Erste / Das Erste / Das Erste"
          ],
          [
            "重生成结果",
            "Das Erste"
          ],
          [
            "送审规范化答案",
            "Das Erste"
          ],
          [
            "Critic 判断",
            "pass"
          ],
          [
            "Critic 反馈",
            "No action needed"
          ],
          [
            "本轮结束状态",
            "stop_critic_pass"
          ]
        ],
        "evidenceTitle": "01 本轮处理重点"
      }
    ],
    "final": "Das Erste",
    "correct": true
  },
  {
    "id": 167,
    "dataset": "MuSiQue",
    "title": "社区类型与规范化",
    "question": "What type of community is the municipality where Norbert Pfretzschner died, an instance of?",
    "zh": "Norbert Pfretzschner去世所在的市镇属于哪种社区类型？",
    "gold": "comune",
    "rounds": [
      {
        "n": 1,
        "title": "找到地点，未找到社区类型",
        "route": "graph",
        "routeSource": "llm",
        "initial": "unknown",
        "judge": "unknown / unknown / unknown",
        "scores": "0.0 / 0.0 / 2.0",
        "votes": "unknown / unknown / unknown",
        "regen": "unknown",
        "normalized": "Insufficient information.",
        "verdict": "retrieve_more",
        "rawVerdict": "",
        "feedback": "已知去世地点，但缺少该地社区类型，需要进一步检索。",
        "outcome": "continue_commendor_switch",
        "evidence": "生平提到去世地点 Lana an der Etsch，同时混入无关历史街区资料",
        "nextQuery": "What type of community is Lana an der Etsch? The selected retriever (graph) is appropriate, but the retrieved evidence is irrelevant. Consider using a text retriever to find information about Lana an der Etsch. Second-hop anchors from previous evidence: United States, B-5144, MLB, NBA. Retrieve facts connected to these anchors that answer the original question.",
        "fields": [
          [
            "检索方式及来源",
            "graph，llm"
          ],
          [
            "证据片段概述",
            "生平提到去世地点 Lana an der Etsch，同时混入无关历史街区资料"
          ],
          [
            "初始候选",
            "unknown"
          ],
          [
            "Judge 答案",
            "unknown / unknown / unknown"
          ],
          [
            "Judge 评分",
            "0.0 / 0.0 / 2.0"
          ],
          [
            "投票记录",
            "unknown / unknown / unknown"
          ],
          [
            "重生成结果",
            "unknown"
          ],
          [
            "送审规范化答案",
            "Insufficient information."
          ],
          [
            "Critic 判断",
            "retrieve_more"
          ],
          [
            "归因标签",
            "wrong_retriever"
          ],
          [
            "本轮结束状态",
            "continue_commendor_switch"
          ]
        ],
        "evidenceTitle": "01 当前证据与缺口"
      },
      {
        "n": 2,
        "title": "不同表述聚合并规范化",
        "route": "hybrid",
        "routeSource": "bridge_override",
        "initial": "municipality",
        "judge": "详见展开字段",
        "scores": "详见展开字段",
        "votes": "三个均为 a comune (municipality)",
        "regen": "a comune (municipality)",
        "normalized": "comune",
        "verdict": "pass",
        "rawVerdict": "",
        "feedback": "",
        "outcome": "stop_critic_pass",
        "evidence": "不同表述聚合并规范化",
        "nextQuery": "",
        "fields": [
          [
            "检索方式及来源",
            "hybrid，bridge_override"
          ],
          [
            "初始候选",
            "municipality"
          ],
          [
            "Judge 1 答案及评分",
            "a comune (municipality)，8.0"
          ],
          [
            "Judge 2 答案及评分",
            "municipality in Italy，8.0"
          ],
          [
            "Judge 3 答案及评分",
            "comune (municipality)，7.0"
          ],
          [
            "投票记录",
            "三个均为 a comune (municipality)"
          ],
          [
            "重生成结果",
            "a comune (municipality)"
          ],
          [
            "送审规范化答案",
            "comune"
          ],
          [
            "Critic 判断",
            "pass"
          ],
          [
            "本轮结束状态",
            "stop_critic_pass"
          ]
        ],
        "evidenceTitle": "01 本轮处理重点"
      }
    ],
    "final": "comune",
    "correct": true
  },
  {
    "id": 0,
    "dataset": "MuSiQue",
    "title": "错误放行的失败边界",
    "question": "Which network subsidiary broadcasts the weeknight evening news show in part named after the network that aired Crowd Rules?",
    "zh": "播出《Crowd Rules》的电视网所关联的晚间新闻节目，由哪家子公司播出？",
    "gold": "CNBC Asia",
    "rounds": [
      {
        "n": 1,
        "title": "错误电视网进入候选和下一轮查询",
        "route": "hybrid",
        "routeSource": "heuristic_override",
        "initial": "DuMont Television Network",
        "judge": "unknown / unknown / unknown",
        "scores": "3.0 / 4.0 / 3.0",
        "votes": "unknown / unknown / unknown",
        "regen": "unknown",
        "normalized": "Insufficient information.",
        "verdict": "retrieve_more",
        "rawVerdict": "",
        "feedback": "上下文涉及 CNBC，也涉及 DuMont Television Network 及其晚间新闻，但没有明确给出所问的子公司。",
        "outcome": "continue_critic_iterate",
        "evidence": "Crowd Rules 是为 CNBC 制作并首次播出的节目",
        "nextQuery": "Which network subsidiary broadcasts the weeknight evening news show named after the DuMont Television Network, and which network aired Crowd Rules? Second-hop anchors from previous evidence: CNBC, WHID, WPR, ET. Retrieve facts connected to these anchors that answer the original question.",
        "fields": [
          [
            "检索方式及来源",
            "hybrid，heuristic_override"
          ],
          [
            "证据片段概述",
            "Crowd Rules 是为 CNBC 制作并首次播出的节目"
          ],
          [
            "初始候选",
            "DuMont Television Network"
          ],
          [
            "Judge 答案",
            "unknown / unknown / unknown"
          ],
          [
            "Judge 评分",
            "3.0 / 4.0 / 3.0"
          ],
          [
            "投票记录",
            "unknown / unknown / unknown"
          ],
          [
            "重生成结果",
            "unknown"
          ],
          [
            "送审规范化答案",
            "Insufficient information."
          ],
          [
            "Critic 判断及置信度",
            "retrieve_more，0.1"
          ],
          [
            "本轮结束状态",
            "continue_critic_iterate"
          ]
        ],
        "evidenceTitle": "01 当前证据与缺口"
      },
      {
        "n": 2,
        "title": "原始 Critic 放行，被保护规则拦截",
        "route": "hybrid",
        "routeSource": "heuristic_override",
        "initial": "DuMont Television Network",
        "judge": "DuMont Television Network / DuMont Television Network / The DuMont Evening News",
        "scores": "7.0 / 7.0 / 7.0",
        "votes": "三个均为 DuMont Television Network",
        "regen": "DuMont Television Network",
        "normalized": "DuMont Television Network",
        "verdict": "retrieve_more",
        "rawVerdict": "pass",
        "feedback": "",
        "outcome": "continue_pass_guard",
        "evidence": "WHID 电台及 Wisconsin Public Radio 的资料",
        "nextQuery": "Which network subsidiary broadcasts the weeknight evening news show in part named after the network that aired Crowd Rules? Pass guard: answer matches a likely first-hop bridge entity on a bridge-style multi-hop question; retrieve the next-hop fact. Second-hop anchors from previous evidence: WPR, WHID, FM, ET. Retrieve facts connected to these anchors that answer the original question.",
        "fields": [
          [
            "检索方式及来源",
            "hybrid，heuristic_override"
          ],
          [
            "证据片段概述",
            "WHID 电台及 Wisconsin Public Radio 的资料"
          ],
          [
            "初始候选",
            "DuMont Television Network"
          ],
          [
            "Judge 答案",
            "DuMont Television Network / DuMont Television Network / The DuMont Evening News"
          ],
          [
            "Judge 评分",
            "7.0 / 7.0 / 7.0"
          ],
          [
            "投票记录",
            "三个均为 DuMont Television Network"
          ],
          [
            "重生成结果",
            "DuMont Television Network"
          ],
          [
            "送审规范化答案",
            "DuMont Television Network"
          ],
          [
            "原始 Critic 判断",
            "pass"
          ],
          [
            "保护规则覆盖后的判断",
            "retrieve_more"
          ],
          [
            "记录的 Critic 置信度",
            "0.5"
          ],
          [
            "本轮结束状态",
            "continue_pass_guard"
          ]
        ],
        "evidenceTitle": "01 当前证据与缺口"
      },
      {
        "n": 3,
        "title": "错误答案最终被放行",
        "route": "hybrid",
        "routeSource": "heuristic_override",
        "initial": "DuMont Television Network",
        "judge": "三个均为 DuMont Television Network",
        "scores": "7.0 / 7.0 / 7.0",
        "votes": "三个均为 DuMont Television Network",
        "regen": "DuMont Television Network",
        "normalized": "DuMont Television Network",
        "verdict": "pass",
        "rawVerdict": "",
        "feedback": "No action needed",
        "outcome": "stop_critic_pass",
        "evidence": "仍以 WHID、Wisconsin Public Radio 相关内容开头",
        "nextQuery": "",
        "fields": [
          [
            "检索方式及来源",
            "hybrid，heuristic_override"
          ],
          [
            "证据片段概述",
            "仍以 WHID、Wisconsin Public Radio 相关内容开头"
          ],
          [
            "初始候选",
            "DuMont Television Network"
          ],
          [
            "Judge 答案",
            "三个均为 DuMont Television Network"
          ],
          [
            "Judge 评分",
            "7.0 / 7.0 / 7.0"
          ],
          [
            "投票记录",
            "三个均为 DuMont Television Network"
          ],
          [
            "重生成结果",
            "DuMont Television Network"
          ],
          [
            "送审规范化答案",
            "DuMont Television Network"
          ],
          [
            "Critic 判断及置信度",
            "pass，1.0"
          ],
          [
            "Critic 反馈",
            "No action needed"
          ],
          [
            "本轮结束状态",
            "stop_critic_pass"
          ]
        ],
        "evidenceTitle": "01 当前证据与缺口"
      }
    ],
    "final": "DuMont Television Network",
    "correct": false
  }
];
