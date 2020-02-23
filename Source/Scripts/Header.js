//*************************************************************
//
// index.js
//
// Author: Zach Tumbleson
//
// Brief: Main js file for the home page of zachtubmleson.com
//
//*************************************************************

var HeaderFunctions = HeaderFunctions || {}

//Document Ready, bind hover events for menu bar
$(function(){
  HeaderFunctions.BindClickEventsForHeaderBar();
});

HeaderFunctions.BindClickEventsForHeaderBar = function(){
  let $headerBoxClass = '.HeaderBox';
  $($headerBoxClass)
  .hover(
    function(){
      $(this).css("background-color", "grey");
    }, function(){
      $(this).css("background-color", "");
    }
  );
}
