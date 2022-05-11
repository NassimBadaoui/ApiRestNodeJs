
DROP TABLE TEST_AUTH_USERS;
CREATE TABLE TEST_AUTH_USERS
  (ID_USERS NUMBER(10),
   EMAIL VARCHAR2(50),
   USERNAME VARCHAR2(50),
   PASSWORD VARCHAR2(255),
   DATE_INSCRIPTION DATE,
   BIO VARCHAR2(2000),
   ISADMIN NUMBER(10));

DROP SEQUENCE SEQ_TEST_AUTH_USERS;
CREATE SEQUENCE SEQ_TEST_AUTH_USERS START WITH 1 INCREMENT BY 1;



DROP TABLE TEST_AUTH_MESSAGES;
CREATE TABLE TEST_AUTH_MESSAGES
  (ID_MESSAGES NUMBER(10),
   ID_USERS NUMBER(10),
   TITLE VARCHAR2(50),
   CONTENT VARCHAR2(2000),
   ATTACHMENT VARCHAR2(255),
   LIKES INT(20));

DROP SEQUENCE SEQ_TEST_AUTH_MESSAGES;
CREATE SEQUENCE SEQ_TEST_AUTH_MESSAGES START WITH 1 INCREMENT BY 1;



