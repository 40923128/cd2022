var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期主要使用軟體: NX1980 ->參考與下載網址: cd2022 (mde.tw) \xa0(只允許使用校用帳戶或是連線至主機下載) \n Github倉儲 \n ->mdecourse cmsimde: cmsimde \xa0 \n', 'tags': '', 'url': 'About.html'}, {'title': 'blog', 'text': '', 'tags': '', 'url': 'blog.html'}, {'title': 'AGX REPO(W4)', 'text': '在fork的倉儲下，各組員pull requests組員能自行更新到原始倉儲檔案 1.新建一個自己倉儲下連接原倉儲的分支 \n git remote add (uptream name) (repo url.git)\n \n (新增後可查詢自己分支細節) \n git remote -v\n \n 2.拉取原倉up-to-date檔案(到自己設的分倉支) \n git fetch (upstream name) \n 3.拉下來後，再將分支內容覆蓋至自己的原分支 \n git merge (upstream name)/main\n \n \n 上述步驟做完後就是以原倉儲上的內容進行更改 改完上傳github後，進行pull request至原倉儲做合併 \n', 'tags': '', 'url': 'AGX REPO(W4).html'}, {'title': 'Rep create', 'text': '參考資料 cmsimde rep: mdecourse/cmsimde: cmsimde main scripts (github.com) \n 參考步驟: CD_Guide (mde.tw) \n Step: 1.Create a "cd2022" rep on github \n 2.勾選" Add .gitignore" and 選擇 python \n 3.git clone rep to USB (on cmd) \n 4. 進入cd2022 倉儲 \n cd cd2022\n \n 5.擷取cmsimde檔案 (尾部檔名可不打) \n git submodule add https://github.com/mdecourse/cmsimde.git (cmsimde) \n 6.將/up_dir內的資料全部複製到/cd2022 (保留原始的.gitgnore) \n 7.進去https更改倉儲標題，並gemerate_page \n 8.acp 上傳檔案 \n', 'tags': '', 'url': 'Rep create.html'}, {'title': 'Week problem', 'text': 'w1 在IPV4下的網路流量無法滿足全教室的學生使用，必須切換成IPV6才足夠 將老師設定的啟動檔以.bat形式執行 CADLab 中的 IPv6 網路設定 · Discussion #2 · mdecourse/wcm2022 · GitHub 以訪指惡意病毒向外傳輸數據 \n w2 \n 學校電腦因主控在老師的電腦，無法使用"管理員執行".bat，使上述的執行檔無法完全使用 \n w3 \n NX1980 .bat檔在IPV6下需要加入PROXY指令 \n set HTTP_PROXY = http://kmolab:kmolab10@[2001:288:6004:17::42]:3128\nset HTTPS_PROXY = http://kmolab:kmolab10@[2001:288:6004:17::42]:3128 \n 並且在連上主機端需要使用"::37"主機 \n set SPLM_LICENSE_SERVER=28000@[2001:288:6004:17::37] \n w7 \n 1.git clone  https://github.com/mdecourse/scarysim.git 2.修改 scarysim.pro, 蓋掉第 11 行, 成為 # LIBS\xa0\xa0\xa0\xa0 += -lglut -lGLU 3.cd scarysim 4.qmake -o Makefile scarysim.pro 5.mingw32-make -f Makefile.Release 可以在 release 目錄取得 scarysim.exe 6.將scarysim.exe,ase.obj, arm1.obj, arm2.obj, arm3.obj拉至coppeliasim410_msys2 7.啟用scarysim.exe \n \n w10 \n (nx_block_ui) \n 主要學習如何使用NXUI改變零件尺寸，配合python更改參數 \n 實作檔案: w10_block_ui \n 以下是操作影片 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n w12 \n 1.cadlab startup \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n 2.NXOpen Python \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n w13(coppeliasim python操作) \n 1.將coppeliasim加入啟動檔啟動程序 \n path=%Path%;C:\\CoppeliaSimEdu_4.3.0_rev3\nstart /D C:\\CoppeliaSimEdu_4.3.0_rev3 coppeliasim.exe \n start後面要依照放置槽區設定 2.操作步驟 (少一步驟>在user.txt>executeUnsafe改為true) \n \n \n \n \n   \n \n \n \n \n \n \n \n \n w14 \n 本週是對手臂進行 pyhton修改(自動<->手動控制切換) \n 操作方式依照影片 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n w16 \n 1.thinter \n 講解如何使用網路控制coppeliasim之UI介面(以IPV4控制) \n 檔案(mde.tw): https://mde.tw/cd2022_guide/downloads/w15_uarm_tkinter_control.7z \xa0 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Week problem.html'}, {'title': 'NX 小組作業', 'text': '22&26:工程圖製作 \n 原影片:22> 4472 LAB 06 ROCKER ARM Working Drawing - YouTube \xa0 \xa0 \xa0 \xa0 \xa0 26> 4472 HW16 NX Exploded Views - YouTube \n 隨身版的nx沒有辦法開啟工程圖(原先影片上的開啟方式:application>dratfing) \n 而就連快捷鍵也無法將工程圖版頁開啟。 \n (上面唯一的drafting standard一樣是無法使用的) \n 23:沒有其中程圖，且沒樣板檔案，無法實際演示 已知的概念是沿著渦輪葉片的縫隙進行打孔(曲面)，使其孔洞會在葉片之間生成 \n 原影片: 4472 HW13 NX Linked Body Brake Rotor - YouTube \n 24:原先應該使用excel去跑變數表，但是NX與excel的插件因連線實在無法輕易解決，所以最後還是直接手動改變數表較快 作業理念:使用25號-第14個工件做樣板，並將底部增加變數孔洞 檔案: https://drive.google.com/file/d/12vskJyVGYNpC_vN_0DCzNhzhA7sbAJas/view?usp=sharing \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 25:利用24所做出來的變數零件去蓋一個積木，並且能將不同的積木以不同的顏色做區分，本來應該EXCEL做出變數表，但因為各種版本更新後兩個程式差件改變，導致無法正常運行線上變數表，所以本影片就直接改參數並儲存。 \n \n \n \n \n   \n \n \n \n \n', 'tags': '', 'url': 'NX 小組作業.html'}, {'title': '小組Uarm工作', 'text': '完成零件 :https://drive.google.com/file/d/1Vbn5lExbv4dQIlw28kp6Cprca7_qoXUo/view?usp=sharing \n onshape網頁零件: https://drive.google.com/file/d/1TJJqN5JdFDIqkrFsr7p26Q_aZnp7fH5B/view?usp=sharing \n (裡面包含零件檔和組合檔 all->組合stl 其餘->單一零件stl) \n \xa0零件繪製過程: \n 1. \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 2 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 3 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 4 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 5 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 6 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 7 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 8 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 9 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 10 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 11 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 12 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 13 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '小組Uarm工作.html'}, {'title': 'W16exam', 'text': '依照mde.tw 第16週: CD_Guide (mde.tw) \n 第一題: \n 原始吸盤座標(執行後):座標(0.2602,0.2602,0.3468) \n \n 依照控制介面將所有角度控制改至正負2.5度 \n \n 最後以逆時針對joint1-3角度做5度變換後達到的座標 \n (0.2594,0.1954,0.3965) \n \n 第二題: \n 依照red block之座標->可得知其上表面為(0.2,0.4,0.1) \n 實際測試後: \n joint1(順轉1.25度):(X+0.001,Y+0.0136,Z) \n joint2(順轉1.25度):(X-0.0266,Y+0.001,Z) \n joint3(順轉1.25度):(X-0.0271,Y+0.001,Z+0.01) \n 會後將吸盤吸住方塊(座標約在計算位置) \n \n 手臂抬起 \n \n', 'tags': '', 'url': 'W16exam.html'}, {'title': 'W16(2&3)', 'text': '2. 可以利用 Leo Editor 解讀 \n 樣板檔案: https://mde.tw/cd2022_guide/downloads/w15_rotating_cuboid.7z\xa0 \n \n \n \n \n \n   \n \n \n \n \n 3. 加入網際 Vision Sensor 串流 \n 將檔案加入到2.之資料夾 \n 檔案: https://mde.tw/cd2022_guide/downloads/rotating_cuboid_flask.7z\xa0 \n \n \n \n \n \n   \n \n \n \n \n \n', 'tags': '', 'url': 'W16(2&3).html'}, {'title': 'Student Group', 'text': '第1組: repo: \xa0 40923131 \xa0 www: \xa0 40923131 \xa0 cd2022ag1-repo: \xa0 40923131 \xa0 cd2022ag1-www: \xa0 40923131 repo: \xa0 40923138 \xa0 www: \xa0 40923138 \xa0 cd2022ag1-repo: \xa0 40923138 \xa0 cd2022ag1-www: \xa0 40923138 repo: \xa0 40923157 \xa0 www: \xa0 40923157 \xa0 cd2022ag1-repo: \xa0 40923157 \xa0 cd2022ag1-www: \xa0 40923157 第2組: repo: \xa0 40923101 \xa0 www: \xa0 40923101 \xa0 cd2022ag2-repo: \xa0 40923101 \xa0 cd2022ag2-www: \xa0 40923101 repo: \xa0 40923103 \xa0 www: \xa0 40923103 \xa0 cd2022ag2-repo: \xa0 40923103 \xa0 cd2022ag2-www: \xa0 40923103 repo: \xa0 40923108 \xa0 www: \xa0 40923108 \xa0 cd2022ag2-repo: \xa0 40923108 \xa0 cd2022ag2-www: \xa0 40923108 repo: \xa0 40923137 \xa0 www: \xa0 40923137 \xa0 cd2022ag2-repo: \xa0 40923137 \xa0 cd2022ag2-www: \xa0 40923137 repo: \xa0 40923154 \xa0 www: \xa0 40923154 \xa0 cd2022ag2-repo: \xa0 40923154 \xa0 cd2022ag2-www: \xa0 40923154 repo: \xa0 40923156 \xa0 www: \xa0 40923156 \xa0 cd2022ag2-repo: \xa0 40923156 \xa0 cd2022ag2-www: \xa0 40923156 repo: \xa0 40923119 \xa0 www: \xa0 40923119 \xa0 cd2022ag2-repo: \xa0 40923119 \xa0 cd2022ag2-www: \xa0 40923119 repo: \xa0 40971134 \xa0 www: \xa0 40971134 \xa0 cd2022ag2-repo: \xa0 40971134 \xa0 cd2022ag2-www: \xa0 40971134 第3組: repo: \xa0 40923102 \xa0 www: \xa0 40923102 \xa0 cd2022ag3-repo: \xa0 40923102 \xa0 cd2022ag3-www: \xa0 40923102 repo: \xa0 40923104 \xa0 www: \xa0 40923104 \xa0 cd2022ag3-repo: \xa0 40923104 \xa0 cd2022ag3-www: \xa0 40923104 repo: \xa0 40923105 \xa0 www: \xa0 40923105 \xa0 cd2022ag3-repo: \xa0 40923105 \xa0 cd2022ag3-www: \xa0 40923105 repo: \xa0 40923106 \xa0 www: \xa0 40923106 \xa0 cd2022ag3-repo: \xa0 40923106 \xa0 cd2022ag3-www: \xa0 40923106 repo: \xa0 40923107 \xa0 www: \xa0 40923107 \xa0 cd2022ag3-repo: \xa0 40923107 \xa0 cd2022ag3-www: \xa0 40923107 repo: \xa0 40923110 \xa0 www: \xa0 40923110 \xa0 cd2022ag3-repo: \xa0 40923110 \xa0 cd2022ag3-www: \xa0 40923110 第4組: repo: \xa0 40923109 \xa0 www: \xa0 40923109 \xa0 cd2022ag4-repo: \xa0 40923109 \xa0 cd2022ag4-www: \xa0 40923109 repo: \xa0 40923111 \xa0 www: \xa0 40923111 \xa0 cd2022ag4-repo: \xa0 40923111 \xa0 cd2022ag4-www: \xa0 40923111 repo: \xa0 40923114 \xa0 www: \xa0 40923114 \xa0 cd2022ag4-repo: \xa0 40923114 \xa0 cd2022ag4-www: \xa0 40923114 repo: \xa0 40923115 \xa0 www: \xa0 40923115 \xa0 cd2022ag4-repo: \xa0 40923115 \xa0 cd2022ag4-www: \xa0 40923115 repo: \xa0 40923122 \xa0 www: \xa0 40923122 \xa0 cd2022ag4-repo: \xa0 40923122 \xa0 cd2022ag4-www: \xa0 40923122 repo: \xa0 40923129 \xa0 www: \xa0 40923129 \xa0 cd2022ag4-repo: \xa0 40923129 \xa0 cd2022ag4-www: \xa0 40923129 repo: \xa0 40923146 \xa0 www: \xa0 40923146 \xa0 cd2022ag4-repo: \xa0 40923146 \xa0 cd2022ag4-www: \xa0 40923146 repo: \xa0 40923148 \xa0 www: \xa0 40923148 \xa0 cd2022ag4-repo: \xa0 40923148 \xa0 cd2022ag4-www: \xa0 40923148 第5組: repo: \xa0 40923116 \xa0 www: \xa0 40923116 \xa0 cd2022ag5-repo: \xa0 40923116 \xa0 cd2022ag5-www: \xa0 40923116 repo: \xa0 40923124 \xa0 www: \xa0 40923124 \xa0 cd2022ag5-repo: \xa0 40923124 \xa0 cd2022ag5-www: \xa0 40923124 repo: \xa0 40923125 \xa0 www: \xa0 40923125 \xa0 cd2022ag5-repo: \xa0 40923125 \xa0 cd2022ag5-www: \xa0 40923125 repo: \xa0 40923126 \xa0 www: \xa0 40923126 \xa0 cd2022ag5-repo: \xa0 40923126 \xa0 cd2022ag5-www: \xa0 40923126 repo: \xa0 40923127 \xa0 www: \xa0 40923127 \xa0 cd2022ag5-repo: \xa0 40923127 \xa0 cd2022ag5-www: \xa0 40923127 repo: \xa0 40923128 \xa0 www: \xa0 40923128 \xa0 cd2022ag5-repo: \xa0 40923128 \xa0 cd2022ag5-www: \xa0 40923128 第6組: repo: \xa0 40923123 \xa0 www: \xa0 40923123 \xa0 cd2022ag6-repo: \xa0 40923123 \xa0 cd2022ag6-www: \xa0 40923123 repo: \xa0 40923133 \xa0 www: \xa0 40923133 \xa0 cd2022ag6-repo: \xa0 40923133 \xa0 cd2022ag6-www: \xa0 40923133 repo: \xa0 40923134 \xa0 www: \xa0 40923134 \xa0 cd2022ag6-repo: \xa0 40923134 \xa0 cd2022ag6-www: \xa0 40923134 repo: \xa0 40923135 \xa0 www: \xa0 40923135 \xa0 cd2022ag6-repo: \xa0 40923135 \xa0 cd2022ag6-www: \xa0 40923135 repo: \xa0 40923139 \xa0 www: \xa0 40923139 \xa0 cd2022ag6-repo: \xa0 40923139 \xa0 cd2022ag6-www: \xa0 40923139 repo: \xa0 40923142 \xa0 www: \xa0 40923142 \xa0 cd2022ag6-repo: \xa0 40923142 \xa0 cd2022ag6-www: \xa0 40923142 repo: \xa0 40923151 \xa0 www: \xa0 40923151 \xa0 cd2022ag6-repo: \xa0 40923151 \xa0 cd2022ag6-www: \xa0 40923151 第7組: repo: \xa0 40923113 \xa0 www: \xa0 40923113 \xa0 cd2022ag7-repo: \xa0 40923113 \xa0 cd2022ag7-www: \xa0 40923113 repo: \xa0 40923130 \xa0 www: \xa0 40923130 \xa0 cd2022ag7-repo: \xa0 40923130 \xa0 cd2022ag7-www: \xa0 40923130 repo: \xa0 40923140 \xa0 www: \xa0 40923140 \xa0 cd2022ag7-repo: \xa0 40923140 \xa0 cd2022ag7-www: \xa0 40923140 repo: \xa0 40923144 \xa0 www: \xa0 40923144 \xa0 cd2022ag7-repo: \xa0 40923144 \xa0 cd2022ag7-www: \xa0 40923144 repo: \xa0 40923149 \xa0 www: \xa0 40923149 \xa0 cd2022ag7-repo: \xa0 40923149 \xa0 cd2022ag7-www: \xa0 40923149 repo: \xa0 40923150 \xa0 www: \xa0 40923150 \xa0 cd2022ag7-repo: \xa0 40923150 \xa0 cd2022ag7-www: \xa0 40923150 repo: \xa0 40923152 \xa0 www: \xa0 40923152 \xa0 cd2022ag7-repo: \xa0 40923152 \xa0 cd2022ag7-www: \xa0 40923152 \n 分組名單指令 \n from browser import html\nfrom browser import document\nimport random\n\nbrython_div = document["brython_div"]\n\n# 根據 href 與 content 將 html 元件中的 anchor 插入頁面\ndef makeLink(href, content):\n    brython_div <= html.A(content, href=href)\n    #brython_div <= html.BR()\n\naorb = "a"\nurl = "https://mde.tw/studlist/2022spring/2a.txt"\ncourse = "cd2022"\n# 從 url 讀取資料後, 以跳行符號分割資料進入數列後\n# 去除數列中的第一筆與最後一筆資料後可得每位學員所填的資料\ndata = open(url).read().split("\\n")[1:-1]\n#print(data)\n# 再以 \\t 分割每位學員的資料, \n#可以取得每位學員的學號, github 帳號與組別\nbig = []\nnum_github = {}\nfor i in data:\n    stud_no, github, grp_no = i.split("\\t")\n    #print(stud_no, github, grp_no)\n    big.append([stud_no, github, grp_no])\n    if github != "":\n        num_github[stud_no] = github\n    else:\n        num_github[stud_no] = stud_no\n#print(big)\n# 根據每一 element 的第三個 element sort\nbig.sort(key = lambda x: x[2])\n# big 已經按照組別排序\n#print(big)\nungrouped = []\ngrouped = []\nfor i in big:\n    if i[2] == "":\n        ungrouped.append(i[0])\n    else:\n        # 將組別放到第一位置\n        grouped.append([i[2], i[0]])\n#print(grouped)\n#print(ungrouped)\nd = {}\n# 逐一檢視 grouped 數列\nfor i in grouped:\n    # 若該組序已存在 d dict 中,\n    # 則以 extend() 納入除組序之外的組員學號\n    if i[0] in d:\n        d[i[0]].extend(i[1:])\n        #print("i[0] in d:",i[0], "d:", d)\n    else:\n        # 若已納分組的 element 中之組序為全新組序,\n        # 則將該已納分組的 element 放入 dict 首位元素\n        # 準備透過 extend() 納入其他組員學號\n        d[i[0]] = i\n        #print("i i[0] not in d:", i, "d:", d)\n#print("finally d:", d, "d.values():", d.values())\ngroup_member = list(d.values())\n# group_member 第一位為組序, 隨後為組員學號\n#print(group_member)\nrandom.shuffle(ungrouped)\n#print("ungrouped:" + str(len(ungrouped)))\ngrp = 1\ngroup = []\nfor i in group_member:\n    #print("grp " + str(i[0]) + ": num, " + str(len(i[1:])))\n    if len(i[1:]) < 8:\n        #print("can take " + str(8 - len(i[1:])) + "members")\n        # 若仍有學員未納組, 則可根據缺額補入學員學號\n        try:\n            #print("add " + str(ungrouped[:8-len(i[1:])]))\n            i.extend(list(ungrouped[:8-len(i[1:])]))\n            # 拿掉已經分配組別的學員學號\n            ungrouped = ungrouped[8-len(i[1:]):]\n        except:\n            #print("no member to add!")\n            pass\n    else:\n        #print("full")\n        pass\n    # 根據增量決定組序\n    i[0] = str(grp)\n    group.append(i)\n    grp += 1\n#print(group)\nfor i in group:\n    brython_div <= "第" + str(i[0]) + "組:" + html.BR()\n    grp_repo = course + aorb + "g" + str(i[0])\n    for num in i[1:]:\n        # num 為各組組員學號\n        #print(num)\n        studhref = "https://"+ str(num_github[num]) + ".github.io/" + course\n        repohref = "https://github.com/"+ str(num_github[num]) +"/"+course\n        grphref = "https://"+ str(num_github[num]) + ".github.io/" + grp_repo\n        grp_repohref = "https://github.com/"+ str(num_github[num]) +"/" + grp_repo       \n        brython_div <= "repo: "\n        makeLink(repohref, str(num))\n        brython_div <= " www: "\n        makeLink(studhref, str(num))\n        brython_div <= " " + grp_repo + "-repo: "\n        makeLink(grp_repohref, str(num))\n        brython_div <= " " + grp_repo + "-www: "\n        makeLink(grphref, str(num))\n        brython_div <= html.BR()\nprint("done") \n \n', 'tags': '', 'url': 'Student Group.html'}, {'title': 'BLogsetting', 'text': '以下為關於設定blog的wink影片 主要為設定倉儲的leo檔案 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n ======= >>>>>>> 8e43c7bd2ae62330e54e328e9cdd3e5b01cdd087 \n', 'tags': '', 'url': 'BLogsetting.html'}, {'title': '期末考試', 'text': '1.已將NX檔案放置cd2022/downloads/w18/uarm \n 2.NX零件改編 \n 因為有些零件無法直接在整體的組合圖上鏡射，所以必自行去做更動最後再把零件重組 \n 以下為個人操作步驟: \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 3.在coppeliasim組合作動 \n 主要是小心dummy為了使一些零件會重複利用但又不用複製，以dummy來再次連接需要連接的零件 \n 以下為操作步驟: \n \n \n \n \n   \n \n \n \n \n \n \n 4.以一般UI介面來控制手臂 \n \n 底座之python UI程式: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    simRemoteApi.start(19999)\n    joint1 = sim.getObject(\'/joint1\')\n    joint2 = sim.getObject(\'/joint2\')\n    joint3 = sim.getObject(\'/joint3\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-80" maximum="30" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-30" maximum="50" on-change="joint3_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend\n\nfunction sysCall_actuation()\n\n\nend\n\nfunction sysCall_sensing()\n    -- put your sensing code here\nend\n\nfunction sysCall_cleanup()\n    -- do some clean-up here\nend\n\n-- See the user manual or the available code snippets for additional callback functions and details\n \n \n 心得:途中遇到UI沒辦法正常轉動(無法控制)，後面發現Dummy設錯和一些零件做動沒有打開，導致整個零件會亂轉，解決之後就正常了 \n 5.用Uarm萊吸起方塊 \n \n 心得:因為原本手臂比較不好操作，所以本組最後決定把方塊稍微變大讓手臂比較好吸到物件，但是軸的力量一開始只考慮到本體，導致方塊吸起來後比較沒有利舉起來。 \n 6.使用API來連線遠端操作 \n 心得:因為從控制台的IPV4之IP基本指連內無法順利連外，所以利用第三方連線軟件hamach作為雙方IPV4橋梁，由影片看出從不同電腦來控制機械手臂。 \n 使用的python程式為利用W16之"uarm_tkinter_control.py" \n 並將第61行的IP改為連線HA對方IP \n 本組利用程式: \n \'\'\'\nOriginal Author: Marks Calderon Niquin\nEmail: markscalderonniquin@gmail.com\ngithub: hypagetech\nProgram modified to control uarm robot on CoppeliaSim through sliders GUI with TKinter\n\'\'\'\nfrom tkinter import *\nfrom tkinter import messagebox\nimport sim\nimport time\nimport math\n\nroot = Tk()\n\nclass GUI(Frame):\n    scales_l = []\n    labels_l = []\n    handles = []\n    boolConnect = False\n    clientID = -1\n    base = \'joint\'\n    final = \'tip\'\n\n    def __init__(self):\n        super().__init__()\n        self.initUI()\n        #sim.simxFinish(-1) #clean all ports\n\n    def initUI(self):\n        self.master.title("uArm Robot control")\n        # 這裡需要配合各 joint 的轉動範圍角度調整 slider 移動範圍\n        for i in range(3):\n            tit = "Joint"+str(i+1)\n            w_label = Label(self.master, text=tit).grid(row=i, column=0, pady=4, padx = 4)\n            win = Scale(self.master, from_=-180, to=180, tickinterval= 30, orient=HORIZONTAL, resolution=1, length=450, command=lambda value, name=i: self.onScale(name, value))\n            win.set(0)\n            win.grid(row=i, column=1)\n\n            self.scales_l.append(win)\n            self.labels_l.append(w_label)\n\n        self.conectar = Button(self.master, text ="To connect", command = self.onConnect)\n        self.conectar.grid(row=8,column=1)\n\n    def onScale(self, name,value):\n        if(self.clientID != -1):\n            print("{} : {}".format(name, value))\n            obj = self.handles[int(name)]\n            ang = float(value)*math.pi/180\n            sim.simxSetJointTargetPosition(self.clientID, obj ,ang ,sim.simx_opmode_oneshot)\n            #print(self.objFinal)\n            #pos = sim.simxGetObjectPosition(self.clientID, self.objFinal, -1, sim.simx_opmode_streaming )\n            #print(pos)\n\n\n\n    def onConnect(self):\n        if self.clientID != -1:\n            return\n            \n        self.clientID = sim.simxStart(\'25.58.150.176\',19999,True,True,5000,5) # Connect to CoppeliaSim\n        if self.clientID == -1:\n            messagebox.showinfo( "Can not be connected")\n        else:\n\n            for i in range(3):\n                j = i + 1\n                nom = self.base + str(j)\n                _, handle=sim.simxGetObjectHandle(self.clientID, nom, sim.simx_opmode_oneshot_wait)\n                self.handles.append(handle)\n            self.objFinal = sim.simxGetObjectHandle(self.clientID, \'joint3\', sim.simx_opmode_oneshot_wait)\n            print(self.objFinal)\n            time.sleep(1)\n            print("Connected and send command to the motor")\n\ndef close_window():\n  print("Close all ports")\n  sim.simxFinish(-1) #clean all ports\n  root.destroy()\n\ndef main():\n    root.protocol("WM_DELETE_WINDOW", close_window)\n    ex = GUI()\n    root.geometry("500x500")\n    root.mainloop()\n\n\nif __name__ == \'__main__\':\n    main()\n \n', 'tags': '', 'url': '期末考試.html'}]};