// MENU HAMBURGER
$(function() {
  $('.menu_hamburger').on('click', function() {
    $('.nav_hamburger').toggleClass('open');
  });
});

// HIDE AND SHOW IN FORM
$(".answer_present").hide();
$(".will_be_present").click(function() {
    if($(this).is(":checked")) {
        $(".answer_present").show();
    } else {
        $(".answer_present").hide();
    }
});


$(".wont_be_present").click(function() {
    if($(this).is(":checked")) {
        $(".answer_present").hide();
    }
});


$(".answer_with_someone").hide();
$(".with_someone").click(function() {
    if($(this).is(":checked")) {
        $(".answer_with_someone").show();
    } else {
        $(".answer_with_someone").hide();
    }
});


$(".alone").click(function() {
    if($(this).is(":checked")) {
        $(".answer_with_someone").hide();
    }
});


$(".answer_child").hide();
$(".with_child").click(function() {
    if($(this).is(":checked")) {
        $(".answer_child").show();
    } else {
        $(".answer_child").hide();
    }
});


$(".without_child").click(function() {
    if($(this).is(":checked")) {
        $(".answer_child").hide();
    }
});

$(".add_a_child").hide();
$(".addchild").click(function() {
      $(".add_a_child").show();
      $(".addchild").hide();
});

$(".add_a_child1").hide();
$(".addchild1").click(function() {
      $(".add_a_child1").show();
      $(".addchild1").hide();
});

$(".add_a_child2").hide();
$(".addchild2").click(function() {
      $(".add_a_child2").show();
      $(".addchild2").hide();
});
