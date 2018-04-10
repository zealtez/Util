/*-----------------------------
* Get Current time
*------------------------------/
<%@ page import="java.util.*, java.text.*"  %>
<%

 java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat("yyyyMMddHHmmss");
 String today = formatter.format(new java.util.Date());

 out.println(today);

%>
