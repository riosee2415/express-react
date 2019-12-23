# Express Connect React

1. react-create-app [projectName]
2. yarn eject
   <pre>
   -Error ISSUE-
   This git repository has untracked files or uncommitted changes:
   Remove untracked files, stash or commit any changes, and try again.    
   </pre>
   만약 위와 같은 에러가 발생되는 경우 깃 커밋을 진행한 후 eject 명령어를 다시 실행한다.
   - git add .
   - git commit -m "prepare eject"
3. yarn add express
4. @babel/node @babel/core @bable/cli @babel/preset-env 설치
5. server/server.js 생성
6. config/webpack.config.dev.js 수정
7. package.json에 proxy 추가
8. 연동 테스트를 위한 app.js 수정
