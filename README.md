# sw-spring

## Week 1: 개발환경 셋팅

1. 깃허브 계정 생성 (완료)

    * https://github.com/eunbinhyun

<br>

2. 개발환경 구성 (완료)

    * JDK/Tomcat/mybatis Eclipse 설치 
    
    * Database, table 생성 후 데이터 input

<br>

3. Spring, Mariadb, MyBatis 연동 (완료)

    * Dao, Service, Home Controller, VO 작성

    * [이슈1] root-context.xml파일 <context:component-scan> 에러

          하단 Namespaces탭에서 context에 체크


    * [이슈2] C:\..\log4j.dtd 지정된 파일을 찾을 수 없음

          log4j.dtd를 http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/xml/doc-files/log4j.dtd로 수정


    * [이슈3] Context initialized 이벤트를 [org.springframework.web.context.ContextLoaderListener] 클래스의 인스턴스인 리스너에 전송하는 동안 예외 발생

          spring-jdbc 버전을 spring 버전과 동일하게 변경 (5.1.8)


<br>

4. 기타

    * 1주차 온라인 세션 : 직무소개 및 과제 소개

      - 일시 : 8월 5일 20:00 ~ 22:00

      - 참석자 : 리드멘토 이외 멘티
