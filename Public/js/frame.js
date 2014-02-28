window.onload = function(){
    var pathname = location.pathname;
    var sep = pathname.lastIndexOf('/');
    var filename = pathname.substr(sep + 1); //debug(filename);
    $('#sidebar').find('[href="' + filename + '"]').addClass('active');
    //
    var type = pathname.substr(sep - 2, 2); //debug(type);
    $('.navbar-nav').find('[href^="../' + type + '"]').parent().addClass('active');
}