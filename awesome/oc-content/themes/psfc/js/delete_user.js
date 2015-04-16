$(document).ready(function(){
    $(".opt_delete_account a").click(function(){
        $("#dialog-delete-account").dialog('open');
    });

    $("#dialog-delete-account").dialog({
        autoOpen: false,
        modal: true,
        buttons: [
            {
                text: psfc.langs.delete,
                click: function() {
                    window.location = psfc.base_url + '?page=user&action=delete&id=' + psfc.user.id  + '&secret=' + psfc.user.secret;
                }
            },
            {
                text: psfc.langs.cancel,
                click: function() {
                    $(this).dialog("close");
                }
            }
        ]
    });
});