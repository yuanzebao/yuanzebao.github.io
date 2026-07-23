function normalizeTranslations(value) {
  const replacements = {
    'Technology Platform': 'Technology Platforms',
    'Patent Technology': 'Patented Technologies',
    'Research Directions': 'Research Areas',
    'Research Direction': 'Research Areas'
  };

  if (Array.isArray(value)) {
    return value.map(normalizeTranslations);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, childValue]) => [key, normalizeTranslations(childValue)])
    );
  }

  if (typeof value === 'string') {
    return replacements[value] || value;
  }

  return value;
}

const siteTranslations = normalizeTranslations({
  index: {
    title: {
      zh: 'Revita Biotec | 棣栭〉',
      en: 'Revita Biotec | Home'
    },
    description: {
      zh: 'Revita Biotec 涓撴敞鎶楄“鑰佷笌鐨偆淇绉戠爺锛屾彁渚涘畨鍏ㄣ€侀珮鏁堢殑鍒涙柊鎶よ偆瑙ｅ喅鏂规銆?,
      en: 'Revita Biotec focuses on anti-aging and skin repair science, delivering safe and effective skincare innovations.'
    },
    'nav.home': { zh: '棣栭〉', en: 'Home' },
    'nav.about': { zh: '鐟炵淮濉斾粙缁?, en: 'About Revita' },
    'nav.about.businessModel': { zh: '涓氬姟妯″紡', en: 'Business Model' },
    'nav.about.founder': { zh: '鍒涘浜轰粙缁?, en: 'Founder Introduction' },
    'nav.about.patent': { zh: '涓撳埄鎶€鏈?, en: 'Patented Technologies' },
    'nav.about.research': { zh: '鐮斿彂鏂瑰悜', en: 'Research Areas' },
    'nav.products': { zh: '浜у搧涓績', en: 'Product Center' },
    'nav.news': { zh: '鏈€鏂板姩鎬?, en: 'Latest Updates' },
    'nav.contact': { zh: '鑱旂郴鎴戜滑', en: 'Contact Us' },
    'nav.faq': { zh: '甯歌闂', en: 'FAQ' },
    'hero.eyebrow': { zh: 'Science for Youthful Skin', en: 'Science for Youthful Skin' },
    'hero.title': { zh: '閲嶅惎鐢熷懡鍔涳紝鐒曟椿姣忎竴浠芥湭鏉?, en: 'Revive Vitality, Awaken Every Future' },
    'hero.lead1': {
      zh: 'Revita Biotec 灏嗗墠娌?span class="highlight">鐢熺墿绉戞妧</span>铻嶅叆鎶楄“鍜岀毊鑲や慨澶嶇爺绌讹紝浠ョ瀛︿弗璋ㄧ殑鎬佸害鎺㈢储鐨偆鍋ュ悍鐨勬湰璐ㄣ€?,
      en: 'Revita Biotec integrates cutting-edge <span class="highlight">biotechnology</span> into anti-aging and skin repair research, exploring the essence of skin health with scientific rigor.'
    },
    'hero.lead2': {
      zh: '鎴戜滑涓撴敞浜?span class="highlight">姘村嚌鑳舵暦鏂?/span>銆?span class="highlight">寰拡閫掕嵂绯荤粺</span>绛夋牳蹇冩妧鏈紝鎵撻€犲畨鍏ㄣ€侀珮鏁堢殑鍒涙柊鎶よ偆瑙ｅ喅鏂规銆?,
      en: 'We focus on core technologies including <span class="highlight">hydrogel dressings</span> and <span class="highlight">microneedle delivery systems</span>, creating safe and effective innovative skincare solutions.'
    },
    'hero.cta1': { zh: '浜嗚В鍏徃', en: 'Learn About Us' },
    'hero.cta2': { zh: '鎺㈢储鐮斿彂', en: 'Explore Research' },
    'hero.cta3': { zh: '绔嬪嵆鑱旂郴', en: 'Contact Now' },
    'overview.title': { zh: '鏍稿績鏈嶅姟涓庢妧鏈柟鍚?, en: 'Core Services & Technology' },
    'overview.text': { zh: '鍥寸粫鐨偆鍋ュ悍涓庢姉琛拌€侀鍩燂紝鎴戜滑鎻愪緵鍏ㄦ柟浣嶇殑鐮斿彂涓庤浆鍖栨湇鍔°€?, en: 'We provide comprehensive R&D and translation services in skin health and anti-aging.' },
    'card.about.title': { zh: '鍏充簬鎴戜滑', en: 'About Us' },
    'card.about.text': { zh: '浜嗚В Revita Biotec 鐨勪娇鍛姐€佸洟闃熶笌绉戝鎰挎櫙銆?, en: 'Discover Revita Biotec鈥檚 mission, team, and scientific vision.' },
    'card.research.title': { zh: '鐮斿彂鏂瑰悜', en: 'Research Areas' },
    'card.research.text': { zh: '鏌ョ湅鎴戜滑鍦ㄦ姉琛颁笌鐨偆淇棰嗗煙鐨勭爺鍙戞垬鐣ヤ笌椤圭洰銆?, en: 'Explore our strategic efforts in anti-aging and skin repair research.' },
    'card.patent.title': { zh: '涓撳埄鎶€鏈?, en: 'Patented Technologies' },
    'card.patent.text': { zh: '鎺㈢储鎴戜滑鐨勬按鍑濊兌鏁锋枡涓庡井閽堥€掕嵂绯荤粺涓撳埄鎶€鏈€?, en: 'Explore our patented hydrogel dressing and microneedle delivery technologies.' },
    'card.contact.title': { zh: '鑱旂郴鎴戜滑', en: 'Contact Us' },
    'card.contact.text': { zh: '閫氳繃閭鎴栫數璇濅笌鎴戜滑鍙栧緱鑱旂郴锛岃幏鍙栧悎浣滄満浼氥€?, en: 'Reach out by email or phone to explore cooperation opportunities.' },
    'card.link': { zh: '鍓嶅線', en: 'Visit' },
    'footer.text': { zh: '漏 2026 Revita Biotec銆備笓娉ㄦ姉琛拌€佷笌鐨偆淇绉戠爺銆?, en: '漏 2026 Revita Biotec. Focused on anti-aging and skin repair research.' }
  },
  about: {
    title: { zh: 'Revita Biotec | 鍏充簬鎴戜滑', en: 'Revita Biotec | About Us' },
    description: { zh: '浜嗚В Revita Biotec 鐨勪娇鍛姐€佸洟闃熷拰绉戝鎰挎櫙銆?, en: 'Learn about Revita Biotec鈥檚 mission, team, and scientific vision.' },
    'nav.home': { zh: '棣栭〉', en: 'Home' },
    'nav.about': { zh: '鐟炵淮濉斾粙缁?, en: 'About Revita' },
    'nav.about.businessModel': { zh: '涓氬姟妯″紡', en: 'Business Model' },
    'nav.about.founder': { zh: '鍒涘浜轰粙缁?, en: 'Founder Introduction' },
    'nav.about.patent': { zh: '涓撳埄鎶€鏈?, en: 'Patented Technologies' },
    'nav.about.research': { zh: '鐮斿彂鏂瑰悜', en: 'Research Areas' },
    'nav.products': { zh: '浜у搧涓績', en: 'Product Center' },
    'nav.news': { zh: '鏈€鏂板姩鎬?, en: 'Latest Updates' },
    'nav.contact': { zh: '鑱旂郴鎴戜滑', en: 'Contact Us' },
    'nav.faq': { zh: '甯歌闂', en: 'FAQ' },
    'hero.eyebrow': { zh: 'About Revita', en: 'About Revita' },
    'hero.title': { zh: '绉戝椹卞姩鐨勭毊鑲ゅ仴搴峰垱鏂?, en: 'Science-Driven Skin Health Innovation' },
    'hero.lead1': {
      zh: '<span class="highlight">Revita Biotec</span>姹囪仛鐢熺墿瀛︿笌鐨偆绉戝棰嗗煙鐨勪笓涓氬姏閲忥紝寤虹珛浠庡熀纭€鐮旂┒鍒颁复搴婅浆鍖栫殑瀹屾暣绉戠爺浣撶郴銆?,
      en: '<span class="highlight">Revita Biotec</span> brings together expertise in biology and skin science to establish a complete research system from basic research to clinical translation.'
    },
    'hero.lead2': {
      zh: '鎴戜滑鑷村姏浜庨€氳繃<span class="highlight">姘村嚌鑳?/span>涓?span class="highlight">寰拡</span>鎶€鏈钩鍙帮紝鎺ㄥ姩鎶楄“鑰佷笌鐨偆淇棰嗗煙鐨勭獊鐮存€у垱鏂般€?,
      en: 'We are committed to driving breakthrough innovations in anti-aging and skin repair through <span class="highlight">hydrogel</span> and <span class="highlight">microneedle</span> technology platforms.'
    },
    'content.section1.title': { zh: '鎴戜滑鐨勪娇鍛?, en: 'Our Mission' },
    'content.section1.text': { zh: '閫氳繃绯荤粺鎬х鐮斾笌涓ユ牸瀹為獙锛屾帹鍔?span class="highlight">缁嗚優鎶楄“</span>銆?span class="highlight">鑳跺師鍐嶇敓</span>鍜屽睆闅滀慨澶嶆柟鍚戠殑鎶€鏈獊鐮淬€?, en: 'Drive breakthroughs in <span class="highlight">cellular anti-aging</span>, <span class="highlight">collagen renewal</span>, and barrier repair through systematic research and rigorous testing.' },
    'content.section2.title': { zh: '鍥㈤槦缁勬垚', en: 'Team Composition' },
    'content.section2.text': { zh: '鍥㈤槦鐢辩粏鑳炵敓鐗╁瀹躲€佺毊鑲ょ瀛︿笓瀹跺拰閰嶆柟宸ョ▼甯堢粍鎴愶紝涓撴敞浜庡皢瀹為獙瀹ゆ垚鏋滆浆鍖栦负瀹炵敤鏂规銆?, en: 'Our team includes cell biologists, skin science experts, and formulation engineers focused on turning lab results into practical solutions.' },
    'content.section3.title': { zh: '涓撳埄鎶€鏈?, en: 'Patented Technologies' },
    'content.section3.text': { zh: '渚濇墭<span class="highlight">姘村嚌鑳舵暦鏂?/span>銆?span class="highlight">寰拡閫掕嵂</span>涓庢姉琛版椿鎬ф垚鍒嗙爺鍙戝钩鍙帮紝鎸佺画鎺ㄨ繘涓撳埄鍖栨妧鏈竷灞€涓庝骇涓氳浆鍖栥€?, en: 'Built on <span class="highlight">hydrogel dressings</span>, <span class="highlight">microneedle delivery</span> and anti-aging active ingredient platforms, we continue to advance patented technologies and industrial transformation.' },
    'content.section4.title': { zh: '鐮斿彂鏂瑰悜', en: 'Research Areas' },
    'content.section4.text': { zh: '閲嶇偣鑱氱劍鐨偆灞忛殰淇銆佽兌鍘熷啀鐢熴€佹姉姘у寲鎶楄“銆佸井閽堥€掕嵂涓庝釜鎬у寲鎶よ偆瑙ｅ喅鏂规鐮斿彂銆?, en: 'Focused on skin barrier repair, collagen regeneration, antioxidant anti-aging, microneedle delivery and personalized skincare solution development.' },
    'return.home': { zh: '杩斿洖棣栭〉', en: 'Return Home' },
    'footer.text': { zh: '漏 2026 Revita Biotec銆備笓娉ㄦ姉琛拌€佷笌鐨偆淇绉戠爺銆?, en: '漏 2026 Revita Biotec. Focused on anti-aging and skin repair research.' }
  },
  contact: {
    title: { zh: 'Revita Biotec | 鑱旂郴鎴戜滑', en: 'Revita Biotec | Contact' },
    description: { zh: '閫氳繃閭銆佺數璇濇垨鍦板潃鑱旂郴 Revita Biotec锛岃幏鍙栧悎浣滀笌鍜ㄨ娓犻亾銆?, en: 'Contact Revita Biotec by email, phone, or address for collaboration and consultation.' },
    'nav.home': { zh: '棣栭〉', en: 'Home' },
    'nav.about': { zh: '鐟炵淮濉斾粙缁?, en: 'About Revita' },
    'nav.about.businessModel': { zh: '涓氬姟妯″紡', en: 'Business Model' },
    'nav.about.founder': { zh: '鍒涘浜轰粙缁?, en: 'Founder Introduction' },
    'nav.about.patent': { zh: '涓撳埄鎶€鏈?, en: 'Patented Technologies' },
    'nav.about.research': { zh: '鐮斿彂鏂瑰悜', en: 'Research Areas' },
    'nav.products': { zh: '浜у搧涓績', en: 'Product Center' },
    'nav.news': { zh: '鏈€鏂板姩鎬?, en: 'Latest Updates' },
    'nav.contact': { zh: '鑱旂郴鎴戜滑', en: 'Contact Us' },
    'nav.faq': { zh: '甯歌闂', en: 'FAQ' },
    'contact.hero.title': { zh: '鑱旂郴鎴戜滑', en: 'Contact Us' },
    'contact.hero.subtitle': { zh: 'CONTACT US', en: '鑱旂郴鎴戜滑' },
    'contact.company.name': { zh: '涓婃捣鐟炵淮濉旂敓鐗╃鎶€鏈夐檺鍏徃', en: 'Shanghai Revita Biotec Co., Ltd.' },
    'contact.phone.label': { zh: '鐢佃瘽', en: 'Phone' },
    'contact.phone.value': { zh: '+86 021 5888 8888', en: '+86 021 5888 8888' },
    'contact.email.label': { zh: '閭', en: 'Email' },
    'contact.email.value': { zh: '2449703904@qq.com', en: '2449703904@qq.com' },
    'contact.address.label': { zh: '鍦板潃', en: 'Address' },
    'contact.address.value': { zh: '涓婃捣甯傛郸涓滄柊鍖哄紶姹熼珮绉戞妧鍥尯', en: 'Zhangjiang High-Tech Park, Pudong New Area, Shanghai' },
    'contact.wechat.label': { zh: '浼佷笟寰俊', en: 'WeChat' },
    'contact.wechat.alt': { zh: '浼佷笟寰俊', en: 'WeChat QR Code' },
    'contact.map.placeholder': { zh: '鍦板浘宓屽叆鍖哄煙', en: 'Map Area' },
    'contact.map.copyright': { zh: '漏 2026 鐧惧害鍦板浘', en: '漏 2026 Baidu Maps' },
    'footer.text': { zh: '漏 2026 Revita Biotec銆備笓娉ㄦ姉琛拌€佷笌鐨偆淇绉戠爺銆?, en: '漏 2026 Revita Biotec. Focused on anti-aging and skin repair research.' }
  },
  research: {
    title: { zh: 'Revita Biotec | 浜у搧涓績', en: 'Revita Biotec | Product Center' },
    description: { zh: '鏌ョ湅 Revita Biotec 鍦ㄦ姉琛拌€佷笌鐨偆淇棰嗗煙鐨勪骇鍝佸睍绀恒€?, en: 'Explore Revita Biotec鈥檚 product showcase in anti-aging and skin repair.' },
    'nav.home': { zh: '棣栭〉', en: 'Home' },
    'nav.about': { zh: '鐟炵淮濉斾粙缁?, en: 'About Revita' },
    'nav.about.businessModel': { zh: '涓氬姟妯″紡', en: 'Business Model' },
    'nav.about.founder': { zh: '鍒涘浜轰粙缁?, en: 'Founder Introduction' },
    'nav.about.patent': { zh: '涓撳埄鎶€鏈?, en: 'Patented Technologies' },
    'nav.about.research': { zh: '鐮斿彂鏂瑰悜', en: 'Research Areas' },
    'nav.products': { zh: '浜у搧涓績', en: 'Product Center' },
    'nav.news': { zh: '鏈€鏂板姩鎬?, en: 'Latest Updates' },
    'nav.contact': { zh: '鑱旂郴鎴戜滑', en: 'Contact Us' },
    'nav.faq': { zh: '甯歌闂', en: 'FAQ' },
    'hero.eyebrow': { zh: 'Product Center', en: 'Product Center' },
    'hero.title': { zh: '鐨偆淇姢涓庢姉琛颁骇鍝佸睍绀哄钩鍙?, en: 'Skin Repair & Anti-Aging Product Showcase' },
    'hero.lead1': {
      zh: '鍩轰簬<span class="highlight">姘村嚌鑳?/span>涓?span class="highlight">寰拡</span>鏍稿績鎶€鏈钩鍙帮紝鎴戜滑寮€鍙戜簡涓€绯诲垪閽堝涓嶅悓鐨偆闂鐨勫垱鏂拌В鍐虫柟妗堛€?,
      en: 'Based on our <span class="highlight">hydrogel</span> and <span class="highlight">microneedle</span> core technology platforms, we have developed innovative solutions for various skin concerns.'
    },
    'hero.lead2': {
      zh: '姣忔浜у搧閮界粡杩囦弗鏍肩殑绉戝楠岃瘉锛岀‘淇濆畨鍏ㄦ€т笌鏈夋晥鎬э紝涓虹敤鎴峰甫鏉ョ湡姝ｇ殑鐨偆鍋ュ悍鏀瑰杽銆?,
      en: 'Each product undergoes rigorous scientific validation to ensure safety and efficacy, delivering genuine skin health improvements.'
    },
    'content.section1.title': { zh: '姘村嚌鑳舵暦鏂欑郴鍒?, en: 'Hydrogel Dressing Series' },
    'content.section1.text': { zh: '楂樹繚婀裤€佹煍鎬ф敮鎾戠殑<span class="highlight">姘村嚌鑳舵暦鏂?/span>锛岄€傜敤浜庡睆闅滃彈鎹熴€佹晱鎰熶慨鎶や笌鏈悗鎶ょ悊鍦烘櫙銆?, en: 'High-moisture, flexible <span class="highlight">hydrogel dressings</span> suitable for barrier-damaged, sensitive skin and post-procedure care.' },
    'content.section2.title': { zh: '寰拡閫掕嵂浜у搧', en: 'Microneedle Delivery Products' },
    'content.section2.text': { zh: '<span class="highlight">寰拡閫掕嵂绯荤粺</span>閫氳繃寰皬閽堥亾灏嗘椿鎬ф垚鍒嗙簿鍑嗛€掗€佽嚦鐨偆娣卞眰锛屾彁鍗囨笚閫忔晥鐜囦笌淇姢鏁堟灉銆?, en: '<span class="highlight">Microneedle delivery systems</span> precisely deliver active ingredients deep into the skin, enhancing penetration and repair effectiveness.' },
    'content.section3.title': { zh: '鎶楄“娲绘€ф垚鍒?, en: 'Anti-Aging Active Ingredients' },
    'content.section3.text': { zh: '鍩轰簬鑷富鐮斿彂鐨勬姉琛版椿鎬ф垚鍒嗭紝缁撳悎鐢熺墿鏉愭枡杞戒綋鎶€鏈紝瀹炵幇楂樻晥瀹夊叏鐨勭毊鑲ゆ姉琛版晥鏋溿€?, en: 'Based on proprietary anti-aging active ingredients combined with biomaterial carrier technology, delivering safe and effective anti-aging results.' },
    'return.home': { zh: '杩斿洖棣栭〉', en: 'Return Home' },
    'footer.text': { zh: '漏 2026 Revita Biotec銆備笓娉ㄦ姉琛拌€佷笌鐨偆淇绉戠爺銆?, en: '漏 2026 Revita Biotec. Focused on anti-aging and skin repair research.' }
  },
  advantages: {
    title: { zh: 'Revita Biotec | 浼樺娍浜偣', en: 'Revita Biotec | Advantages' },
    description: { zh: '灞曠ず Revita Biotec 鍦ㄧ爺鍙戙€佸垱鏂板拰鍥㈤槦鍗忎綔鏂归潰鐨勬牳蹇冧紭鍔裤€?, en: 'Showcase Revita Biotec鈥檚 core strengths in R&D, innovation, and teamwork.' },
    'nav.home': { zh: '棣栭〉', en: 'Home' },
    'nav.about': { zh: '鐟炵淮濉斾粙缁?, en: 'About Revita' },
    'nav.about.businessModel': { zh: '涓氬姟妯″紡', en: 'Business Model' },
    'nav.about.founder': { zh: '鍒涘浜轰粙缁?, en: 'Founder Introduction' },
    'nav.about.patent': { zh: '涓撳埄鎶€鏈?, en: 'Patented Technologies' },
    'nav.about.research': { zh: '鐮斿彂鏂瑰悜', en: 'Research Areas' },
    'nav.products': { zh: '浜у搧涓績', en: 'Product Center' },
    'nav.news': { zh: '鏈€鏂板姩鎬?, en: 'Latest Updates' },
    'nav.contact': { zh: '鑱旂郴鎴戜滑', en: 'Contact Us' },
    'nav.faq': { zh: '甯歌闂', en: 'FAQ' },
    'hero.eyebrow': { zh: 'Advantages', en: 'Advantages' },
    'hero.title': { zh: '鎴戜滑鐨勬牳蹇冪珵浜夊姏', en: 'Our Core Competencies' },
    'hero.lead1': {
      zh: 'Revita Biotec 鎷ユ湁<span class="highlight">姘村嚌鑳舵暦鏂?/span>涓?span class="highlight">寰拡閫掕嵂绯荤粺</span>涓ゅぇ鏍稿績涓撳埄鎶€鏈钩鍙帮紝鏋勫缓浜嗗潥瀹炵殑鎶€鏈鍨掋€?,
      en: 'Revita Biotec possesses two core patented technology platforms: <span class="highlight">hydrogel dressings</span> and <span class="highlight">microneedle delivery systems</span>, establishing strong technological barriers.'
    },
    'hero.lead2': {
      zh: '鎴戜滑鐨勪紭鍔垮湪浜庡皢鍩虹绉戠爺涓庝骇涓氳浆鍖栫揣瀵嗙粨鍚堬紝瀹炵幇浠庡疄楠屽鍒板競鍦虹殑瀹屾暣闂幆銆?,
      en: 'Our strength lies in closely integrating basic research with industrial translation, creating a complete closed loop from lab to market.'
    },
    'card.science.title': { zh: '绉戝椹卞姩', en: 'Science Driven' },
    'card.science.text': { zh: '姣忎竴涓骇鍝佽璁￠兘鍩轰簬涓ヨ皑鐨勭瀛﹂獙璇佷笌瀹為獙鏁版嵁銆?, en: 'Each product design is based on rigorous scientific validation and experimental data.' },
    'card.rd.title': { zh: '鐮斿彂浼樺娍', en: 'R&D Strength' },
    'card.rd.text': { zh: '鑷爺涓撳埄鎴愬垎涓庨厤鏂瑰伐鑹猴紝鏋勫缓鍙潬鐨勬妧鏈鍨掋€?, en: 'Develop proprietary ingredients and formulation processes to build strong technological barriers.' },
    'card.platform.title': { zh: '鎴愰暱骞冲彴', en: 'Growth Platform' },
    'card.platform.text': { zh: '娆㈣繋蹇楀悓閬撳悎鐨勫悎浣滀紮浼翠笌鍥㈤槦鎴愬憳鍏卞悓鍙備笌鐮斿彂杩涚▼銆?, en: 'We welcome like-minded partners and team members to participate in the R&D process.' },
    'card.eco.title': { zh: '寮€鏀剧敓鎬?, en: 'Open Ecosystem' },
    'card.eco.text': { zh: '榧撳姳鍒涙柊鎺㈢储涓庤法鐣屽悎浣滐紝浼樺寲绉戠爺鏁堢巼鍜屼骇鍝佽惤鍦伴€熷害銆?, en: 'Encourage innovation exploration and cross-industry collaboration to optimize research efficiency and product launch speed.' },
    'return.home': { zh: '杩斿洖棣栭〉', en: 'Return Home' },
    'footer.text': { zh: '漏 2026 Revita Biotec銆備笓娉ㄦ姉琛拌€佷笌鐨偆淇绉戠爺銆?, en: '漏 2026 Revita Biotec. Focused on anti-aging and skin repair research.' }
  },
  businessModel: {
    title: { zh: 'Revita Biotec | 涓氬姟妯″紡', en: 'Revita Biotec | Business Model' },
    description: { zh: '鐟炵淮濉斾笟鍔℃ā寮忎笌鎶€鏈浆鍖栨ā鏉裤€?, en: 'Revita business model and technology transformation template.' },
    'nav.home': { zh: '棣栭〉', en: 'Home' },
    'nav.about': { zh: '鐟炵淮濉斾粙缁?, en: 'About Revita' },
    'nav.about.businessModel': { zh: '涓氬姟妯″紡', en: 'Business Model' },
    'nav.about.founder': { zh: '鍒涘浜轰粙缁?, en: 'Founder Introduction' },
    'nav.about.patent': { zh: '涓撳埄鎶€鏈?, en: 'Patented Technologies' },
    'nav.about.research': { zh: '鐮斿彂鏂瑰悜', en: 'Research Areas' },
    'nav.products': { zh: '浜у搧涓績', en: 'Product Center' },
    'nav.news': { zh: '鏈€鏂板姩鎬?, en: 'Latest Updates' },
    'nav.contact': { zh: '鑱旂郴鎴戜滑', en: 'Contact Us' },
    'nav.faq': { zh: '甯歌闂', en: 'FAQ' },
    'hero.eyebrow': { zh: 'Business Model', en: 'Business Model' },
    'hero.title': { zh: '涓氬姟涓庡悎浣滄ā寮忓睍绀?, en: 'Business and Partnership Model' },
    'hero.lead1': {
      zh: 'Revita Biotec 鍥寸粫<span class="highlight">鐨偆淇姢</span>涓?span class="highlight">鎶楄“</span>涓ゅぇ鏍稿績鏂瑰悜锛屾瀯寤哄鍏冨寲鐨勪笟鍔″竷灞€銆?,
      en: 'Revita Biotec builds a diversified business layout around two core areas: <span class="highlight">skin repair</span> and <span class="highlight">anti-aging</span>.'
    },
    'hero.lead2': {
      zh: '鎴戜滑鎻愪緵鎶€鏈巿鏉冦€佽仈鍚堢爺鍙戙€佷骇鍝佸悎浣滅瓑澶氱鍚堜綔妯″紡锛屼笌鍚堜綔浼欎即鍏卞悓鎺ㄥ姩琛屼笟鍙戝睍銆?,
      en: 'We offer various partnership models including technology licensing, joint R&D, and product cooperation to drive industry development together with partners.'
    },
    'content.section1.title': { zh: '涓氬姟鏉垮潡', en: 'Business Segments' },
    'content.section1.text': { zh: '鐢ㄤ簬灞曠ず鍏徃鍥寸粫鐨偆淇姢涓庢姉琛版柟鍚戠殑涓昏涓氬姟鏉垮潡涓庝骇鍝佽浆鍖栬矾寰勩€?, en: 'Used to showcase the company鈥檚 key business segments and product transformation paths around skin repair and anti-aging.' },
    'content.section2.title': { zh: '鍚堜綔妯″紡', en: 'Partnership Models' },
    'content.section2.text': { zh: '鍙敤浜庝粙缁嶇爺鍙戝悎浣溿€佹妧鏈巿鏉冦€佸搧鐗屽悎浣滀笌浜т笟鍖栧崗鍚屾ā寮忋€?, en: 'Can be used to introduce R&D collaboration, technology licensing, brand cooperation and industrial coordination models.' },
    'return.home': { zh: '杩斿洖棣栭〉', en: 'Return Home' },
    'footer.text': { zh: '漏 2026 Revita Biotec銆備笓娉ㄦ姉琛拌€佷笌鐨偆淇绉戠爺銆?, en: '漏 2026 Revita Biotec. Focused on anti-aging and skin repair research.' }
  },
  founder: {
    title: { zh: 'Revita Biotec | 鍒涘浜轰粙缁?, en: 'Revita Biotec | Founder Introduction' },
    description: { zh: '鍒涘浜轰粙缁嶄笌绉戠爺鑳屾櫙妯℃澘銆?, en: 'Founder introduction and research background template.' },
    'nav.home': { zh: '棣栭〉', en: 'Home' },
    'nav.about': { zh: '鐟炵淮濉斾粙缁?, en: 'About Revita' },
    'nav.about.businessModel': { zh: '涓氬姟妯″紡', en: 'Business Model' },
    'nav.about.founder': { zh: '鍒涘浜轰粙缁?, en: 'Founder Introduction' },
    'nav.about.patent': { zh: '涓撳埄鎶€鏈?, en: 'Patented Technologies' },
    'nav.about.research': { zh: '鐮斿彂鏂瑰悜', en: 'Research Areas' },
    'nav.products': { zh: '浜у搧涓績', en: 'Product Center' },
    'nav.news': { zh: '鏈€鏂板姩鎬?, en: 'Latest Updates' },
    'nav.contact': { zh: '鑱旂郴鎴戜滑', en: 'Contact Us' },
    'nav.faq': { zh: '甯歌闂', en: 'FAQ' },
    'hero.eyebrow': { zh: 'Founder', en: 'Founder' },
    'hero.title': { zh: '浜虹墿灞ュ巻涓庝紒涓氭効鏅?, en: 'Biography and Vision' },
    'hero.lead1': {
      zh: '鍒涘浜哄洟闃熸嫢鏈夋繁鍘氱殑<span class="highlight">鐢熺墿鍖诲</span>涓?span class="highlight">鐨偆绉戝</span>鑳屾櫙锛岃嚧鍔涗簬灏嗗墠娌跨鐮旀垚鏋滆浆鍖栦负瀹為檯搴旂敤銆?,
      en: 'The founder team has strong backgrounds in <span class="highlight">biomedicine</span> and <span class="highlight">skin science</span>, committed to translating cutting-edge research into practical applications.'
    },
    'hero.lead2': {
      zh: '鍑€熷鐨偆鍋ュ悍棰嗗煙鐨勬繁鍒荤悊瑙ｏ紝鎴戜滑姝ｅ湪鏋勫缓涓€涓互绉戝涓洪┍鍔ㄧ殑鍒涙柊鍨嬩紒涓氥€?,
      en: 'With deep understanding of skin health, we are building a science-driven innovative enterprise.'
    },
    'content.section1.title': { zh: '绉戠爺鑳屾櫙', en: 'Research Background' },
    'content.section1.text': { zh: '鍒涘浜哄洟闃熷湪缁嗚優鐢熺墿瀛︺€佺毊鑲ょ瀛︿笌鐢熺墿鏉愭枡棰嗗煙鎷ユ湁涓板瘜鐨勭鐮旂粡楠屽拰瀛︽湳绉疮銆?, en: 'The founder team has extensive research experience and academic background in cell biology, skin science and biomaterials.' },
    'content.section2.title': { zh: '鍒涗笟鍒濆績', en: 'Entrepreneurial Vision' },
    'content.section2.text': { zh: '鑷村姏浜庡皢瀹為獙瀹ょ殑鍓嶆部鍙戠幇杞寲涓鸿兘澶熺湡姝ｆ敼鍠勪汉浠毊鑲ゅ仴搴风殑鍒涙柊浜у搧涓庤В鍐虫柟妗堛€?, en: 'Committed to translating cutting-edge lab discoveries into innovative products and solutions that truly improve skin health.' },
    'return.home': { zh: '杩斿洖棣栭〉', en: 'Return Home' },
    'footer.text': { zh: '漏 2026 Revita Biotec銆備笓娉ㄦ姉琛拌€佷笌鐨偆淇绉戠爺銆?, en: '漏 2026 Revita Biotec. Focused on anti-aging and skin repair research.' }
  },
  patent: {
    title: { zh: 'Revita Biotec | 涓撳埄鎶€鏈?, en: 'Revita Biotec | Patented Technologies' },
    description: { zh: '鍏充簬姘村嚌鑳舵暦鏂欎笌寰拡閫掕嵂绯荤粺鐨勪笓鍒╂妧鏈睍绀恒€?, en: 'Showcase of patented technologies in hydrogel dressings and microneedle delivery systems.' },
    'nav.home': { zh: '棣栭〉', en: 'Home' },
    'nav.about': { zh: '鐟炵淮濉斾粙缁?, en: 'About Revita' },
    'nav.about.businessModel': { zh: '涓氬姟妯″紡', en: 'Business Model' },
    'nav.about.founder': { zh: '鍒涘浜轰粙缁?, en: 'Founder Introduction' },
    'nav.about.patent': { zh: '涓撳埄鎶€鏈?, en: 'Patented Technologies' },
    'nav.about.research': { zh: '鐮斿彂鏂瑰悜', en: 'Research Areas' },
    'nav.products': { zh: '浜у搧涓績', en: 'Product Center' },
    'nav.news': { zh: '鏈€鏂板姩鎬?, en: 'Latest Updates' },
    'nav.contact': { zh: '鑱旂郴鎴戜滑', en: 'Contact Us' },
    'nav.faq': { zh: '甯歌闂', en: 'FAQ' },
    'hero.eyebrow': { zh: 'Patented Technologies', en: 'Patented Technologies' },
    'hero.title': { zh: '涓撳埄鎶€鏈笌鐮斿彂杩涘睍', en: 'Patent Technology & R&D Progress' },
    'hero.lead1': {
      zh: '<span class="highlight">姘村嚌鑳舵暦鏂?/span>閫氳繃楂樹繚婀夸笌鏌旀€ф敮鎾戠粨鏋勶紝甯姪缁存寔鐨偆灞忛殰銆佸噺灏戝埡婵€骞舵敮鎸佷慨澶嶏紝鍦ㄥ彈鎹熺毊鑲ゆ姢鐞嗕腑鍏锋湁鏄捐憲浼樺娍銆?,
      en: '<span class="highlight">Hydrogel dressings</span> use high moisture retention and flexible support structures to maintain skin barrier, reduce irritation and support repair, offering significant advantages in damaged skin care.'
    },
    'hero.lead2': {
      zh: '<span class="highlight">寰拡閫掕嵂绯荤粺</span>閫氳繃寰皬閽堥亾灏嗘椿鎬ф垚鍒嗙簿鍑嗛€掗€佽嚦鐨偆鏇存繁灞傦紝鎻愬崌娓楅€忔晥鐜囥€佺ǔ瀹氭€т笌鎶よ偆淇姢鏁堟灉銆?,
      en: '<span class="highlight">Microneedle delivery systems</span> precisely deliver active ingredients deep into the skin through tiny channels, improving penetration efficiency, stability and repair effectiveness.'
    },
    'patent.card1.title': { zh: '鍙戞槑涓撳埄涓€锛氭按鍑濊兌鏁锋枡', en: 'Patent One: Hydrogel Dressing' },
    'patent.card1.info': { zh: '涓撳埄鏍囬锛氭按鍑濊兌鏁锋枡鍙婂叾鍒跺鏂规硶涓庡簲鐢?, en: 'Patent title: Hydrogel dressing and its preparation method and application' },
    'patent.card1.meta': { zh: '涓撳埄鍙凤細CN202410000001 路 鐢宠鏃ユ湡锛?024-01-15 路 鍏紑鏃ユ湡锛?024-07-15 路 鍙戞槑浜猴細XX鍥㈤槦 路 瀹炶川瀹℃煡鐘舵€侊細瀹℃煡涓?, en: 'Patent no.: CN202410000001 路 Filing date: 2024-01-15 路 Publication date: 2024-07-15 路 Inventors: XX team 路 Substantive examination status: Under review' },
    'patent.card1.text': { zh: '<span class="highlight">姘村嚌鑳舵暦鏂?/span>閫氳繃楂樹繚婀夸笌鏌旀€ф敮鎾戠粨鏋勶紝甯姪缁存寔鐨偆灞忛殰銆佸噺灏戝埡婵€骞舵敮鎸佷慨澶嶃€傝繖绫绘妧鏈湪鐨偆灞忛殰鍙楁崯銆佹晱鎰熶慨鎶や笌鏈悗鎶ょ悊鍦烘櫙涓叿鏈夎緝寮虹殑搴旂敤娼滃姏銆?, en: '<span class="highlight">Hydrogel dressings</span> use high moisture retention and flexible support structures to help maintain the skin barrier, reduce irritation and support repair. This technology has strong potential in barrier-damaged, sensitive-skin and post-procedure care scenarios.' },
    'patent.card2.title': { zh: '鍙戞槑涓撳埄浜岋細寰拡閫掕嵂绯荤粺', en: 'Patent Two: Microneedle Drug Delivery System' },
    'patent.card2.info': { zh: '涓撳埄鏍囬锛氬井閽堥€掕嵂绯荤粺鍙婂叾娲绘€ф垚鍒嗛€掗€佹柟娉?, en: 'Patent title: Microneedle drug delivery system and active ingredient delivery method' },
    'patent.card2.meta': { zh: '涓撳埄鍙凤細CN202410000002 路 鐢宠鏃ユ湡锛?024-03-10 路 鍏紑鏃ユ湡锛?024-08-20 路 鍙戞槑浜猴細XX鍥㈤槦 路 瀹炶川瀹℃煡鐘舵€侊細瀹℃煡涓?, en: 'Patent no.: CN202410000002 路 Filing date: 2024-03-10 路 Publication date: 2024-08-20 路 Inventors: XX team 路 Substantive examination status: Under review' },
    'patent.card2.text': { zh: '<span class="highlight">寰拡閫掕嵂绯荤粺</span>閫氳繃寰皬閽堥亾灏嗘椿鎬ф垚鍒嗙簿鍑嗛€掗€佽嚦鐨偆鏇存繁灞傦紝鏈夊姪浜庢彁鍗囨笚閫忔晥鐜囥€佹彁楂樼ǔ瀹氭€у苟澧炲己鎶よ偆淇姢鏁堟灉銆傚叾鎶€鏈紭鍔垮湪浜庡彲缁熶竴鎻愬崌浜у搧閫掗€佹晥鐜囦笌浣跨敤浣撻獙銆?, en: '<span class="highlight">Microneedle delivery systems</span> create tiny channels in the skin to deliver active ingredients more deeply and precisely, improving penetration, stability and repair effectiveness. The technical advantage is the ability to consistently improve delivery efficiency and user experience.' },
    'return.home': { zh: '杩斿洖棣栭〉', en: 'Return Home' },
    'footer.text': { zh: '漏 2026 Revita Biotec銆備笓娉ㄦ姉琛拌€佷笌鐨偆淇绉戠爺銆?, en: '漏 2026 Revita Biotec. Focused on anti-aging and skin repair research.' }
  },
  researchDirection: {
    title: { zh: 'Revita Biotec | 鐮斿彂鏂瑰悜', en: 'Revita Biotec | Research Areas' },
    description: { zh: '鐟炵淮濉旂爺鍙戞柟鍚戜笌绉戠爺璺緞妯℃澘銆?, en: 'Revita research direction and scientific pathway template.' },
    'nav.home': { zh: '棣栭〉', en: 'Home' },
    'nav.about': { zh: '鐟炵淮濉斾粙缁?, en: 'About Revita' },
    'nav.about.businessModel': { zh: '涓氬姟妯″紡', en: 'Business Model' },
    'nav.about.founder': { zh: '鍒涘浜轰粙缁?, en: 'Founder Introduction' },
    'nav.about.patent': { zh: '涓撳埄鎶€鏈?, en: 'Patented Technologies' },
    'nav.about.research': { zh: '鐮斿彂鏂瑰悜', en: 'Research Areas' },
    'nav.products': { zh: '浜у搧涓績', en: 'Product Center' },
    'nav.news': { zh: '鏈€鏂板姩鎬?, en: 'Latest Updates' },
    'nav.contact': { zh: '鑱旂郴鎴戜滑', en: 'Contact Us' },
    'nav.faq': { zh: '甯歌闂', en: 'FAQ' },
    'hero.eyebrow': { zh: 'Research Direction', en: 'Research Areas' },
    'hero.title': { zh: '闈㈠悜鎶楄“涓庣毊鑲や慨澶嶇殑绉戠爺璺緞', en: 'Research Path for Anti-Aging and Skin Repair' },
    'hero.lead1': {
      zh: '鎴戜滑鏋勫缓瀹為獙骞冲彴鍜屾暟鎹祦绋嬶紝鎸佺画鎺㈢储<span class="highlight">琛拌€佹満鍒?/span>銆?span class="highlight">鑳跺師鍐嶇敓</span>鍜岀毊鑲ゅ睆闅滀慨澶嶇殑鏍稿績鐢熺墿瀛﹀熀纭€銆?,
      en: 'We build experimental platforms and data workflows to continuously explore the core biology of <span class="highlight">aging mechanisms</span>, <span class="highlight">collagen regeneration</span> and skin barrier repair.'
    },
    'hero.lead2': {
      zh: '閫氳繃绯荤粺鎬х殑绉戠爺甯冨眬锛屾垜浠嚧鍔涗簬灏嗗疄楠屽鐮旂┒鎴愭灉杞寲涓哄叿澶囦复搴婁笌娑堣垂灞炴€х殑瀹夊叏閰嶆柟涓庤В鍐虫柟妗堛€?,
      en: 'Through systematic research layout, we are committed to translating lab research into safe formulations and solutions with clinical and consumer value.'
    },
    'content.section1.title': { zh: '鍩虹绉戠爺', en: 'Basic Research' },
    'content.section1.text': { zh: '鎸佺画鎺㈢储<span class="highlight">琛拌€佹満鍒?/span>銆?span class="highlight">鑳跺師鍐嶇敓</span>鍜岀毊鑲ゅ睆闅滀慨澶嶇殑鏍稿績鐢熺墿瀛﹀熀纭€銆?, en: 'Continuously explore the core biology of <span class="highlight">aging mechanisms</span>, <span class="highlight">collagen regeneration</span> and skin barrier repair.' },
    'content.section2.title': { zh: '鎶€鏈浆鍖?, en: 'Technology Translation' },
    'content.section2.text': { zh: '灏嗗疄楠屽鐮旂┒鎴愭灉杞寲涓哄叿澶囦复搴婁笌娑堣垂灞炴€х殑瀹夊叏閰嶆柟涓庤В鍐虫柟妗堛€?, en: 'Translate lab research into safe formulations and solutions with clinical and consumer value.' },
    'content.section3.title': { zh: '浜у搧鐮斿彂', en: 'Product Development' },
    'content.section3.text': { zh: '鍩轰簬涓撳埄鎶€鏈钩鍙帮紝寮€鍙戦拡瀵逛笉鍚岀毊鑲ら棶棰樼殑鍒涙柊浜у搧绯诲垪銆?, en: 'Based on patented technology platforms, develop innovative product lines for various skin concerns.' },
    'return.home': { zh: '杩斿洖棣栭〉', en: 'Return Home' },
    'footer.text': { zh: '漏 2026 Revita Biotec銆備笓娉ㄦ姉琛拌€佷笌鐨偆淇绉戠爺銆?, en: '漏 2026 Revita Biotec. Focused on anti-aging and skin repair research.' }
  },
  latest: {
    title: { zh: 'Revita Biotec | 鏈€鏂板姩鎬?, en: 'Revita Biotec | Latest Updates' },
    description: { zh: '鍏徃鏈€鏂板姩鎬佷笌鐮斿彂杩涘睍鏇存柊銆?, en: 'The latest company updates and research progress.' },
    'nav.home': { zh: '棣栭〉', en: 'Home' },
    'nav.about': { zh: '鐟炵淮濉斾粙缁?, en: 'About Revita' },
    'nav.about.businessModel': { zh: '涓氬姟妯″紡', en: 'Business Model' },
    'nav.about.founder': { zh: '鍒涘浜轰粙缁?, en: 'Founder Introduction' },
    'nav.about.patent': { zh: '涓撳埄鎶€鏈?, en: 'Patented Technologies' },
    'nav.about.research': { zh: '鐮斿彂鏂瑰悜', en: 'Research Areas' },
    'nav.products': { zh: '浜у搧涓績', en: 'Product Center' },
    'nav.news': { zh: '鏈€鏂板姩鎬?, en: 'Latest Updates' },
    'nav.contact': { zh: '鑱旂郴鎴戜滑', en: 'Contact Us' },
    'nav.faq': { zh: '甯歌闂', en: 'FAQ' },
    'hero.eyebrow': { zh: 'Latest Updates', en: 'Latest Updates' },
    'hero.title': { zh: '鎸佺画鍒嗕韩鐮斿彂涓庝骇鍝佽繘灞?, en: 'Sharing Ongoing R&D and Product Progress' },
    'hero.lead1': {
      zh: '鎴戜滑瀹氭湡鏇存柊鍏徃鍦?span class="highlight">绉戠爺</span>銆?span class="highlight">浜у搧</span>涓庡悎浣滆繘灞曟柟闈㈢殑鏈€鏂版秷鎭€?,
      en: 'We regularly update the latest news on the company鈥檚 <span class="highlight">research</span>, <span class="highlight">products</span> and collaborations.'
    },
    'hero.lead2': {
      zh: '鍏虫敞鎴戜滑鐨勫姩鎬侊紝浜嗚В姘村嚌鑳舵暦鏂欍€佸井閽堥€掕嵂绯荤粺绛夋牳蹇冩妧鏈殑鏈€鏂扮爺鍙戣繘灞曘€?,
      en: 'Follow our updates to learn about the latest R&D progress in hydrogel dressings, microneedle delivery systems and other core technologies.'
    },
    'content.section1.title': { zh: '鍔ㄦ€佹洿鏂?, en: 'Updates' },
    'content.section1.text': { zh: '鍚庣画鍙湪杩欓噷鍙戝竷涓撳埄杩涘睍銆佷复搴婄爺绌躲€佸悎浣滀紮浼翠笌浜у搧鍙戝竷淇℃伅銆?, en: 'You can publish patent progress, clinical research, partnerships and product launches here.' },
    'return.home': { zh: '杩斿洖棣栭〉', en: 'Return Home' },
    'footer.text': { zh: '漏 2026 Revita Biotec銆備笓娉ㄦ姉琛拌€佷笌鐨偆淇绉戠爺銆?, en: '漏 2026 Revita Biotec. Focused on anti-aging and skin repair research.' }
  },
  faq: {
    title: { zh: 'Revita Biotec | 甯歌闂', en: 'Revita Biotec | FAQ' },
    description: { zh: '鍏充簬鐢熺墿鎶よ偆鎶€鏈笌鍏徃鐮斿彂鏂瑰悜鐨勫父瑙侀棶棰樿В绛斻€?, en: 'Frequently asked questions about biotech skincare technology and our R&D direction.' },
    'nav.home': { zh: '棣栭〉', en: 'Home' },
    'nav.about': { zh: '鐟炵淮濉斾粙缁?, en: 'About Revita' },
    'nav.about.businessModel': { zh: '涓氬姟妯″紡', en: 'Business Model' },
    'nav.about.founder': { zh: '鍒涘浜轰粙缁?, en: 'Founder Introduction' },
    'nav.about.patent': { zh: '涓撳埄鎶€鏈?, en: 'Patented Technologies' },
    'nav.about.research': { zh: '鐮斿彂鏂瑰悜', en: 'Research Areas' },
    'nav.products': { zh: '浜у搧涓績', en: 'Product Center' },
    'nav.news': { zh: '鏈€鏂板姩鎬?, en: 'Latest Updates' },
    'nav.contact': { zh: '鑱旂郴鎴戜滑', en: 'Contact Us' },
    'nav.faq': { zh: '甯歌闂', en: 'FAQ' },
    'hero.eyebrow': { zh: 'FAQ', en: 'FAQ' },
    'hero.title': { zh: '鍏充簬鐢熺墿鎶よ偆鎶€鏈殑甯歌闂', en: 'Frequently Asked Questions About Biotech Skincare' },
    'hero.lead1': {
      zh: '浠ヤ笅鍐呭鍥寸粫<span class="highlight">姘村嚌鑳舵暦鏂?/span>銆?span class="highlight">寰拡閫掕嵂</span>銆佹姉琛版妧鏈笌涓撳埄杩涘睍杩涜绉戞櫘璇存槑銆?,
      en: 'The following content introduces <span class="highlight">hydrogel dressings</span>, <span class="highlight">microneedle delivery</span>, anti-aging technology and patent progress.'
    },
    'hero.lead2': {
      zh: '濡傛灉鎮ㄦ湁鍏朵粬闂锛屾杩庨€氳繃鑱旂郴鏂瑰紡涓庢垜浠彇寰楄繘涓€姝ユ矡閫氥€?,
      en: 'If you have other questions, please feel free to contact us for further communication.'
    },
    'faq.q1': { zh: '姘村嚌鑳舵暦鏂欐槸浠€涔堬紵鏈変粈涔堟姢鑲や慨澶嶄紭鍔?, en: 'What is a hydrogel dressing? What skincare repair benefits does it offer?' },
    'faq.a1': { zh: '<span class="highlight">姘村嚌鑳舵暦鏂?/span>鏄竴绉嶅叿鏈夐珮淇濇箍鍜屾煍鎬ф敮鎾戠壒鎬х殑鏉愭枡锛岃兘澶熷府鍔╃淮鎸佺毊鑲ゅ睆闅溿€佸噺灏戝埡婵€骞朵績杩涗慨澶嶃€?, en: '<span class="highlight">Hydrogel dressings</span> are flexible materials with high moisture retention that help maintain the skin barrier, reduce irritation and support repair.' },
    'faq.q2': { zh: '寰拡閫掕嵂绯荤粺鎶€鏈師鐞嗘槸浠€涔?, en: 'What is the principle behind microneedle drug delivery systems?' },
    'faq.a2': { zh: '<span class="highlight">寰拡閫掕嵂绯荤粺</span>閫氳繃寰皬閽堥亾灏嗘椿鎬ф垚鍒嗙簿鍑嗛€掗€佸埌鐨偆鏇存繁灞傦紝瀹炵幇鏇撮珮娓楅€忔晥鐜囦笌鏇寸ǔ瀹氱殑浣滅敤鏁堟灉銆?, en: '<span class="highlight">Microneedle drug delivery systems</span> create tiny channels in the skin to deliver active ingredients deeper and more precisely, improving penetration and stability.' },
    'faq.q3': { zh: '鍏徃鏍稿績鎶楄“鎶€鏈湁鍝簺鐗圭偣', en: 'What are the characteristics of the company鈥檚 core anti-aging technologies?' },
    'faq.a3': { zh: '鍏徃鑱氱劍<span class="highlight">鎶楁哀鍖?/span>銆?span class="highlight">鑳跺師鍐嶇敓</span>銆佸睆闅滀慨澶嶄笌澶氬眰閫掗€佹満鍒讹紝寮鸿皟瀹夊叏鎬т笌闀挎湡鍙寔缁€с€?, en: 'The company focuses on <span class="highlight">antioxidant activity</span>, <span class="highlight">collagen regeneration</span>, barrier repair and multi-layer delivery mechanisms, emphasizing safety and long-term sustainability.' },
    'faq.q4': { zh: '涓撳埄鎶€鏈洰鍓嶈繘灞曞埌鍝釜闃舵', en: 'What stage are the patented technologies at?' },
    'faq.a4': { zh: '鐩墠澶勪簬浠庡疄楠屽楠岃瘉鍚戜骇鍝佸寲涓庝骇涓氬寲鎺ㄨ繘鐨勫叧閿樁娈碉紝鎸佺画瀹屽杽鎶€鏈垚鐔熷害涓庡簲鐢ㄥ満鏅€?, en: 'They are currently progressing from lab validation to productization and industrial application, while improving technical maturity and use cases.' },
    'faq.q5': { zh: '浜у搧閫傜敤浜庡摢浜涜倢鑲ら棶棰?, en: 'Which skin concerns are suitable for these products?' },
    'faq.a5': { zh: '閫傜敤浜庡共鐕ャ€佹晱鎰熴€佸睆闅滃彈鎹熴€佺粏绾广€佹澗寮涘強闇€瑕佷慨鎶ゅ啀鐢熺殑鐨偆鐘舵€併€?, en: 'Suitable for dry, sensitive, barrier-damaged, lined, sagging and other skin conditions that require repair and regeneration.' },
    'return.home': { zh: '杩斿洖棣栭〉', en: 'Return Home' },
    'footer.text': { zh: '漏 2026 Revita Biotec銆備笓娉ㄦ姉琛拌€佷笌鐨偆淇绉戠爺銆?, en: '漏 2026 Revita Biotec. Focused on anti-aging and skin repair research.' }
  }
});

const supportedLangs = ['zh', 'en'];
const cookieConsentKey = 'siteCookieConsent';
let cookieBannerInstance = null;

function getQueryLang() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  return supportedLangs.includes(lang) ? lang : null;
}

function updateInternalLinks(lang) {
  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
      return;
    }
    if (!href.match(/\.html?(?:$|[?#])/)) {
      return;
    }

    const [mainPart, hashPart] = href.split('#');
    const [pathPart, queryPart] = mainPart.split('?');
    const params = new URLSearchParams(queryPart || '');
    params.set('lang', lang);
    const newHref = `${pathPart}?${params.toString()}` + (hashPart ? `#${hashPart}` : '');
    link.setAttribute('href', newHref);
  });
}

function getCookieConsent() {
  return false;
}

function showCookieConsentBanner() {
  if (cookieBannerInstance) {
    return;
  }

  const banner = document.createElement('div');
  banner.className = 'cookie-consent';
  banner.innerHTML = `
    <div class="cookie-consent__content">
      <p>鎴戜滑浣跨敤 Cookies 鍚戜綘灞曠ず涓庝綘鐩稿叧鐨勫唴瀹广€傜偣鍑?鎺ュ彈"鍗宠〃绀烘偍鍚屾剰鍦ㄦ偍鐨勮澶囦笂瀛樺偍 Cookie锛屼互浼樺寲缃戠珯瀵艰埅銆佸垎鏋愮綉绔欎娇鐢ㄦ儏鍐靛苟鍗忓姪鎴戜滑鐨勮惀閿€宸ヤ綔銆?/p>
      <button class="cookie-consent__button" type="button">鎺ュ彈</button>
    </div>
  `;

  banner.querySelector('.cookie-consent__button').addEventListener('click', () => {
    banner.classList.remove('is-visible');
    window.setTimeout(() => {
      banner.remove();
      cookieBannerInstance = null;
    }, 220);
  });

  document.body.appendChild(banner);
  window.requestAnimationFrame(() => {
    banner.classList.add('is-visible');
  });
  cookieBannerInstance = banner;
}

function setLanguage(lang) {
  if (!supportedLangs.includes(lang)) {
    lang = 'zh';
  }

  const page = document.body.dataset.page;
  const pageTranslations = siteTranslations[page] || {};
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = pageTranslations[key]?.[lang];
    if (value === undefined) {
      return;
    }
    if (element.tagName.toLowerCase() === 'meta') {
      element.setAttribute('content', value);
    } else {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  updateInternalLinks(lang);

  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url.toString());
}

function openLanguageModal() {
  const modal = document.createElement('div');
  modal.className = 'language-modal';
  modal.innerHTML = `
    <div class="language-modal__card">
      <p class="language-modal__eyebrow">Welcome</p>
      <h2 class="language-modal__title">璇烽€夋嫨璇█ / Please select a language</h2>
      <p class="language-modal__text">璇峰厛閫夋嫨浣犲亸濂界殑璇█锛屽唴瀹逛細绔嬪嵆鍒囨崲涓哄搴旂増鏈€?/p>
      <div class="language-modal__actions">
        <button class="language-modal__button" data-lang="zh">涓枃</button>
        <button class="language-modal__button language-modal__button--secondary" data-lang="en">English</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  window.requestAnimationFrame(() => {
    modal.classList.add('is-visible');
  });

  modal.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      setLanguage(lang);
      showCookieConsentBanner();
      modal.remove();
    });
  });
}

function getInitialLanguage() {
  return getQueryLang();
}

function initLanguageSwitcher() {
  const initialLang = getInitialLanguage();

  if (initialLang) {
    setLanguage(initialLang);
  } else {
    openLanguageModal();
  }

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
      showCookieConsentBanner();
    });
  });
}

document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
