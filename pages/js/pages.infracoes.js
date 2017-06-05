(function ($) {
    'use strict';
    var editorTemplate = {
        "font-styles": function (locale) {
            return '<li class="dropdown dropup">' + '<a data-toggle="dropdown" class="btn btn-default dropdown-toggle ">    <span class="glyphicon glyphicon-font"></span>    <span class="current-font">Normal text</span>    <b class="caret"></b>  </a>' + '<ul class="dropdown-menu">    <li><a tabindex="-1" data-wysihtml5-command-value="p" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">Normal text</a></li>     <li><a tabindex="-1" data-wysihtml5-command-value="h1" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">Heading 1</a></li>    <li><a tabindex="-1" data-wysihtml5-command-value="h2" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">Heading 2</a></li>    <li><a tabindex="-1" data-wysihtml5-command-value="h3" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">Heading 3</a></li>    <li><a tabindex="-1" data-wysihtml5-command-value="h4" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">Heading 4</a></li>    <li><a tabindex="-1" data-wysihtml5-command-value="h5" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">Heading 5</a></li>    <li><a tabindex="-1" data-wysihtml5-command-value="h6" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">Heading 6</a></li>  </ul>' + '</li>';
        },
        emphasis: function (locale) {
            return '<li>' + '<div class="btn-group">' + '<a tabindex="-1" title="CTRL+B" data-wysihtml5-command="bold" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-bold"></i></a>' + '<a tabindex="-1" title="CTRL+I" data-wysihtml5-command="italic" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-italic"></i></a>' + '<a tabindex="-1" title="CTRL+U" data-wysihtml5-command="underline" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-underline"></i></a>' + '</div>' + '</li>';
        },
        blockquote: function (locale) {
            return '<li>' + '<a tabindex="-1" data-wysihtml5-display-format-name="false" data-wysihtml5-command-value="blockquote" data-wysihtml5-command="formatBlock" class="btn  btn-default" href="javascript:;" unselectable="on">' + '<i class="editor-icon editor-icon-quote"></i>' + '</a>' + '</li>'
        },
        lists: function (locale) {
            return '<li>' + '<div class="btn-group">' + '<a tabindex="-1" title="Unordered list" data-wysihtml5-command="insertUnorderedList" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-ul"></i></a>' + '<a tabindex="-1" title="Ordered list" data-wysihtml5-command="insertOrderedList" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-ol"></i></a>' + '<a tabindex="-1" title="Outdent" data-wysihtml5-command="Outdent" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-outdent"></i></a>' + '<a tabindex="-1" title="Indent" data-wysihtml5-command="Indent" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-indent"></i></a>' + '</div>' + '</li>'
        },
        image: function (locale) {
            return '<li>' + '<div class="bootstrap-wysihtml5-insert-image-modal modal fade">' + '<div class="modal-dialog ">' + '<div class="modal-content">' + '<div class="modal-header">' + '<a data-dismiss="modal" class="close">×</a>' + '<h3>Insert image</h3>' + '</div>' + '<div class="modal-body">' + '<input class="bootstrap-wysihtml5-insert-image-url form-control" value="http://">' + '</div>' + '<div class="modal-footer">' + '<a data-dismiss="modal" class="btn btn-default">Cancel</a>' + '<a data-dismiss="modal" class="btn btn-primary">Insert image</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '<a tabindex="-1" title="Insert image" data-wysihtml5-command="insertImage" class="btn  btn-default" href="javascript:;" unselectable="on">' + '<i class="editor-icon editor-icon-image"></i>' + '</a>' + '</li>'
        },
        link: function (locale) {
            return '<li>' + '<div class="bootstrap-wysihtml5-insert-link-modal modal fade">' + '<div class="modal-dialog ">' + '<div class="modal-content">' + '<div class="modal-header">' + '<a data-dismiss="modal" class="close">×</a>' + '<h3>Insert link</h3>' + '</div>' + '<div class="modal-body">' + '<input class="bootstrap-wysihtml5-insert-link-url form-control" value="http://">' + '<div class="checkbox check-success"> <input type="checkbox" class="bootstrap-wysihtml5-insert-link-target" checked="checked" value="1" id="link-checkbox"> <label for="link-checkbox">Open link in new window</label></div>' + '</div>' + '<div class="modal-footer">' + '<a data-dismiss="modal" class="btn btn-default">Cancel</a>' + '<a data-dismiss="modal" class="btn btn-primary" href="#">Insert link</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '<a tabindex="-1" title="Insert link" data-wysihtml5-command="createLink" class="btn  btn-default" href="javascript:;" unselectable="on">' + '<i class="editor-icon editor-icon-link"></i>' + '</a>' + '</li>'
        }
    }
    var editorOptions = {
        "font-styles": true,
        "emphasis": true,
        "lists": false,
        "html": false,
        "link": true,
        "image": true,
        "color": false,
        "blockquote": true,
        stylesheets: ["pages/css/editor.css"],
        customTemplates: editorTemplate
    };
    $('#mark-email').click(function () {
        $('.item .checkbox').toggle();
    });
    $('.email-list').length && $.ajax({
        dataType: "json",
        url: "/pages/js/pages.infracoes.body.js",
        success: function (data) {
            $.each(data.emails, function (i) {
                var obj = data.emails[i];
                var group = obj.group;
                var list = obj.list;
                var listViewGroupCont = $('<div/>', {
                    "class": "list-view-group-container"
                });
                listViewGroupCont.append('<div class="list-view-group-header"><span>' + group + '</span></div>');
                var ul = $('<ul/>', {
                    "class": "no-padding"
                });
                $.each(list, function (j) {
                    var $this = list[j];
                    var id = $this.id;
                    var processo = $this.processo;
                    var empresa = $this.empresa;
                    var funcao = $this.funcao;
                    var programa = $this.programa;
                    var obrigacao = $this.obrigacao;
                    var resumo = $this.resumo;
                    var paramlist1 = $this.paramlist1;
                    var paramlist2 = $this.paramlist2;
                    var periodicidade = $this.periodicidade;
                    var prazo = $this.prazo;
                    var situacao = $this.situacao;
                    var responsavel = $this.responsavel;
                    var duedate = $this.duedate;
                    var colors = ['b-success', 'b-primary', 'b-warning', 'b-info', 'b-complete', 'b-danger'];
                    var color = colors[$this.colorId];
                    var li = '<li class="item padding-15" data-email-id="' + id + '"> \
                                <div class="thumbnail-wrapper d32 circular bordered ' + color + '"> \
                                    <img width="40" height="40" alt="" data-src-retina="assets/img/profiles/activity-in.jpg" data-src="assets/img/profiles/activity-in.jpg" src="assets/img/profiles/activity-in.jpg"> \
                                </div> \
                                <div class="checkbox  no-margin p-l-10"> \
                                    <input type="checkbox" value="1" id="emailcheckbox-' + i + "-" + j + '"> \
                                    <label for="emailcheckbox-' + i + "-" + j + '"></label> \
                                </div> \
                                <div class="inline m-l-15"> \
                                    <p class="processo no-margin hint-text small">' + processo + '</p> \
                                    <p class="obrigacao no-margin">' + obrigacao + '</p> \
                                    <p class="funcao no-margin">' + funcao + '</p> \
                                </div> \
                                <div class="datetime">' + duedate + '</div> \
                                <div class="clearfix"></div> \
                            </li>';
                    ul.append(li);
                });
                listViewGroupCont.append(ul);
                $('#emailList').append(listViewGroupCont);
            });
            $("#emailList").ioslist();
        }
    });
    $('body').on('click', '.item .checkbox', function (e) {
        e.stopPropagation();
    });
    $('body').on('click', '.item', function (e) {
        e.stopPropagation();
        var id = $(this).attr('data-email-id');
        var email = null;
        var thumbnailWrapper = $(this).find('.thumbnail-wrapper');
        $.ajax({
            dataType: "json",
            url: "/pages/js/pages.infracoes.body.js",
            success: function (data) {
                $.each(data.emails, function (i) {
                    var obj = data.emails[i];
                    var list = obj.list;
                    $.each(list, function (j) {
                        if (list[j].id == id) {
                            email = list[j];
                            return;
                        }
                    });
                    if (email != null) return;
                });
                var emailOpened = $('.email-opened');
                emailOpened.find('.processo').text(email.processo);
                emailOpened.find('.empresa').text(email.empresa);
                emailOpened.find('.funcao').text(email.funcao);
                emailOpened.find('.programa').text(email.programa);
                emailOpened.find('.obrigacao').text(email.obrigacao);
                emailOpened.find('.resumo').text(email.resumo);

                var paramtecnicostext = function () {
                    var htmloutput = "";

                    htmloutput = "<div class=\"form-group\"><div class=\"\"><table class=\"table m-t-10\"><thead>";

                    $.each(email.paramlist1, function (index, value) {

                        htmloutput += "<tr><th class=\"\">";

                        htmloutput += "<p class=\"text-black\">";
                        htmloutput += "<input type=\"checkbox\" value=\"0\" checked id=\"check" + index + 100 + "\">&nbsp;&nbsp;" + value;
                        htmloutput += "<a href=\"javascript:document.getElementById('inputfile').click();\"><img src=\"assets/img/upload.gif\" class=\"brand\" data-src=\"assets/img/upload.gif\" data-src-retina=\"assets/img/upload.gif\" width=\"18\" height=\"18\"></a>&nbsp;&nbsp;";
                        htmloutput += "<a href=\"http://homol.ebravo.com.br/share/page/site/portal-cart/document-details?nodeRef=workspace://SpacesStore/d01ac19b-ed93-4fee-a766-2103b8f4e1ec\" target=\"_blank\"><img src=\"assets/img/view.gif\" class=\"brand\" data-src=\"assets/img/view.gif\" data-src-retina=\"assets/img/view.gif\" width=\"18\" height=\"18\"></a>";
                        htmloutput += "</p>";

                        htmloutput += "</th></tr>";
                    });

                    htmloutput += "</thead></table></div></div>";

                    return htmloutput;
                }

                emailOpened.find('.paramtecnicos').html(paramtecnicostext);


                var paramdesempenhotext = function () {
                    var htmloutput = "";

                    htmloutput = "<div class=\"form-group\"><div class=\"\"><table class=\"table m-t-10\"><thead>";

                    $.each(email.paramlist2, function (index, value) {

                        htmloutput += "<tr><th class=\"\">";

                        htmloutput += "<p class=\"text-black\">";
                        htmloutput += "<input type=\"checkbox\" value=\"0\" id=\"check" + index + 100 + "\">&nbsp;&nbsp;" + value + "&nbsp;&nbsp;";
                        //htmloutput += "<label class=\"\" for=\"check" + index + 100 + "\">" + value + "</label>";
                        htmloutput += "</p>";

                        htmloutput += "</th></tr>";
                    });

                    htmloutput += "</thead></table></div></div>";

                    return htmloutput;
                }

                emailOpened.find('.paramdesempenho').html(paramdesempenhotext);

                emailOpened.find('.periodicidade').text(email.periodicidade);
                emailOpened.find('.prazo').text(email.prazo);
                emailOpened.find('.situacao').text(email.situacao);
                emailOpened.find('.responsavel').text(email.responsavel);
                emailOpened.find('.duedate').text(email.duedate);
                var thumbnailClasses = thumbnailWrapper.attr('class').replace('d32', 'd48');
                emailOpened.find('.thumbnail-wrapper').html(thumbnailWrapper.html()).attr('class', thumbnailClasses);
                $('.no-email').hide();
                $('.actions-dropdown').toggle();
                $('.actions, .email-content-wrapper').show();
                if ($.Pages.isVisibleSm() || $.Pages.isVisibleXs()) {
                    $('.email-list').toggleClass('slideLeft');
                } !$('.email-reply').data('wysihtml5') && $('.email-reply').wysihtml5(editorOptions);
                $(".email-content-wrapper").scrollTop(0);
                $('.menuclipper').menuclipper({
                    bufferWidth: 20
                });
            }
        });
        $('.item').removeClass('active');
        $(this).addClass('active');
    });
    $('.toggle-email-sidebar').click(function (e) {
        e.stopPropagation();
        $('.email-sidebar').toggle();
    });
    $('.email-list-toggle').click(function () {
        $('.email-list').toggleClass('slideLeft');
    });
    $('.email-sidebar').click(function (e) {
        e.stopPropagation();
    })
    $(window).resize(function () {
        if ($(window).width() <= 1024) {
            $('.email-sidebar').hide();
        } else {
            $('.email-list').length && $('.email-list').removeClass('slideLeft');
            $('.email-sidebar').show();
        }
    });
    var emailComposerToolbarTemplate = {
        "font-styles": function (locale) {
            return '<li class="dropdown">' + '<a data-toggle="dropdown" class="btn btn-default dropdown-toggle ">' + '<span class="editor-icon editor-icon-headline"></span>' + '<span class="current-font">Normal</span>' + '<b class="caret"></b>' + '</a>' + '<ul class="dropdown-menu">' + '<li><a tabindex="-1" data-wysihtml5-command-value="p" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">Normal</a></li>' + '<li><a tabindex="-1" data-wysihtml5-command-value="h1" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">1</a></li>' + '<li><a tabindex="-1" data-wysihtml5-command-value="h2" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">2</a></li>' + '<li><a tabindex="-1" data-wysihtml5-command-value="h3" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">3</a></li>' + '<li><a tabindex="-1" data-wysihtml5-command-value="h4" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">4</a></li>' + '<li><a tabindex="-1" data-wysihtml5-command-value="h5" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">5</a></li>' + '<li><a tabindex="-1" data-wysihtml5-command-value="h6" data-wysihtml5-command="formatBlock" href="javascript:;" unselectable="on">6</a></li>' + '</ul>' + '</li>';
        },
        emphasis: function (locale) {
            return '<li>' + '<div class="btn-group">' + '<a tabindex="-1" title="CTRL+B" data-wysihtml5-command="bold" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-bold"></i></a>' + '<a tabindex="-1" title="CTRL+I" data-wysihtml5-command="italic" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-italic"></i></a>' + '<a tabindex="-1" title="CTRL+U" data-wysihtml5-command="underline" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-underline"></i></a>' + '</div>' + '</li>';
        },
        blockquote: function (locale) {
            return '<li>' + '<a tabindex="-1" data-wysihtml5-display-format-name="false" data-wysihtml5-command-value="blockquote" data-wysihtml5-command="formatBlock" class="btn  btn-default" href="javascript:;" unselectable="on">' + '<i class="editor-icon editor-icon-quote"></i>' + '</a>' + '</li>'
        },
        lists: function (locale) {
            return '<li>' + '<div class="btn-group">' + '<a tabindex="-1" title="Unordered list" data-wysihtml5-command="insertUnorderedList" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-ul"></i></a>' + '<a tabindex="-1" title="Ordered list" data-wysihtml5-command="insertOrderedList" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-ol"></i></a>' + '<a tabindex="-1" title="Outdent" data-wysihtml5-command="Outdent" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-outdent"></i></a>' + '<a tabindex="-1" title="Indent" data-wysihtml5-command="Indent" class="btn  btn-default" href="javascript:;" unselectable="on"><i class="editor-icon editor-icon-indent"></i></a>' + '</div>' + '</li>'
        },
        image: function (locale) {
            return '<li>' + '<div class="bootstrap-wysihtml5-insert-image-modal modal fade">' + '<div class="modal-dialog ">' + '<div class="modal-content">' + '<div class="modal-header">' + '<a data-dismiss="modal" class="close">×</a>' + '<h3>Insert image</h3>' + '</div>' + '<div class="modal-body">' + '<input class="bootstrap-wysihtml5-insert-image-url form-control" value="http://">' + '</div>' + '<div class="modal-footer">' + '<a data-dismiss="modal" class="btn btn-default">Cancel</a>' + '<a data-dismiss="modal" class="btn btn-primary">Insert image</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '<a tabindex="-1" title="Insert image" data-wysihtml5-command="insertImage" class="btn  btn-default" href="javascript:;" unselectable="on">' + '<i class="editor-icon editor-icon-image"></i>' + '</a>' + '</li>'
        },
        link: function (locale) {
            return '<li>' + '<div class="bootstrap-wysihtml5-insert-link-modal modal fade">' + '<div class="modal-dialog ">' + '<div class="modal-content">' + '<div class="modal-header">' + '<a data-dismiss="modal" class="close">×</a>' + '<h3>Insert link</h3>' + '</div>' + '<div class="modal-body">' + '<input class="bootstrap-wysihtml5-insert-link-url form-control" value="http://">' + '<label class="checkbox"> <input type="checkbox" checked="" class="bootstrap-wysihtml5-insert-link-target">Open link in new window</label>' + '</div>' + '<div class="modal-footer">' + '<a data-dismiss="modal" class="btn btn-default">Cancel</a>' + '<a data-dismiss="modal" class="btn btn-primary" href="#">Insert link</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '<a tabindex="-1" title="Insert link" data-wysihtml5-command="createLink" class="btn  btn-default" href="javascript:;" unselectable="on">' + '<i class="editor-icon editor-icon-link"></i>' + '</a>' + '</li>'
        },
        html: function (locale) {
            return '<li>' + '<div class="btn-group">' + '<a tabindex="-1" title="Edit HTML" data-wysihtml5-action="change_view" class="btn  btn-default" href="javascript:;" unselectable="on">' + '<i class="editor-icon editor-icon-html"></i>' + '</a>' + '</div>' + '</li>'
        }
    }
    setTimeout(function () {
        $('.email-body').length && $('.email-body').wysihtml5({
            html: true,
            stylesheets: ["pages/css/editor.css"],
            customTemplates: emailComposerToolbarTemplate
        });
        $('.email-composer .wysihtml5-toolbar').appendTo('.email-toolbar-wrapper');
    }, 500);
})(window.jQuery);