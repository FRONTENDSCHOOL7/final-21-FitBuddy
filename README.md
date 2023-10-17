# final-21-FitBuddy
멋쟁이사자처럼 프론트엔드스쿨 7기 21조

s
🖇️Branch name 컨벤션
-----
1. **기능 브랜치 (Feature Branches)**:
    - **`feature/이슈번호-기능명`** 과 같은 형식을 사용합니다.
    - 예: **`feature/42-dashboard-widget`**.
2. **버그 수정 브랜치 (Bugfix Branches)**:
    - `bugfix/이슈번호-버그명`** 과 같은 형식을 사용합니다.
    - 예: **`bugfix/53-login-issue`**.
3. **릴리스 브랜치 (Release Branches)**:
    - 릴리스 브랜치는 특정 버전의 릴리스를 준비하는 데 사용됩니다.
    - **`release/버전번호`** 와 같은 형식을 사용합니다.
    - 예: **`release/1.0.0`**.
4. **기타 브랜치**:
    - 기타 브랜치는 작업의 종류에 따라 다양하게 만들어질 수 있습니다. 예를 들어, 테스트를 위한 브랜치(**`test/기능명`**), 문서 작업을 위한 브랜치(**`docs/내용`**) 등이 있을 수 있습니다.
5. **메인 브랜치 (Main Branch)**:
    - **`main`** 이며 최종적으로 배포를 할 때만 사용합니다.
6. **디벨롭 브랜치 (Develop Branch)**:
    - **`develop`** 이며, 각 기능을 구현한 **feature Branch** 를 병합합니다.
7. **핫픽스 브랜치 (Hotfix Branches)**:
    - 릴리스 후 발견된 긴급한 버그를 수정하기 위한 브랜치입니다.
    - **`hotfix/버전번호-버그명`** 과 같은 형식을 사용합니다.
    - 예: **`hotfix/1.0.1-security-patch`**.
8. **Pull Request와 머지 커밋**: Pull Request 또는 머지 커밋 메시지에서 해당 브랜치의 내용을 요약하고 이슈 번호를 참조하는 것이 도움이 됩니다.


🍡Commit 컨벤션
---

|제목|설명|
|:---|:---|
|✨feat:|	기능 추가, 삭제, 변경
|🐛fix:|	버그, 오류 수정
|📝docs:|	readme.md, json 파일 등 수정, 라이브러리 설치 (문서 관련, 코드 수정 없음)
|🎨style:|	CSS 등 사용자 UI 디자인 변경, 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우
|♻️refactor:|	코드 리팩토링
|🧪test:|	테스트 코드, 리팩토링 테스트 코드 추가
|🌱chore:|	패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
|💬comment:|	필요한 주석 추가 및 변경
|🚚rename:|	파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우
|🗑remove:|	파일을 삭제하는 작업만 수행한 경우
|🛠!BREAKING CHANGE:|	커다란 API 변경의 경우
|🔥!HOTFIX:|	급하게 치명적인 버그를 고쳐야 하는 경우

