log = console.log
log("The below function jquery(()=?{}) is used to ensure that we run the code inside it after the jquery " +
    "has been loaded on client, here via our CDN")

jQuery(()=>{
    log("We can use the function jquery to access jquery functionality in js");
    log("getting h1 element")
    log(jQuery("h1"));
    log("We can also use the shorthand $ to access jquery functionality in js");

    log("getting h1 element")
    h1 = $("h1")
    log(h1);

    //fetch and mod css styles
    log("Setting CSS properties");
    log("Setting color of h1 tag");
    h1.css("color", "red");

    log("Getting CSS properties");
    log("Getting color of h1 tag");
    h1.css("color")

    //fetch and mod elements and their content

    log("Getting specific class for element");
    log("Getting black_h1 class of h1 tag");
    log($("h1.black_h1"));

    log("Getting element by id and getting specific element/tag under it");
    log("Getting div element with id header_2 and the h3 header under it");
    let id_header_with_h3_element=$("#header_2 h3")
    log(id_header_with_h3_element);

    log("Changing text of element");
    log("Getting div element with id header_2 and the h3 header under it and changing text");
    id_header_with_h3_element.text("Nested header 3");

    log("Changing html of element");
    log("Getting div element with id header_2 and the h3 header under it and changing html");
    id_header_with_h3_element.html("<em>Nested</em> header 3")

    log("Getting all element by name. There is no diff between single element selector vs all element selector its same.");
    log("Getting all button elements");
    let button = $("button");
    log(button);

    log("Adding specific class for element");
    log("Getting black_h1 class of div nested h3 tag");
    id_header_with_h3_element.addClass("black_h1");

    log("Removing specific class for element");
    log("Removing black_h1 class of h1 tag");
    h1.removeClass("black_h1");

    log("Changing text of all element that match the query, here we dont have to loop through like we did in dom");
    log("Getting div element with id header_2 and the h3 header under it and changing text");
    button.text("DONT CLICK!!");

    log("Adding multiple classes for element");
    log("Adding green_h2_bg&white_h2_text class to div nested h2 tag");
    let id_header2_with_h2_element = $("#header_2 h2");
    id_header2_with_h2_element.addClass("green_h2_bg white_h2_text");

    // fetch, mod attr

    log("Fetching attributes of element");
    log("Fetching attribute href of a tag");
    let a = $("a");
    log(a.attr("href"));


    log("Modifying  attributes of element");
    log("Modifying attribute href of a tag");
    a.attr("href","http://wwww.bing.com");

    //add/remove events

    log("Adding events to all items that match");
    log("Adding events to all buttons");
    /*button.on('click', () => {
        log("I got clicked!");
        log(this);
    });*/
    //alternate with event param to handler
    button.on('click', (event) => {
        log("I got clicked!");
        log("This is -> ");
        log(this);
        log("Jquery event obj is ->");
        log(event);
    });

    $(document).on("keypress", (event)=>{
        let key = event.key;
        $("h4").text(key);
    })

    //add/remove/append elements

    log("add element/ tag before a element");
    log("Adding a welcome button before 1st H1");
    h1.before("<button type='button'> welcome</button>");

    log("prepend element/ tag before element");
    log("prepending a welcome button before 1st H1");
    h1.prepend("<button type='button'> check-></button>");

    log("append element/ tag after a element");
    log("appending a welcome button after 1st H1");
    h1.append("<button type='button'> <-that</button>");

    log("add element/ tag after a element");
    log("Adding a bye button after H4");
    let h4 = $("h4")
    h4.after("<button type='button'>BYE!</button>");

    log("removes element(s) selected in selector");
    log("Removing Bye button");
    h4.after("<button type='button'>BYE!</button>").remove();
    //try me!
    // h1.remove();

    //animations

    log("hide a element");
    log("hide/show button with id animate");
    let animateButton = $("button#animate");
    animateButton.hide();
    animateButton.show();

    log("fade in/out/toggle a element");
    log("fade button with id animate");
    animateButton.fadeToggle();
    animateButton.fadeIn();
    animateButton.fadeOut();
    animateButton.fadeToggle();

    log("slide up/down/toggle a element");
    log("slide button with id animate");
    animateButton.slideUp();
    animateButton.slideDown();
    animateButton.slideToggle();

    log("create your own custom animate with own css");
    log("you can provide only those css properties that take numeric values")
    animateButton.animate({opacity:0.5});

    log("chaining animations");
    animateButton.slideUp().slideDown().animate({opacity:0.5});


});
