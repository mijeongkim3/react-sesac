# #부모 이미지 지정 //기존 이미지를 불러오는곳  node 16 버전. node이미지를 알아서 받아서 다운받기때문에 node이미지 안받은상태에서도 이거스면 알아서 생성해서 불러옴
# FROM node:16
# #작업 디렉토리 생성 컨테이너가돌아갈때 작업디렉토리 어디로할것인지../app에서 작업하겠다
# WORKDIR /app
# #소스 추가 //컨테이너 디렉토리안에 옮겨놓겠다 
# COPY . /app 
# #패키지 설치
# RUN npm install
# #포트 매핑  //도커이미지를돌릴때 어떤 포트를 사용할건지 docker run --name node-react -p 3000:3000 node-react에서 뒤에거가 3000인거는 밑에expose가 3000이라서!앞에거는 상관없음
# EXPOSE 3000
# #실행 명령  //가장 최종적으로 실행되는 부분 
# CMD [ "npm", "run", "start"]

#base image
FROM nginx:1.21-alpine

#copy build files 이거는 nignx.conf의 localhost밑에있는 주소랑 똑같으면됨!! 이거는 컨테이너의 내부 폴더구조임 
COPY build /user/share/nginx/html

#copy nginx config file   //이거는 뒤에 경로 바꾸면 안됨 
COPY nginx.conf /etc/nginx/conf.d/default.conf
# expose port  //80이면 기본 슬래시 
EXPOSE 80

#start nginx server
CMD ["nginx", "-g", "daemon off;"]