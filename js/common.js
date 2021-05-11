$(function() {
  /*script 영역 load html사용 예*/

  // $("ul li").click(function(){
  //   console.log($(this).attr("id"))
  //   let thisId = $(this).attr("id");
  //   if(thisId == "section1" ){
  //     $("#content").load("./load.html #section1")
  //   }else if(thisId == "section2" ){
  //     $("#content").load("./load.html #section2")
  //   }else if(thisId == "section3" ){
  //     $("#content").load("./load.html #section3")
  //   }
  // });

  $("ul li").click(function() {
    // click 하는 요소 index값 가져와서 처리
    console.log($(this).index())
    let thisIndex = $(this).index() + 1;
    let thisId = $(this).attr("id");
    if (thisId == "section" + thisIndex) {
      $("#content").load("./load.html #section" + thisIndex)
    }
  })
});
