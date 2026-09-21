// 自動由 200_Reference/普羅芳產品資料庫/普羅芳全產品資料庫.json 產生，更新品項/價格/介紹/圖片請改那份 JSON 再重新產生此檔
const SHOP_CATEGORIES = ["有機單方精油", "純露系列", "HerbalGem 嫩芽系列", "單方植物油", "金鐘罩系列", "靈活(關節肌肉)系列", "ARÔME香氛系列", "芳香儀/芳香用品系列", "中性調配系列", "夏日系列", "媽媽寶寶系列", "AROMABOOST 芳香能量系列", "其他系列"];
const SHOP_PRODUCTS = [
  {
    "id": "EO-001",
    "cat": "有機單方精油",
    "name": "膠冷杉",
    "latin": "Abies balsamea",
    "size": "10 ml",
    "price": 880,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-002",
    "cat": "有機單方精油",
    "name": "西洋蓍草",
    "latin": "Achillea millefolium",
    "size": "5ml",
    "price": 1580,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-003",
    "cat": "有機單方精油",
    "name": "花梨木",
    "latin": "Aniba rosaeodora var. Amazonica",
    "size": "10ml",
    "price": 1280,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-004",
    "cat": "有機單方精油",
    "name": "芹菜籽",
    "latin": "Apium graveolens var, dulce",
    "size": "10ml",
    "price": 1080,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-005",
    "cat": "有機單方精油",
    "name": "龍萵",
    "latin": "Artemisia dracunculus",
    "size": "5ml",
    "price": 860,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-006",
    "cat": "有機單方精油",
    "name": "大蒜",
    "latin": "Allium sativum",
    "size": "5 ml",
    "price": 680,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-007",
    "cat": "有機單方精油",
    "name": "乳香",
    "latin": "Boswellia carteri",
    "size": "5ml",
    "price": 980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-008",
    "cat": "有機單方精油",
    "name": "伊蘭伊蘭",
    "latin": "Cananga odorata",
    "size": "5ml",
    "price": 880,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-009",
    "cat": "有機單方精油",
    "name": "卡塔芙",
    "latin": "Cedrelopsis grevei",
    "size": "10ml",
    "price": 980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-010",
    "cat": "有機單方精油",
    "name": "大西洋雪松",
    "latin": "Cedrus atlantica",
    "size": "10ml",
    "price": 680,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-011",
    "cat": "有機單方精油",
    "name": "羅馬洋甘菊",
    "latin": "Chamaemelum nobile",
    "size": "5ml",
    "price": 1580,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-012",
    "cat": "有機單方精油",
    "name": "芳樟",
    "latin": "Cinnamomum camphora",
    "size": "10 ml",
    "price": 690,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-013",
    "cat": "有機單方精油",
    "name": "桉油醇羅文莎葉",
    "latin": "Cinnamomum camphora ct cinéole",
    "size": "10ml",
    "price": 980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-014",
    "cat": "有機單方精油",
    "name": "中國肉桂",
    "latin": "Cinnamomum cassia",
    "size": "10ml",
    "price": 890,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-015",
    "cat": "有機單方精油",
    "name": "錫蘭肉桂",
    "latin": "Cinnamomum zeylanicum",
    "size": "5ml",
    "price": 1280,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-016",
    "cat": "有機單方精油",
    "name": "莎羅葉",
    "latin": "Cinnamosma fragrans",
    "size": "10ml",
    "price": 880,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-017",
    "cat": "有機單方精油",
    "name": "岩薔薇",
    "latin": "Cistus ladaniferus",
    "size": "5ml",
    "price": 1580,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-018",
    "cat": "有機單方精油",
    "name": "橙花",
    "latin": "Citrus aurantium ssp. amara (Fleur)",
    "size": "5ml",
    "price": 3580,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-019",
    "cat": "有機單方精油",
    "name": "苦橙葉",
    "latin": "Citrus aurantium ssp. amara (Feuille)",
    "size": "10ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-020",
    "cat": "有機單方精油",
    "name": "佛手柑",
    "latin": "Citrus aurantium ssp. Bergamia",
    "size": "10ml",
    "price": 880,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-021",
    "cat": "有機單方精油",
    "name": "檸檬",
    "latin": "Citrus limon",
    "size": "10ml",
    "price": 680,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-022",
    "cat": "有機單方精油",
    "name": "檸檬(Demeter)",
    "latin": "Citrus limon",
    "size": "5ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-023",
    "cat": "有機單方精油",
    "name": "葡萄柚",
    "latin": "Citrus paradisi",
    "size": "10ml",
    "price": 680,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-024",
    "cat": "有機單方精油",
    "name": "紅橘",
    "latin": "Citrus reticulata",
    "size": "10ml",
    "price": 680,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-025",
    "cat": "有機單方精油",
    "name": "甜橙",
    "latin": "Citrus sinensis",
    "size": "10ml",
    "price": 580,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-026",
    "cat": "有機單方精油",
    "name": "萊姆",
    "latin": "Citrus aurantifolia",
    "size": "10 ml",
    "price": 690,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-027",
    "cat": "有機單方精油",
    "name": "柚子",
    "latin": "Citrus junos",
    "size": "5 ml",
    "price": 1380,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-028",
    "cat": "有機單方精油",
    "name": "沒藥",
    "latin": "Commiphora molmol",
    "size": "5ml",
    "price": 1080,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-029",
    "cat": "有機單方精油",
    "name": "芫荽",
    "latin": "Coriandrum sativum",
    "size": "10 ml",
    "price": 980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-030",
    "cat": "有機單方精油",
    "name": "古巴香脂",
    "latin": "Copaifera officinalis",
    "size": "10 ml",
    "price": 690,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-031",
    "cat": "有機單方精油",
    "name": "海茴香",
    "latin": "Crithmum maritimum",
    "size": "5ml",
    "price": 1980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-032",
    "cat": "有機單方精油",
    "name": "姜黃",
    "latin": "Curcuma Longa",
    "size": "10ml",
    "price": 980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-033",
    "cat": "有機單方精油",
    "name": "常青絲柏",
    "latin": "Cupressus sempervirens var. stricta",
    "size": "5ml",
    "price": 790,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-034",
    "cat": "有機單方精油",
    "name": "小茴香",
    "latin": "Cuminum cyminum",
    "size": "5ml",
    "price": 890,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-035",
    "cat": "有機單方精油",
    "name": "檸檬香茅",
    "latin": "Cymbopogon citratus",
    "size": "10ml",
    "price": 590,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-036",
    "cat": "有機單方精油",
    "name": "玫瑰草",
    "latin": "Cymbopogon martinii var. motia",
    "size": "10ml",
    "price": 760,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-037",
    "cat": "有機單方精油",
    "name": "爪哇香茅",
    "latin": "Cymbopogon winterianus",
    "size": "10ml",
    "price": 680,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-038",
    "cat": "有機單方精油",
    "name": "野胡蘿蔔",
    "latin": "Daucus carota var. sativus",
    "size": "5ml",
    "price": 980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-039",
    "cat": "有機單方精油",
    "name": "薄荷尤加利",
    "latin": "Eucalyptus dives",
    "size": "10ml",
    "price": 680,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-040",
    "cat": "有機單方精油",
    "name": "藍膠尤加利",
    "latin": "Eucalyptus globulus",
    "size": "10ml",
    "price": 580,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-041",
    "cat": "有機單方精油",
    "name": "澳洲尤加利",
    "latin": "Eucalyptus radiata ssp. radiata",
    "size": "10ml",
    "price": 680,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-042",
    "cat": "有機單方精油",
    "name": "南非尤加利",
    "latin": "Eucalyptus smithii",
    "size": "10ml",
    "price": 680,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-043",
    "cat": "有機單方精油",
    "name": "檸檬尤加利",
    "latin": "Eucalytpus citriodora ct citronnellal",
    "size": "10ml",
    "price": 680,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-044",
    "cat": "有機單方精油",
    "name": "丁香",
    "latin": "Eugenia caryophyllus",
    "size": "10ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-045",
    "cat": "有機單方精油",
    "name": "茴香",
    "latin": "Foeniculum vulgare",
    "size": "10ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-046",
    "cat": "有機單方精油",
    "name": "香氛白珠樹",
    "latin": "Gaultheria fragrantissima",
    "size": "10ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-047",
    "cat": "有機單方精油",
    "name": "古榭白珠樹",
    "latin": "Gaultheria procumbens",
    "size": "10ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-048",
    "cat": "有機單方精油",
    "name": "義大利永久花",
    "latin": "Helichrysum italicum ssp. serotinum",
    "size": "5ml",
    "price": 2880,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-049",
    "cat": "有機單方精油",
    "name": "土木香",
    "latin": "Inula graveolens",
    "size": "5ml",
    "price": 2980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-050",
    "cat": "有機單方精油",
    "name": "歐洲洋杜松",
    "latin": "Juniperus communis var. alpine",
    "size": "5ml",
    "price": 1080,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-051",
    "cat": "有機單方精油",
    "name": "茉莉",
    "latin": "Jasminum officinalis",
    "size": "5 ml",
    "price": 3500,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-052",
    "cat": "有機單方精油",
    "name": "月桂",
    "latin": "Laurus nobilis",
    "size": "5ml",
    "price": 880,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-053",
    "cat": "有機單方精油",
    "name": "安古薰衣草",
    "latin": "Lavandula angustifolia ssp. angustifolia",
    "size": "10ml",
    "price": 890,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-054",
    "cat": "有機單方精油",
    "name": "穗花薰衣草",
    "latin": "Lavandula spica",
    "size": "10ml",
    "price": 980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-055",
    "cat": "有機單方精油",
    "name": "特級醒目薰衣草",
    "latin": "Lavandula intermedia clone super",
    "size": "10ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-056",
    "cat": "有機單方精油",
    "name": "AOP真正薰衣草",
    "latin": "Lavandula angustifolia P. MILLER",
    "size": "5ml",
    "price": 1280,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-057",
    "cat": "有機單方精油",
    "name": "格陵蘭喇叭茶",
    "latin": "Ledum groenlandicum",
    "size": "5ml",
    "price": 2480,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-058",
    "cat": "有機單方精油",
    "name": "檸檬木姜子",
    "latin": "Litsea citrata",
    "size": "10ml",
    "price": 680,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-059",
    "cat": "有機單方精油",
    "name": "圓葉當歸",
    "latin": "Levisticum officinale",
    "size": "5ml",
    "price": 2680,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-060",
    "cat": "有機單方精油",
    "name": "德國洋甘菊",
    "latin": "Matricaria recutita",
    "size": "5ml",
    "price": 1980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-061",
    "cat": "有機單方精油",
    "name": "香蜂草",
    "latin": "Melissa officinalis.",
    "size": "5 ml",
    "price": 3980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-062",
    "cat": "有機單方精油",
    "name": "交錯葉片茶樹",
    "latin": "Melaleuca alternifolia",
    "size": "10ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-063",
    "cat": "有機單方精油",
    "name": "綠花白千層",
    "latin": "Melaleuca quinquenervia ct cinéole",
    "size": "10ml",
    "price": 760,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-064",
    "cat": "有機單方精油",
    "name": "綠薄荷",
    "latin": "Mentha spicata",
    "size": "10ml",
    "price": 790,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-065",
    "cat": "有機單方精油",
    "name": "野薄荷",
    "latin": "Mentha arvensis",
    "size": "10ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-066",
    "cat": "有機單方精油",
    "name": "胡椒薄荷",
    "latin": "Mentha x piperita",
    "size": "10ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-067",
    "cat": "有機單方精油",
    "name": "桉樹腦香桃木",
    "latin": "Myrtus communis CT Cineole",
    "size": "5ml",
    "price": 1180,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-068",
    "cat": "有機單方精油",
    "name": "肉荳蔻",
    "latin": "Myristica fragrans",
    "size": "10 ml",
    "price": 880,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-069",
    "cat": "有機單方精油",
    "name": "芳樟醇羅勒",
    "latin": "Ocimum basilicum CT linalol",
    "size": "10 ml",
    "price": 880,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-070",
    "cat": "有機單方精油",
    "name": "聖羅勒精油 (Bio)",
    "latin": "Ocimum sanctum",
    "size": "5ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-071",
    "cat": "有機單方精油",
    "name": "牛至",
    "latin": "Origanum compactum",
    "size": "10ml",
    "price": 980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-072",
    "cat": "有機單方精油",
    "name": "馬鬱蘭",
    "latin": "Origanum majorana",
    "size": "5ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-073",
    "cat": "有機單方精油",
    "name": "波旁天竺葵",
    "latin": "Pelargonium x asperum bourbon",
    "size": "10ml",
    "price": 1080,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-074",
    "cat": "有機單方精油",
    "name": "埃及天竺葵",
    "latin": "Pelargonium x asperum CV Egypt",
    "size": "10ml",
    "price": 980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-075",
    "cat": "有機單方精油",
    "name": "黑雲杉",
    "latin": "Picea mariana",
    "size": "10ml",
    "price": 880,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-076",
    "cat": "有機單方精油",
    "name": "歐洲赤松",
    "latin": "Pinus sylvestris",
    "size": "10ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-077",
    "cat": "有機單方精油",
    "name": "黑胡椒",
    "latin": "Piper nigrum",
    "size": "5 ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-078",
    "cat": "有機單方精油",
    "name": "薰陸香",
    "latin": "Pistacia lentiscus",
    "size": "5ml",
    "price": 1880,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-079",
    "cat": "有機單方精油",
    "name": "廣藿香",
    "latin": "Pogostemon cablin",
    "size": "10ml",
    "price": 880,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-080",
    "cat": "有機單方精油",
    "name": "大馬士革玫瑰",
    "latin": "Rosa damascena",
    "size": "5ml",
    "price": 13800,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-081",
    "cat": "有機單方精油",
    "name": "桉油醇迷迭香",
    "latin": "Rosmarinus officinalis ct cinéole",
    "size": "10ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-082",
    "cat": "有機單方精油",
    "name": "馬鞭草酮迷迭香",
    "latin": "Rosmarinus officinalis ct verbénone",
    "size": "5ml",
    "price": 980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-083",
    "cat": "有機單方精油",
    "name": "樟腦迷迭香",
    "latin": "Rosmarinus officinalis ct camphora",
    "size": "10ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-084",
    "cat": "有機單方精油",
    "name": "安息香",
    "latin": "Styrax benzoe",
    "size": "10 ml",
    "price": 790,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-085",
    "cat": "有機單方精油",
    "name": "快樂鼠尾草",
    "latin": "Salvia sclarea",
    "size": "5ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-086",
    "cat": "有機單方精油",
    "name": "檀香",
    "latin": "Santalum austro-caledonicum var. austro-caledonicum",
    "size": "5ml",
    "price": 1980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-087",
    "cat": "有機單方精油",
    "name": "艾菊",
    "latin": "Tanacetum annuum",
    "size": "5ml",
    "price": 1780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-088",
    "cat": "有機單方精油",
    "name": "百里香酚百里香",
    "latin": "Thymus vulgaris ct thymol",
    "size": "5ml",
    "price": 880,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-089",
    "cat": "有機單方精油",
    "name": "芳樟醇百里香",
    "latin": "Thymus vulgaris ct linalol",
    "size": "5ml",
    "price": 980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-090",
    "cat": "有機單方精油",
    "name": "側柏醇百里香",
    "latin": "Thymus vulgaris ct thujanol",
    "size": "5ml",
    "price": 1980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-091",
    "cat": "有機單方精油",
    "name": "岩蘭草",
    "latin": "Vetiveria zizanoides",
    "size": "5ml",
    "price": 880,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-092",
    "cat": "有機單方精油",
    "name": "纈草",
    "latin": "Valeriana officinalis",
    "size": "5 ml",
    "price": 1180,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-093",
    "cat": "有機單方精油",
    "name": "生薑",
    "latin": "Zingiber officinale",
    "size": "5ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-094",
    "cat": "有機單方精油",
    "name": "檸檬",
    "latin": "Citrus limon",
    "size": "30 ml",
    "price": 1380,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-095",
    "cat": "有機單方精油",
    "name": "安古薰衣草",
    "latin": "Lavandula angustifolia ssp. angustifolia",
    "size": "30 ml",
    "price": 1980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-096",
    "cat": "有機單方精油",
    "name": "交錯葉片茶樹",
    "latin": "Melaleuca alternifolia",
    "size": "30 ml",
    "price": 1980,
    "desc": "",
    "img": ""
  },
  {
    "id": "EO-097",
    "cat": "有機單方精油",
    "name": "胡椒薄荷",
    "latin": "Melaleuca alternifolia",
    "size": "30 ml",
    "price": 1880,
    "desc": "",
    "img": ""
  },
  {
    "id": "HY-001",
    "cat": "純露系列",
    "name": "大馬士革玫瑰純露",
    "latin": "Rose",
    "size": "150ml",
    "price": 1180,
    "desc": "高貴花香細緻悠長，支持肌膚滋養，帶來優雅氛圍與內心平衡。",
    "img": ""
  },
  {
    "id": "HY-002",
    "cat": "純露系列",
    "name": "羅馬洋甘菊純露",
    "latin": "Camomille",
    "size": "150ml",
    "price": 1080,
    "desc": "溫柔草本花香，日常保養支持，陪伴舒緩情緒與放鬆時光。",
    "img": ""
  },
  {
    "id": "HY-003",
    "cat": "純露系列",
    "name": "蠟菊純露",
    "latin": "IMMORTELLE",
    "size": "150ml",
    "price": 1180,
    "desc": "金黃不凋花，香氣溫暖淡雅，支持肌膚呵護，象徵堅韌安心。",
    "img": ""
  },
  {
    "id": "HY-004",
    "cat": "純露系列",
    "name": "真正薰衣草純露",
    "latin": "Lavande",
    "size": "150ml",
    "price": 1180,
    "desc": "清新柔和花香，常作芳香陪伴，支持肌膚保養，營造安定氛圍。",
    "img": ""
  },
  {
    "id": "HY-005",
    "cat": "純露系列",
    "name": "橙花純露",
    "latin": "Néroli",
    "size": "150ml",
    "price": 1180,
    "desc": "氣味優雅怡人，使心情安定放鬆，帶來幸福感。日常保養與芳香陪伴，帶來純淨、柔和與平衡感受。",
    "img": ""
  },
  {
    "id": "HY-006",
    "cat": "純露系列",
    "name": "茶樹純露",
    "latin": "Tea-tree",
    "size": "150ml",
    "price": 1080,
    "desc": "清新草本氣息，支持肌膚清爽呵護，營造潔淨純粹的舒適氛圍。",
    "img": ""
  },
  {
    "id": "HG-001",
    "cat": "HerbalGem 嫩芽系列",
    "name": "矢車菊嫩芽噴霧",
    "latin": "OPTIGEM Eye Drops",
    "size": "10ml",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "VO-001",
    "cat": "單方植物油",
    "name": "摩洛哥堅果油",
    "latin": "Argania spinosa",
    "size": "50ml",
    "price": 780,
    "desc": "在北非的乾燥沙漠裡，當地女性世代守護肌膚與髮絲的秘密，就是這瓶被稱為「液態黃金」的摩洛哥堅果油。它質地輕盈，卻蘊含豐富養分，能帶來柔潤與光澤，讓乾燥的環境中依然留有細緻的呵護。",
    "img": ""
  },
  {
    "id": "VO-002",
    "cat": "單方植物油",
    "name": "印楝油",
    "latin": "Azadirachta indica",
    "size": "50ml",
    "price": 780,
    "desc": "在印度，印楝樹被視為「村莊的守護者」，它的氣息濃郁而獨特，傳遞出自然的淨化力量。印楝油常出現在生活與居家環境的應用中，帶來草本的清新氛圍，是東方文化裡一種長久的守護。",
    "img": ""
  },
  {
    "id": "VO-003",
    "cat": "單方植物油",
    "name": "山金車油",
    "latin": "Arnica Montana",
    "size": "50ml",
    "price": 1080,
    "desc": "金黃的山金車花盛開在歐洲高山草原上，象徵著活力與堅韌。這些花朵經過浸泡，化為帶有清新草本氣息的植物油，常被選用於運動後的按摩，為身體帶來放鬆氛圍，營造輕盈的感受。",
    "img": ""
  },
  {
    "id": "VO-004",
    "cat": "單方植物油",
    "name": "琉璃苣油",
    "latin": "Borago officinalis",
    "size": "50ml",
    "price": 980,
    "desc": "琉璃苣擁有「勇氣之花」的花語，它的種子經冷壓後釋放出細緻清爽的油，富含珍貴的養分。特別受到成熟肌的喜愛，常在夜晚被使用，帶來溫和的滋潤感，如同給予一份溫柔的夜間守護。",
    "img": ""
  },
  {
    "id": "VO-005",
    "cat": "單方植物油",
    "name": "金盞花油",
    "latin": "Calendula officialis",
    "size": "50ml",
    "price": 780,
    "desc": "金盞花在陽光下盛放，花瓣鮮豔明亮，象徵溫暖與安慰。它被浸泡於植物油中，釋放出細緻柔和的力量，尤其適合細膩或嬌嫩的肌膚。這瓶金色精華在日常保養裡，像一個貼心的守護者，溫潤而安定。",
    "img": ""
  },
  {
    "id": "VO-006",
    "cat": "單方植物油",
    "name": "金盞花油",
    "latin": "Calendula officialis",
    "size": "100ml",
    "price": 1380,
    "desc": "金盞花在陽光下盛放，花瓣鮮豔明亮，象徵溫暖與安慰。它被浸泡於植物油中，釋放出細緻柔和的力量，尤其適合細膩或嬌嫩的肌膚。這瓶金色精華在日常保養裡，像一個貼心的守護者，溫潤而安定。",
    "img": ""
  },
  {
    "id": "VO-007",
    "cat": "單方植物油",
    "name": "加洛菲油",
    "latin": "Calophyllum inophyllum",
    "size": "50ml",
    "price": 1080,
    "desc": "來自熱帶地區的大葉欖仁樹，孕育出質地醇厚的加洛菲油。它濃郁而溫暖，帶有大自然的深沉氣息，常被用於按摩與調和。每一滴都像是熱帶陽光下的力量，滋養並陪伴肌膚恢復舒適與柔軟。",
    "img": ""
  },
  {
    "id": "VO-008",
    "cat": "單方植物油",
    "name": "榛果油",
    "latin": "Corylus avellana",
    "size": "50ml",
    "price": 780,
    "desc": "榛果不僅是歐洲家庭餐桌上的食材，也是生活中常見的保養之選。由果仁冷壓出的榛果油質地清爽、不油膩，能迅速吸收，是按摩與日常護理中最輕盈的基底油，帶來簡單而純粹的滋養。",
    "img": ""
  },
  {
    "id": "VO-009",
    "cat": "單方植物油",
    "name": "大麻籽油",
    "latin": "Cannabis sativa",
    "size": "50ml",
    "price": 780,
    "desc": "被譽為「綠色寶石」的大麻籽油，取自植物的種子，完全不含精神活性成分。它的油質輕盈，散發淡淡堅果氣息，富含珍貴脂肪酸。無論是日常護膚或與精油調和，它都能帶來溫和清爽的滋養體驗。",
    "img": ""
  },
  {
    "id": "VO-010",
    "cat": "單方植物油",
    "name": "茶籽油(有機)",
    "latin": "Camellia sinensis",
    "size": "30ml",
    "price": 780,
    "desc": "自古以來，茶籽油便是東方文化裡的重要角色，被視為「東方的橄欖油」。在中國與日本，它既是餐桌上的食材，也是護膚與護髮的良伴。細膩溫潤的質地，象徵純淨與堅韌，讓日常保養多了一份安心。",
    "img": ""
  },
  {
    "id": "VO-011",
    "cat": "單方植物油",
    "name": "胡蘿蔔油",
    "latin": "Daucus carota",
    "size": "50ml",
    "price": 880,
    "desc": "胡蘿蔔象徵活力與健康，當它的根部被浸泡於植物油中，轉化為橙色的精華，為肌膚帶來亮澤。胡蘿蔔油散發溫暖而自然的氣息，適合乾燥與需要提亮的膚質，讓肌膚呈現自然的光采。",
    "img": ""
  },
  {
    "id": "VO-012",
    "cat": "單方植物油",
    "name": "聖約翰草油",
    "latin": "Hypericum perforatum",
    "size": "50ml",
    "price": 880,
    "desc": "在歐洲仲夏節，聖約翰草被視為驅散黑暗、帶來光明的植物。它的花朵在油中浸泡後呈現紅寶石般的色澤，被稱為「大自然的紅色守護油」。質地溫和，常被用於日常按摩與曬後護理，為肌膚帶來安定與舒適的感受。",
    "img": ""
  },
  {
    "id": "VO-013",
    "cat": "單方植物油",
    "name": "沙棘果油",
    "latin": "Hippophae rhamnoides",
    "size": "30ml",
    "price": 1280,
    "desc": "沙棘果實生長於高原嚴峻的環境中，依然保持鮮豔橙紅色澤，被視為強韌與生命力的象徵。它冷壓出的果油富含珍貴養分，特別適合夜間修護，讓肌膚在休息時感受明亮與滋養。",
    "img": ""
  },
  {
    "id": "VO-014",
    "cat": "單方植物油",
    "name": "蠟菊植物油",
    "latin": "IMMORTELLE VO",
    "size": "30ml",
    "price": 1180,
    "desc": "蠟菊又名「永久花」，即使乾燥後依然能保持金黃不凋。自地中海傳統以來，它象徵著永恆與堅韌。蠟菊花瓣經浸泡後，成為一瓶溫和而細膩的油，帶來柔潤與呵護，為日常按摩與護膚增添優雅氣息。",
    "img": ""
  },
  {
    "id": "VO-015",
    "cat": "單方植物油",
    "name": "澳洲堅果油",
    "latin": "Macadamia ternifolia",
    "size": "50ml",
    "price": 780,
    "desc": "來自澳洲的堅果油，質地滑順柔和，被原住民世代用於肌膚護理。它特別適合乾燥與成熟膚質，能為肌膚帶來潤澤與彈性，如同陽光下大地的滋養。",
    "img": ""
  },
  {
    "id": "VO-016",
    "cat": "單方植物油",
    "name": "黑種草油",
    "latin": "Nigella sativa",
    "size": "50ml",
    "price": 880,
    "desc": "黑種草油又稱「黑孜然籽油」，在中東被尊稱為「生命的祝福」。它的氣息獨特，深沉而帶有辛香，數千年來被廣泛用於飲食與護膚。這瓶深色的植物油象徵著守護與滋養，為日常生活增添厚實的感受。",
    "img": ""
  },
  {
    "id": "VO-017",
    "cat": "單方植物油",
    "name": "月見草油",
    "latin": "Oenothera biennis",
    "size": "50ml",
    "price": 880,
    "desc": "月見草在夜晚綻放花朵，被稱為「夜來香之油」，自古以來就是女性的守護植物。它的種子油質地溫潤，含有珍貴脂肪酸，適合在夜晚護理時使用，為成熟肌膚帶來滋養與柔潤感。",
    "img": ""
  },
  {
    "id": "VO-018",
    "cat": "單方植物油",
    "name": "酪梨油",
    "latin": "Persea gratissima",
    "size": "50ml",
    "price": 780,
    "desc": "在中美洲文化中，酪梨被稱為「森林奶油」。果肉冷壓出的油質地厚實卻容易吸收，富含維生素與植物養分。它特別適合乾燥或需要深層滋養的膚質，是冬季或夜間保養的溫柔選擇。",
    "img": ""
  },
  {
    "id": "VO-019",
    "cat": "單方植物油",
    "name": "甜杏仁油",
    "latin": "Prunus amygdalus",
    "size": "50ml",
    "price": 780,
    "desc": "甜杏仁在地中海文化中象徵愛與滋養。由甜杏仁壓榨出的油質地細膩，親膚又溫和，適合全家人使用。它是最經典的基底油之一，常用於按摩、保濕，是家庭日常不可或缺的選擇。",
    "img": ""
  },
  {
    "id": "VO-020",
    "cat": "單方植物油",
    "name": "甜杏仁油",
    "latin": "Prunus amygdalus",
    "size": "100ml",
    "price": 1180,
    "desc": "甜杏仁在地中海文化中象徵愛與滋養。由甜杏仁壓榨出的油質地細膩，親膚又溫和，適合全家人使用。它是最經典的基底油之一，常用於按摩、保濕，是家庭日常不可或缺的選擇。",
    "img": ""
  },
  {
    "id": "VO-021",
    "cat": "單方植物油",
    "name": "杏核桃油",
    "latin": "Prunus armeniaca",
    "size": "50ml",
    "price": 780,
    "desc": "杏核仁冷壓出的油質地輕盈清爽，容易吸收，不會留下油膩感。它帶來柔潤與滑順的觸感，適合作為臉部保養油或調和基底，是細緻護膚的理想選擇。",
    "img": ""
  },
  {
    "id": "VO-022",
    "cat": "單方植物油",
    "name": "石榴籽油",
    "latin": "Punica granatum",
    "size": "30ml",
    "price": 1080,
    "desc": "",
    "img": ""
  },
  {
    "id": "VO-023",
    "cat": "單方植物油",
    "name": "智利玫瑰果油",
    "latin": "Rosa rubiginosa",
    "size": "50ml",
    "price": 1180,
    "desc": "來自安地斯山脈的玫瑰果油，被譽為「山間紅寶石」。它不是來自玫瑰花，而是果實種子冷壓出的精華。富含珍貴脂肪酸與維生素，常被用於夜間護理，讓肌膚在休息時呈現光澤與細膩，是愛美人士心中的人氣保養油。",
    "img": ""
  },
  {
    "id": "VO-024",
    "cat": "單方植物油",
    "name": "蓖麻油",
    "latin": "Ricinus communis",
    "size": "50ml",
    "price": 780,
    "desc": "蓖麻油來自飽滿的蓖麻籽，以冷壓方式取得。它質地濃稠厚實，帶有一種獨特的植物氣息，是天然真實的象徵。自古以來，蓖麻油便常被用於頭髮與睫毛的滋養，也因其特殊質地而成為許多DIY配方的基礎原料。每一滴都像是一層溫潤的覆蓋，帶來深沉的呵護。",
    "img": ""
  },
  {
    "id": "VO-025",
    "cat": "單方植物油",
    "name": "荷荷芭油",
    "latin": "Simmondsia chinensis",
    "size": "50ml",
    "price": 780,
    "desc": "原產於美洲沙漠的荷荷芭，被稱為「大地的液態黃金」。與其他植物油不同，它其實是一種天然液態蠟，其分子結構與人體皮脂極為相似。清爽不油膩的特質，使它成為最百搭的基底油，能與各種精油調和，也能單獨使用，適合臉部、身體與頭皮的日常護理。",
    "img": ""
  },
  {
    "id": "VO-026",
    "cat": "單方植物油",
    "name": "小麥胚芽油",
    "latin": "Triticum vulgare",
    "size": "50ml",
    "price": 780,
    "desc": "小麥自古以來象徵豐收與滋養，而小麥胚芽則是最精華的部分。由胚芽冷壓出的油質地厚實溫潤，富含天然維生素E。它常被視為調和與護膚的好選擇，能為乾燥的肌膚帶來一份深層的滋養，像是大地獻上的營養禮物。",
    "img": ""
  },
  {
    "id": "VO-027",
    "cat": "單方植物油",
    "name": "香草油",
    "latin": "Vanilla planifolia",
    "size": "50ml",
    "price": 1180,
    "desc": "",
    "img": ""
  },
  {
    "id": "VO-028",
    "cat": "單方植物油",
    "name": "椰子油",
    "latin": "Cocos nucifera",
    "size": "100ml",
    "price": 780,
    "desc": "在熱帶島嶼，椰子是居民生活的一部分，既是食物也是護理的資源。冷壓的椰子油清爽純淨，帶有淡淡的自然氣息。它不僅常見於肌膚與髮絲的日常保養，是一瓶多功能的植物油，充滿陽光與海洋的氛圍。",
    "img": ""
  },
  {
    "id": "VO-029",
    "cat": "單方植物油",
    "name": "乳油木果油",
    "latin": "Butyrospermum parkii",
    "size": "100ml",
    "price": 780,
    "desc": "來自非洲大地的乳油木果，被稱為「生命之樹的果實」。由果仁取出的厚實油脂質地柔潤，帶有溫暖的觸感。它能深度滋潤乾燥部位，為肌膚形成天然的滋潤屏障，常被選作乾燥肌膚的日常保養用油的貼心守護者。",
    "img": ""
  },
  {
    "id": "VO-030",
    "cat": "單方植物油",
    "name": "分散劑",
    "latin": "Dispersant",
    "size": "50ml",
    "price": 780,
    "desc": "可以有效地將精油分散在水中。用於製備含有精油的沐浴液以及乳液或凝膠中。精油乳化後添加至液體為混濁乳狀為正常現象。",
    "img": ""
  },
  {
    "id": "VO-031",
    "cat": "單方植物油",
    "name": "蘆薈凝膠",
    "latin": "Aloe Vera Gel",
    "size": "100ml",
    "price": 780,
    "desc": "蘆薈是一種自古以來就因其對健康和身體的益處而聞名於世的植物，主要因其對皮膚的益處而受到認可，以其卓越的舒緩和再生特性而聞名，可緩解發紅和刺激，並有助於皮膚修復。它天然富含活性成分，包括蘆薈糖，可保持皮膚的水分，使皮膚柔軟有彈性。",
    "img": ""
  },
  {
    "id": "VO-032",
    "cat": "單方植物油",
    "name": "頂級複方基底油",
    "latin": "MASSAGE SELECTION",
    "size": "100ml",
    "price": 1280,
    "desc": "這瓶複方基底油結合了玫瑰果油、杏桃核油與葵花籽油三種植物的精華，質地均衡細緻。它能單獨作為按摩與護理油，也能成為專業芳療中調配的最佳基底。就像一場細緻的調和樂章，每一滴都展現出協調而溫柔的能量。",
    "img": ""
  },
  {
    "id": "DEF-001",
    "cat": "金鐘罩系列",
    "name": "清新喉",
    "latin": "Throat spray",
    "size": "15ml",
    "price": 780,
    "desc": "針對口腔與喉部設計的植萃噴霧，在季節轉換或頻繁用聲後，協助緩解黏膜的緊繃與不適感，同時維持口腔環境的清爽平衡。",
    "img": ""
  },
  {
    "id": "DEF-002",
    "cat": "金鐘罩系列",
    "name": "清新鼻",
    "latin": "Nose spray",
    "size": "15ml",
    "price": 780,
    "desc": "專為維持鼻腔環境健康而設計。在季節更迭或空氣品質不佳時，協助舒緩鼻腔的不適感，找回呼吸的清爽與順暢。",
    "img": ""
  },
  {
    "id": "DEF-003",
    "cat": "金鐘罩系列",
    "name": "花噴霧",
    "latin": "Spray Nasal",
    "size": "15ml",
    "price": 880,
    "desc": "針對環境季節挑戰設計。利用化學型（CT）精油的收斂與修護特性，在黏膜表面形成物理性保護屏障，有效舒緩因環境因子引起的不適感，找回呼吸的順暢律動。",
    "img": ""
  },
  {
    "id": "DEF-004",
    "cat": "金鐘罩系列",
    "name": "金鐘罩複方精油",
    "latin": "Natural Defences",
    "size": "30ml",
    "price": 1180,
    "desc": "結合多種有機精油，支持日常保養，協助維持日常平衡感與舒適。適合在季節轉換或環境挑戰時使用，搭配植物油更能柔和呵護肌膚。",
    "img": ""
  },
  {
    "id": "DEF-005",
    "cat": "金鐘罩系列",
    "name": "芳香力吸入棒",
    "latin": "Aromaforce Stick inhaleur 3 en 1",
    "size": "1ml",
    "price": 480,
    "desc": "含100%純精油配方，透過精油揮發性分子吸入，提供清新氣味體驗，常用於呼吸道不適初期或鼻部阻塞時之日常感官支持。",
    "img": ""
  },
  {
    "id": "DEF-006",
    "cat": "金鐘罩系列",
    "name": "金鐘罩環境噴霧",
    "latin": "Aromaforce Stick inhaleur 3 en 1",
    "size": "150ml",
    "price": 890,
    "desc": "16種精油組成的活性分子，能快速淨化空氣，營造清新氛圍，適合居家、辦公等各式空間。",
    "img": ""
  },
  {
    "id": "DEF-007",
    "cat": "金鐘罩系列",
    "name": "除蟎噴霧",
    "latin": "Allergoforce Anti dust mites spray - Anti bed bugs",
    "size": "150ml",
    "price": 890,
    "desc": "天然精油配方，可作用於織物表面，協助清潔居家環境，減少過敏原累積。",
    "img": ""
  },
  {
    "id": "DEF-008",
    "cat": "金鐘罩系列",
    "name": "清新乳霜",
    "latin": "Respiratory balm",
    "size": "80ml",
    "price": 780,
    "desc": "質地輕盈，富含芳香分子，適合在日常保養與按摩時使用，營造清新舒適的氛圍。",
    "img": ""
  },
  {
    "id": "DEF-009",
    "cat": "金鐘罩系列",
    "name": "香氣力量少年",
    "latin": "PECTORAL BALSAM",
    "size": "50ml",
    "price": 680,
    "desc": "輕盈柔潤的芳香凝乳，質地溫和，適合全家人在換季時使用，呵護肌膚並營造清新氛圍。",
    "img": ""
  },
  {
    "id": "DEF-010",
    "cat": "金鐘罩系列",
    "name": "吸入容器",
    "latin": "",
    "size": "座",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "JM-001",
    "cat": "靈活(關節肌肉)系列",
    "name": "小精靈噴霧",
    "latin": "SPRAY",
    "size": "75ml",
    "price": 880,
    "desc": "靈活噴霧－濃縮配方，放鬆噴霧，在緊繃時刻，協助全身放鬆，帶來輕盈自在的舒適感受。",
    "img": ""
  },
  {
    "id": "JM-002",
    "cat": "靈活(關節肌肉)系列",
    "name": "小精靈舒滾輪",
    "latin": "Roller - Articulations fatiguées",
    "size": "75ml",
    "price": 980,
    "desc": "舒滾輪宛如隨身的小幫手。透過滾輪的輕觸，將清新芳香與輕盈感受帶入日常生活。清爽延展的凝膠質地，在需要放鬆的時刻，帶來舒適流動的清新體驗。",
    "img": ""
  },
  {
    "id": "JM-003",
    "cat": "靈活(關節肌肉)系列",
    "name": "小精靈香膏",
    "latin": "BAUME TRADITIONNEL",
    "size": "30ml",
    "price": 680,
    "desc": "含有多種具有互補特性的精油，根據東方醫學傳統進行選擇。透過暖熱的效應，驅散體內堆積的不適，逐步釋放平靜與柔軟。提供15歲以上使用，不適合孕婦和哺乳期婦女。",
    "img": ""
  },
  {
    "id": "JM-004",
    "cat": "靈活(關節肌肉)系列",
    "name": "小精靈活躍凝乳",
    "latin": "Gel crème - Articulations",
    "size": "100ml",
    "price": 880,
    "desc": "採用有機精油配製而成，專為每天舒緩肌肉和關節而設計，是一款輕盈的凝膠霜，非常適合按摩關節部位（膝蓋、背部、肩部、頸部），不油膩、不粘膩，具有冷敷效果。",
    "img": ""
  },
  {
    "id": "JM-005",
    "cat": "靈活(關節肌肉)系列",
    "name": "小精靈舒活運動油",
    "latin": "Aromalgic-Massage oil Articulations et muscles assouplis",
    "size": "100ml",
    "price": 1080,
    "desc": "質地輕盈的芳香按摩油，是運動前後的好幫手。透過按摩，帶來溫暖流動感，讓肌膚感受舒適自在。",
    "img": ""
  },
  {
    "id": "JM-006",
    "cat": "靈活(關節肌肉)系列",
    "name": "頭部舒效滾珠",
    "latin": "Aromalgic Headache Roll-on",
    "size": "5ml",
    "price": 780,
    "desc": "隨身攜帶，清涼芳香能在頭部沉重或壓力緊繃時，帶來舒緩感受。金屬滾珠同時具有清涼觸感，適合在會議、考試或駕駛前，隨時使用。",
    "img": ""
  },
  {
    "id": "JM-007",
    "cat": "靈活(關節肌肉)系列",
    "name": "舒效芳香凝膠",
    "latin": "Aromalgic Pain-relieving gel - medical device",
    "size": "100ml",
    "price": 1080,
    "desc": "自然植萃外用凝膠，結合植物萃取與精油，專為日常肌膚不適設計。搭配輕柔按摩，可帶來舒緩感受，幫助放鬆並提升使用部位的舒適度。",
    "img": ""
  },
  {
    "id": "AR-001",
    "cat": "ARÔME香氛系列",
    "name": "返璞歸真複方精油",
    "latin": "Synergie Essentielle",
    "size": "30ml",
    "price": 1380,
    "desc": "25種有機精油，極致比例高貴的芳香精華匯聚於此，具有獨特精緻的香味、讓身心靈充滿能量。",
    "img": ""
  },
  {
    "id": "AR-002",
    "cat": "ARÔME香氛系列",
    "name": "冥想",
    "latin": "MEDITATION",
    "size": "30ml",
    "price": 1180,
    "desc": "神聖的氣味，喜馬拉雅高山穗甘松自古以來被受尊敬、「高貴神聖」的植物與錫蘭肉桂融洽氛圍利於冥想，甘松具有精神面的療癒及柑橘類煥然氣息，帶來一種高雅深沉香，緩解壓力與緊張，以嗅覺療法讓心境的穩和進行冥想，享受個人旅程心靈的釋放。",
    "img": ""
  },
  {
    "id": "AR-003",
    "cat": "ARÔME香氛系列",
    "name": "陽光橙橘",
    "latin": "ZESTE",
    "size": "30ml",
    "price": 1180,
    "desc": "橘有如「太陽」的能量，無時無刻的陪伴在您的身邊。檸檬果皮醞釀出輝煌氣息的音符，萊姆、野薄荷、八角滋補香氣，一個正閃亮的嗅覺爆炸，將提升你的樂觀和熱情！陽光橙橘多種微妙且具備提振精神的橙類精油精心混搭而成，活力中溫和清爽，帶來放鬆和愉悅。",
    "img": ""
  },
  {
    "id": "AR-004",
    "cat": "ARÔME香氛系列",
    "name": "普羅旺斯",
    "latin": "PROVENCE",
    "size": "30ml",
    "price": 1180,
    "desc": "豐富多層次的氣味，如同五彩繽紛的樂園。想像漫步在普羅旺斯的一片薰衣草花海中，在薰衣草和迷迭香的精緻香氣與絲柏的木質香氣，溫暖的氣息嗅覺氛圍中度過了浪漫的一天。普羅旺斯大自然花香，讓您有高揚的幸福感。",
    "img": ""
  },
  {
    "id": "AR-005",
    "cat": "ARÔME香氛系列",
    "name": "活力能量",
    "latin": "VITALITE",
    "size": "30ml",
    "price": 1180,
    "desc": "強化自然抵抗「身體的良葉」有助於身體的自癒力，清新刺激的活性成分有如暢快的主和弦滿載著活力與和諧，清涼感穿插著居家室內空氣中，在冬季與季節變換時期，幫助加強身體強壯，支持身體的活力。",
    "img": ""
  },
  {
    "id": "AR-006",
    "cat": "ARÔME香氛系列",
    "name": "貴族尤加利",
    "latin": "EUCALY'PUR",
    "size": "30ml",
    "price": 1180,
    "desc": "『森.林.木』所有威嚴，綠是五感之中與感官嗅覺最深層關係。具有新鮮空氣，氣味的高雅體驗森林的甜味和能量，提供日常保護放您順暢呼吸。清新的融合，優異抗菌作用迅速通過擴散和淨化，居家的空氣煥然一新，使呼吸更容易，讓全家大小擁有一個最佳的呼吸舒適的空間。",
    "img": ""
  },
  {
    "id": "AR-007",
    "cat": "ARÔME香氛系列",
    "name": "禪",
    "latin": "ZEN",
    "size": "30ml",
    "price": 1180,
    "desc": "寧靜和舒緩的氛圍，精湛的芳香協同活躍，調和身心如一彿「禪的境界」。藉其紅橘D-檸檬烯活性芳香，調節中樞神經運行正常，在緊張的情況下幫助管理日常壓力，恢復平靜帶給您柔軟、放鬆和美好的感覺。神秘的雪松與柑橘芳香鍵的混合香調的微妙成分同時提供了一個真正的嗅覺快感，使其更專注於眼前的事情。",
    "img": ""
  },
  {
    "id": "AR-008",
    "cat": "ARÔME香氛系列",
    "name": "甜睡眠",
    "latin": "MSOMMEIL",
    "size": "30ml",
    "price": 1180,
    "desc": "放鬆與寧靜的夜晚。羅馬洋甘菊和紅橘的微妙、舒緩香味，讓您在寧靜中入睡，享受寧靜睡眠的好處。",
    "img": ""
  },
  {
    "id": "AR-009",
    "cat": "ARÔME香氛系列",
    "name": "生活享受",
    "latin": "BIEN",
    "size": "30ml",
    "price": 1280,
    "desc": "優質的生活節奏。伊蘭伊蘭和大馬士革玫瑰，家裡的溫馨溫暖氣息，讓「全家」享受放鬆和幸福的時刻。",
    "img": ""
  },
  {
    "id": "AR-010",
    "cat": "ARÔME香氛系列",
    "name": "甜蜜舒適時光",
    "latin": "gourmandise",
    "size": "30ml",
    "price": 1280,
    "desc": "香草和肉桂的舒適香氣，享受柔和甜美的香氣。令人欣慰甜蜜、歡樂和滿足。",
    "img": ""
  },
  {
    "id": "AR-011",
    "cat": "ARÔME香氛系列",
    "name": "豐盛富足",
    "latin": "LES DIFFUSABLES ESPRIT DE FETE",
    "size": "30ml",
    "price": 1180,
    "desc": "豐盛的氣味感受到富足。提供豐富微妙的嗅覺體驗，憑藉其宜人的香氣，愉悅感官。微妙香氣和溫暖氣息設計，營造出宜人而微妙的嗅覺氛圍，邀請您享受豐盛富足愉悅時刻。",
    "img": ""
  },
  {
    "id": "DIF-001",
    "cat": "芳香儀/芳香用品系列",
    "name": "Izzy 活氧機",
    "latin": "DIFFUSEUR IZZY NOMADE CE",
    "size": "1座",
    "price": 2580,
    "desc": "",
    "img": ""
  },
  {
    "id": "DIF-002",
    "cat": "芳香儀/芳香用品系列",
    "name": "joy喜悅活氧機",
    "latin": "Joy Diffuser",
    "size": "1座",
    "price": 2580,
    "desc": "",
    "img": ""
  },
  {
    "id": "DIF-003",
    "cat": "芳香儀/芳香用品系列",
    "name": "芳香手環",
    "latin": "",
    "size": "個",
    "price": 780,
    "desc": "",
    "img": ""
  },
  {
    "id": "DIF-004",
    "cat": "芳香儀/芳香用品系列",
    "name": "Cera活氧機上蓋",
    "latin": "Cera Essential Oil Diffuser",
    "size": "1座",
    "price": 1180,
    "desc": "",
    "img": ""
  },
  {
    "id": "DIF-005",
    "cat": "芳香儀/芳香用品系列",
    "name": "Cera 活氧機",
    "latin": "DIFFUSEUR CERA CLASSIC",
    "size": "1座",
    "price": 3280,
    "desc": "",
    "img": ""
  },
  {
    "id": "NT-001",
    "cat": "中性調配系列",
    "name": "自然潔淨凝膠",
    "latin": "neutral gel",
    "size": "500ml",
    "price": 990,
    "desc": "臉部，身體，頭髮使用的「有機中性清潔凝膠」。天然有機植物成分，成為健康皮膚的最佳選擇。適合全膚質，可滿足全家人的需求，也可供嬰兒（從出生起）使用。提供溫和的清潔效果，可作為獨立產品使用，也可作為自製沐浴露、洗髮水或清潔劑的基礎。100%天然，無香料、0%過敏原、無染料、無硫酸鹽，尊重皮膚和地球。",
    "img": ""
  },
  {
    "id": "NT-002",
    "cat": "中性調配系列",
    "name": "中性保濕乳",
    "latin": "Lait Hydratant Neutre",
    "size": "250ml",
    "price": 890,
    "desc": "為肌膚帶來柔軟和保護，可以單獨使用，也可以作為DIY基礎乳液，根據需要量身定制。也可額外添加精油與植物油為您的護理升級。無香料，無染料，適合出生後每天使用。",
    "img": ""
  },
  {
    "id": "SUM-001",
    "cat": "夏日系列",
    "name": "植防護噴霧",
    "latin": "Organic Aromatic Body Spray – Anti-Mosquito",
    "size": "75ml",
    "price": 790,
    "desc": "結合6種天然植物精華與Citrodiol®活性來源成分，打造輕盈清爽的日常保護。氣味自然宜人，不黏膩、好吸收，適合全家外出使用。",
    "img": ""
  },
  {
    "id": "BB-001",
    "cat": "媽媽寶寶系列",
    "name": "哺育修復乳",
    "latin": "MATERNITE BAUME CREVASSES",
    "size": "15ml",
    "price": 680,
    "desc": "是母親在哺乳期間的理想伴侶。保護、舒緩和修復敏感或破裂的乳頭並提供舒適感和最佳保護。",
    "img": ""
  },
  {
    "id": "BB-002",
    "cat": "媽媽寶寶系列",
    "name": "輕盈腿乳",
    "latin": "Lait jambes légères",
    "size": "200ml",
    "price": 1080,
    "desc": "舒緩懷孕沉重和疲倦的腿部感覺。質地輕盈、不粘膩（可以在哺乳期使用）。",
    "img": ""
  },
  {
    "id": "BB-003",
    "cat": "媽媽寶寶系列",
    "name": "紋路護理油",
    "latin": "MAT HUILE VERGETURES",
    "size": "100ml",
    "price": 1280,
    "desc": "100%有機滋養植物油，提供柔軟和舒適感來支持皮膚的彈性。可以迅速滲透，使皮膚柔軟光滑，以緩解瘙癢、緊繃感，並可在母乳喂養期間使用。",
    "img": ""
  },
  {
    "id": "BB-004",
    "cat": "媽媽寶寶系列",
    "name": "美腳輕盈",
    "latin": "CIRCULAROM SPRAY CORP JAMBES LEGERES",
    "size": "75ml",
    "price": 980,
    "desc": "專為久站、久坐及運動後的雙腿設計，迅速釋放局部沉重感，並透過精油分子的滲透，提供持久的清涼與舒壓護理。",
    "img": ""
  },
  {
    "id": "BB-005",
    "cat": "媽媽寶寶系列",
    "name": "寶寶跌倒凝膠",
    "latin": "Gel for bumps & bruises",
    "size": "15ml",
    "price": 680,
    "desc": "專為活潑好動的嬰幼兒設計，在孩子探索世界的過程中，針對不可避免的小碰撞，提供即時的冷靜舒緩與深層的肌膚養護。",
    "img": ""
  },
  {
    "id": "BB-006",
    "cat": "媽媽寶寶系列",
    "name": "寶寶防禦按摩油",
    "latin": "IMMUNITY Massage oil",
    "size": "10ml",
    "price": 780,
    "desc": "這款專為嬰幼兒設計的植萃按摩油，在氣候轉涼或環境挑戰較多的時節，為孩子建立一層自然的生理屏障。",
    "img": ""
  },
  {
    "id": "BB-007",
    "cat": "媽媽寶寶系列",
    "name": "寶寶清新凝乳",
    "latin": "Respiratory Balm",
    "size": "40ml",
    "price": 780,
    "desc": "專為嬰幼兒纖弱的生理機能設計。透過清新的氣息與手感按摩，協助孩子在不適時期找回呼吸的節奏與舒適感。",
    "img": ""
  },
  {
    "id": "BB-008",
    "cat": "媽媽寶寶系列",
    "name": "小屁屁呵護香脂",
    "latin": "BAUME ROUGEURS CHANGE",
    "size": "100ml",
    "price": 980,
    "desc": "專為守護嬰兒嬌嫩的臀部肌膚而生。在肌膚表面形成透氣的保護膜，有效隔絕外部刺激，並支持肌膚自有的修復機能。",
    "img": ""
  },
  {
    "id": "BB-009",
    "cat": "媽媽寶寶系列",
    "name": "小肚肚按摩油",
    "latin": "organic belly comfort massage oil",
    "size": "30ml",
    "price": 980,
    "desc": "協助寶寶放鬆腹部，建立舒適的內在平衡。",
    "img": ""
  },
  {
    "id": "BB-010",
    "cat": "媽媽寶寶系列",
    "name": "寶寶舒眠按摩油(有機)",
    "latin": "organic sleep massage oil",
    "size": "30ml",
    "price": 980,
    "desc": "甜美舒緩的香味安撫幫助寶寶入睡，享受寧靜的夜晚。",
    "img": ""
  },
  {
    "id": "BB-011",
    "cat": "媽媽寶寶系列",
    "name": "好夢",
    "latin": "Sleeping blend for diffuser",
    "size": "10ml",
    "price": 780,
    "desc": "安撫、幫助寶寶入睡，享受寧靜的夜晚。",
    "img": ""
  },
  {
    "id": "BB-012",
    "cat": "媽媽寶寶系列",
    "name": "保護",
    "latin": "Mosquito repellent blend for diffuser",
    "size": "10ml",
    "price": 780,
    "desc": "驅除惱人蚊蟲，結合多種HECT精油。",
    "img": ""
  },
  {
    "id": "RB-001",
    "cat": "AROMABOOST 芳香能量系列",
    "name": "放鬆滾珠-紫",
    "latin": "ROLLER RELAX",
    "size": "5ml",
    "price": 680,
    "desc": "溫和草本香氣，陪伴日常休憩，營造安定舒適的氛圍。",
    "img": ""
  },
  {
    "id": "RB-002",
    "cat": "AROMABOOST 芳香能量系列",
    "name": "活力滾珠-橘",
    "latin": "ROLLER ENERGY",
    "size": "5ml",
    "price": 680,
    "desc": "草本香氣，喚醒清新氛圍，讓身心感覺更有朝氣。",
    "img": ""
  },
  {
    "id": "RB-003",
    "cat": "AROMABOOST 芳香能量系列",
    "name": "消化滾珠-綠",
    "latin": "ROLLER DIET",
    "size": "5ml",
    "price": 680,
    "desc": "與身心相伴的草本能量，陪伴日常的輕盈感受。",
    "img": ""
  },
  {
    "id": "RB-004",
    "cat": "AROMABOOST 芳香能量系列",
    "name": "安眠滾珠-藍",
    "latin": "ROLLER SLEEP",
    "size": "5ml",
    "price": 680,
    "desc": "您更容易入睡，適合放鬆和準備睡眠，快速恢復平靜和安寧的睡眠。舒緩神經系統和放鬆肌肉。",
    "img": ""
  },
  {
    "id": "RB-005",
    "cat": "AROMABOOST 芳香能量系列",
    "name": "平衡滾珠-黃",
    "latin": "ROLLER FOCUS",
    "size": "5ml",
    "price": 680,
    "desc": "帶來明亮與專注的氛圍。適合在學習或工作時使用，營造清爽自在的環境。自然芳香，陪伴日常思緒整理，帶來清新愉悅感受。",
    "img": ""
  },
  {
    "id": "RB-006",
    "cat": "AROMABOOST 芳香能量系列",
    "name": "保護力滾珠-藍綠",
    "latin": "ROLLER IMMUNITY",
    "size": "5ml",
    "price": 680,
    "desc": "草本與辛香調的和諧組合，帶來清新活力氛圍。多層次植萃芬芳，營造煥然一新的感受。適合日常使用，讓環境更清爽自在。",
    "img": ""
  },
  {
    "id": "RB-007",
    "cat": "AROMABOOST 芳香能量系列",
    "name": "有機能量噴霧",
    "latin": "ENERGY SPRAY",
    "size": "50ml",
    "price": 890,
    "desc": "隨時隨地，讓生活充滿清新與活力氣息。即時綻放草本香氣，帶來清爽明亮的感受。",
    "img": ""
  },
  {
    "id": "RB-008",
    "cat": "AROMABOOST 芳香能量系列",
    "name": "有機安眠噴霧",
    "latin": "Sleep Spray",
    "size": "50ml",
    "price": 890,
    "desc": "為夜晚注入放鬆氛圍，伴隨天然香氣，讓身心沉澱安定。溫和植萃芬芳，營造靜謐舒適的夜晚時光。",
    "img": ""
  },
  {
    "id": "OT-001",
    "cat": "其他系列",
    "name": "清膚淨疣精華",
    "latin": "Aromaderm Solution anti-verrues pieds et mains",
    "size": "10ml",
    "price": 680,
    "desc": "專為手部、足部常見的粗糙小突起肌膚設計。蓖麻油保濕滲透、維持肌膚柔軟；茶樹與白千層潔淨肌膚、維持健康狀態；中國肉桂強化配方。天然精油活性高，敏弱肌請先做小範圍測試。",
    "img": ""
  }
];
