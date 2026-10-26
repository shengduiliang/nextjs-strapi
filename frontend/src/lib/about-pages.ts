export type CareerJob = {
  title: string;
  responsibilities: readonly string[];
  requirements: readonly string[];
  email: string;
  phone: string;
};

export const careerPageContent = {
  title: "人才招募",
  subtitle: "发送邮件，投递简历，开启您和荣芯的故事",
  resumeTip:
    "支持jpg、jpeg、png、gif、doc、ppt、pptx、docx、xls、xlsx、zip、rar、7z、gz格式文件上传，最大不超过10MB",
  moreJobsLabel: "更多职位招聘信息",
  jobs: [
    {
      title: "固件（软件）工程师",
      responsibilities: [
        "负责公司智能可穿戴IC产品的固件开发、FPGA验证、测试验证平台、DEMO板、参考设计、量产治具等软件开发工作。",
        "持续跟进智能可穿戴产品传感器领域业界最新产品的发展动态，分析基础原理和主流工程方案，掌握技术细节，为公司新产品定位提供科学合理且具有前瞻性的分析和建议。",
      ],
      requirements: [
        "具备扎实的软、硬件专业知识和工程实现能力，扎实的C、C++语言代码开发能力。熟悉ARM系列常用MCU。",
        "具有可穿戴设备传感器的软件测试和开发工作经验。",
        "有上位机及小程序APP开发经验更佳。",
        "对待未知领域和新知识有积极学习的意愿，有良好的团队合作精神与沟通能力，有较强的动手解决问题的能力。",
      ],
      email: "XXXXX@glorysemi.com",
      phone: "000-00000000",
    },
    {
      title: "IC验证工程师",
      responsibilities: [
        "能够从0-1搭建UVM验证平台，并能独立处理验证环节中遇到的技术问题。",
        "与IC设计工程师和系统工程师密切合作，负责IC设计项目相关验证方案的制定、执行，以及验证结果的汇报、评审；",
        "使用Verilog、System Verilog、Python、Tcl、UVM/OVM等语言/工具开发验证平台，高效率的完成芯片的功能、性能验证和Debug工作，使设计满足Tape Out需求；",
        "执行验证工作，对IC设计项目的验证进度和验证质量负责。",
      ],
      requirements: [
        "3年以上IP或 SOC验证经验；",
        "具有扎实的IC验证基础，熟悉IC设计的验证环境和流程，掌握NC-Sim/VCS等相关验证工具，掌握一种或多种验证语言；",
        "具有良好的沟通能力、协调能力以及团队合作意识；",
        "细心、踏实、责任心强。",
      ],
      email: "XXXXX@glorysemi.com",
      phone: "000-00000000",
    },
  ] as const satisfies readonly CareerJob[],
} as const;

export const contactPageContent = {
  company: "深圳市荣芯半导体有限公司",
  address: "深圳市宝安区新安街道海滨社区N26区宝兴路21号万骏经贸大厦718",
  phone: "000-XXXXXXXX",
  email: "XXXXX@glorysemi.com",
  formTitle: "在线留言",
  formIntro:
    "您好！若您遇到任何问题，或想要和我们进行合作，欢迎您在此处详细描述问题内容，并留下您的联系方式。我们的团队将尽快与您取得联系，为您提供专业解答与解决方案。",
  fields: [
    { name: "name", label: "姓名", type: "text" as const },
    { name: "company", label: "公司名称", type: "text" as const },
    { name: "phone", label: "电话", type: "tel" as const },
    { name: "email", label: "邮箱", type: "email" as const },
    { name: "message", label: "留言", type: "textarea" as const },
  ],
} as const;
