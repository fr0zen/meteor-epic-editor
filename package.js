Package.describe({
  summary: "EpicEditor is an embeddable JavaScript Markdown editor "
});

Package.on_use(function (api, where) {
  var where = ['client'];

  api.add_files(['EpicEditor/epiceditor/js/epiceditor.js'], where);
  api.add_files(['EpicEditor/epiceditor/epiceditor/themes/base/epiceditor.css',
  'EpicEditor/epiceditor/themes/editor/epic-dark.css',
  'EpicEditor/epiceditor/themes/preview/github.css',
  ], where, { isAsset: true });

  api.export([
      'EpicEditor',
    ], 'client');
});
