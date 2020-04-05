var base_uri = "https://webtest.aioneotp.com/";
var base_dir = document.location.hostname;


  $(".edit_profile_div").hide();
    $(".cancel_button").hide();


    $(".show_edit_profile").click(function() {
        $(".edit_profile_div").show();
        $(".view_profile_div").hide();
        $(".show_edit_profile").hide();
        $(".cancel_button").show();
    });


    $(".cancel_button").click(function() {
        $(".edit_profile_div").hide();
        $(".view_profile_div").show();
        $(".cancel_button").hide();
        $(".show_edit_profile").show();
    });





$(document).ready(function() {


    $(".donate_one").hide();
    $(".vote_navigation").hide();
    $(".news_navigation").hide();
    $(".statistics_navigation").hide();
    $(".changelog_navigation").show();

    $(".news_tab").click(function() {

        $(".news_navigation").show();
        $(".statistics_navigation").hide();
        $(".changelog_navigation").hide();
        $(".vote_navigation").hide();
    });
    $(".statistics_tab").click(function() {
        $(".vote_navigation").hide();
        $(".statistics_navigation").show();
        $(".news_navigation").hide();
        $(".changelog_navigation").hide();
    });
    $(".changelog_tab").click(function() {
        $(".vote_navigation").hide();
        $(".changelog_navigation").show();
        $(".news_navigation").hide();
        $(".statistics_navigation").hide();

    });

    $(".vote_tab").click(function() {
        $(".vote_navigation").show();
        $(".changelog_navigation").hide();
        $(".news_navigation").hide();
        $(".statistics_navigation").hide();

    });

 $(".news_menu").hide();
    $(".features_menu").hide();
    $(".support_menu").hide();
    $("div.News_drop")
        .mouseover(function() {

            $(".news_menu").show();
        })

    $(".News_drop")
        .mouseout(function() {

            $(".news_menu").hide();
        });


    $("div.Features_drop")
        .mouseover(function() {

            $(".features_menu").show();
        })

    $(".Features_drop")
        .mouseout(function() {

            $(".features_menu").hide();
        });




    $("div.Support_drop")
        .mouseover(function() {

            $(".support_menu").show();
        })

    $(".Support_drop")
        .mouseout(function() {

            $(".support_menu").hide();
        });

    $(".flux4").show();
    $(".papyrus_close").hide();
    $(".Username_text").hide();
    $(".Password_text").hide();
     $(".Login_details").hide();
    $("#Account_creation_message").hide();
    $(".big_ass_login_thingy").hide();
 
    $('.papyrus_open').attr('src', 'assets/images/papyrus_field_up2.png');
    $(".browser_support_list").hide();
    $(".troubleshooting_div").hide();

    $(".game_crashes_div").hide();
    $(".mouse_rotation_div").hide();
    $(".event_issues_div").hide();
    $(".login_issues_div").hide();


    $(".event_issues").hide();
    $(".login_issues").hide();
    $(".Mouse_issues").hide();
    $(".game_crashes").hide();

    $(".login").click(function() {
        $(".buttons").hide();
        $('.papyrus').attr('src', 'assets/images/papyrus_field_up2.png');
        $('.papyrus_open').attr('src', 'assets/images/papyrus_field_up2.png');
        $(".papyrus_close").show();
        $(".Login_details").show();
        $(".Username_text").show();
        $(".Password_text").show();
    });

    $(".papyrus_close").click(function() {
        $('.papyrus_open').attr('src', 'assets/images/papyrus_field_down.png');
        $(".buttons").show();
        $('.papyrus').attr('src', 'assets/images/papyrus_field_down.png');
        $(".papyrus_close").hide();
        $(".Login_details").hide();
        $(".Username_text").hide();
        $(".Password_text").hide();
        $(".wrong_password_error").hide();
    });
    $('.papyrus_test_close').hide();
    $(".login_tests").click(function() {
        $('.papyrus_div').css('backgroundImage', 'url(assets/images/papyrus_field_up2.png)');
        $('.buttons2').hide();
        $('.papyrus_test_close').show();
        $('.Login_details').show();
    });
    $(".papyrus_test_close").click(function() {
        $('.papyrus_div').css('backgroundImage', 'url(assets/images/papyrus_field_down.png)');
        $('.buttons2').show();
        $('.papyrus_test_close').hide();
        $('.Login_details').hide();
    });
    $(".donation_text").text('Beer Lootbox');

    $("#one").click(function() {

        $(".donation_text").text('1 Beer Lootbox');
    });

    $("#five").click(function() {

        $(".donation_text").text('5 Beer Lootbox');
    });

    $("#ten").click(function() {

        $(".donation_text").text('10 Beer Lootbox');
    });

    $("#fifteen").click(function() {
        $(".donation_text").text('15 Beer Lootbox');
    });

    $("#twenty").click(function() {

        $(".donation_text").text('20 Beer Lootbox');
    });






    $(".login_container").hide();



    $(".leaderboards_side")
        .mouseover(function() {
            $('.leaderboard_image').hide();

            $('.leaderboard_text').show();

        })
        .mouseout(function() {
            $('.leaderboard_image').show();
            $('.leaderboard_text').hide();
        });


    $(".siege_schedule_side")
        .mouseover(function() {
            $('.schedule_image').hide();

            $('.schedule_text').show();
        })
        .mouseout(function() {
            $('.schedule_image').show();
            $('.schedule_text').hide();
        });



    $(".about_us_side")
        .mouseover(function() {
            $('.about_image').hide();

            $('.about_text').delay(100).show();
        })
        .mouseout(function() {
            $('.about_image').show();
            $('.about_text').hide();
        });



    $(".discord_side")
        .mouseover(function() {
            $('.discord_image').hide();

            $('.about_text').delay(100).show();
        })
        .mouseout(function() {
            $('.discord_image').show();
            $('.about_text').hide();
        });
    $(".facebook_side")
        .mouseover(function() {
            $('.facebook_image').hide();

            $('.about_text').delay(100).show();
        })
        .mouseout(function() {
            $('.facebook_image').show();
            $('.about_text').hide();
        });

});



// function hide_bundles() {
//     document.getElementById("attack_bundle").style.display = "none";
//     document.getElementById("crit_bundle").style.display = "none";
//     document.getElementById("magical_bundle").style.display = "none";
// }
// hide_bundles();

// function attack() {
//     document.getElementById("attack").disabled = true;
//     document.getElementById("crit").disabled = false;
//     document.getElementById("magical").disabled = false;


//     document.getElementById("attack_bundle").style.display = "block";
//     document.getElementById("crit_bundle").style.display = "none";
//     document.getElementById("magical_bundle").style.display = "none";
//     document.getElementById("bundle_text").innerHTML = "//dual attack";

// }

// function crit() {
//     document.getElementById("attack").disabled = false;
//     document.getElementById("crit").disabled = true;
//     document.getElementById("magical").disabled = false;


//     document.getElementById("attack_bundle").style.display = "none";
//     document.getElementById("crit_bundle").style.display = "block";
//     document.getElementById("magical_bundle").style.display = "none";
//     document.getElementById("bundle_text").innerHTML = "//dual crit";

// }


// function magical() {
//     document.getElementById("attack").disabled = false;
//     document.getElementById("crit").disabled = false;
//     document.getElementById("magical").disabled = true;


//     document.getElementById("attack_bundle").style.display = "none";
//     document.getElementById("crit_bundle").style.display = "none";
//     document.getElementById("magical_bundle").style.display = "block";
//     document.getElementById("bundle_text").innerHTML = "//dual magical";
// }