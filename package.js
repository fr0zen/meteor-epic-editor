Package.describe({
  summary: "EpicEditor is an embeddable JavaScript Markdown editor "
});

Package.on_use(function (api, where) {
  var where = ['client'];

  api.add_files(['epiceditor/js/epiceditor.js'], where);
  api.add_files(['epiceditor/themes/base/epiceditor.css',
  'epiceditor/themes/editor/epic-dark.css',
  'epiceditor/themes/preview/github.css',
  ], where, { isAsset: true });

  api.export([
      'EpicEditor',
    ], 'client');
});
