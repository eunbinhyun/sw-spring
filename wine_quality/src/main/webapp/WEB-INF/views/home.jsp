<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
 
<title>Home</title>
    <%@include file="./common_resource.jsp"%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/home.js" defer></script>
    <link href="${pageContext.request.contextPath}/resources/css/home.css" rel="stylesheet" />
   
     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
      <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/chart.js" defer></script>

   <script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>

</head>
<body>
 
    <h1>Hello world!</h1>
     <button id = "load_wineList" type = "button">와인 데이터 가져오기</button>
     <p id="message"></p>
 <div id="myDiv2"><!-- Plotly chart will be drawn inside this DIV --></div>
 <div id="myDiv"><!-- Plotly chart will be drawn inside this DIV --></div>
   
   

<figure class="highcharts-figure">
  <div id="container"></div>
  <p class="highcharts-description">
   
  </p>
</figure>
</body>
</html>
